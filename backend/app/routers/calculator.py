from fastapi import APIRouter, Depends, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from ..schemas import ROICalculatorInput, ROICalculatorOutput
from ..models import CalculatorSubmission, IndustryType
from ..dependencies import get_db
from ..services import crm_service

router = APIRouter()

# Benchmarks for retention improvement by industry (conservative estimates)
BENCHMARKS = {
    IndustryType.FINANCE: {"uplift": 0.15, "cost_base": 5000},
    IndustryType.ECOMMERCE: {"uplift": 0.20, "cost_base": 3000},
    IndustryType.SAAS: {"uplift": 0.25, "cost_base": 4000},
    IndustryType.HEALTHCARE: {"uplift": 0.10, "cost_base": 6000},
    IndustryType.OTHER: {"uplift": 0.10, "cost_base": 4000},
}

def calculate_roi_logic(data: ROICalculatorInput) -> ROICalculatorOutput:
    industry_data = BENCHMARKS.get(data.industry, BENCHMARKS[IndustryType.OTHER])
    uplift_percent = industry_data["uplift"]
    
    # Simple logic: Savings = Revenue at Risk * Uplift
    # Revenue at Risk = Customers * AvgRev * Churn%
    revenue_at_risk = data.customer_count * data.avg_revenue * (data.churn_rate / 100.0)
    potential_savings = revenue_at_risk * uplift_percent
    
    # Break even usually depends on tool cost. Let's assume tool cost is 'cost_base' monthly.
    tool_cost_monthly = industry_data["cost_base"] / 12 * (data.customer_count / 1000) # Fake scaling
    if tool_cost_monthly < 500: tool_cost_monthly = 500 # Min price
    
    break_even_months = 0
    if potential_savings > 0:
        # Savings usually monthly? Assuming input is Annual Revenue/Churn?
        # Usually Churn is monthly or annual. Let's assume Annual inputs -> Annual Savings.
        monthly_savings = potential_savings / 12
        if monthly_savings > tool_cost_monthly:
            break_even_months = tool_cost_monthly / (monthly_savings - tool_cost_monthly) # Time to recover investment? 
            # Simplified: Cost / Monthly Savings
            break_even_months = tool_cost_monthly / monthly_savings
        else:
            break_even_months = 999 
    
    return ROICalculatorOutput(
        potential_savings=round(potential_savings, 2),
        retention_uplift_percent=round(uplift_percent * 100, 1),
        break_even_point_months=round(break_even_months, 1)
    )

@router.post("/calculate-roi", response_model=ROICalculatorOutput)
async def calculate_roi(
    data: ROICalculatorInput, 
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    # 1. Calculate
    result = calculate_roi_logic(data)
    
    # 2. Save Submission (Analytics)
    submission = CalculatorSubmission(
        email=data.email,
        industry=data.industry,
        customer_count=data.customer_count,
        avg_revenue=data.avg_revenue,
        churn_rate=data.churn_rate,
        potential_savings=result.potential_savings,
        retention_uplift_percent=result.retention_uplift_percent,
        break_even_point_months=result.break_even_point_months
    )
    db.add(submission)
    await db.commit()
    
    # 3. If email provided, treat as Lead Event
    if data.email:
        # Trigger lead capture or update logic here
        pass

    return result
