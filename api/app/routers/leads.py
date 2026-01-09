from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks, status, Request
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi_limiter.depends import RateLimiter

from ..models import Lead, LeadStatus
from ..schemas import LeadCreate, LeadResponse
from ..dependencies import get_db
from ..services import crm_service, email_service

router = APIRouter()

@router.post("/", response_model=LeadResponse, status_code=status.HTTP_201_CREATED, dependencies=[Depends(RateLimiter(times=5, seconds=60))])
async def create_lead(
    lead_in: LeadCreate, 
    background_tasks: BackgroundTasks,
    request: Request,
    db: AsyncSession = Depends(get_db)
):
    """
    Capture a new lead from various sources.
    protected by RateLimiter (5 req / 60s per IP).
    """
    # 1. Validation is handled by Pydantic (including honeypot)
    
    # 2. Check if exists (optional logic, maybe update instead)
    # For now, just create new.
    
    # 3. Save to DB
    new_lead = Lead(
        email=lead_in.email,
        first_name=lead_in.first_name,
        last_name=lead_in.last_name,
        company=lead_in.company,
        source=lead_in.source,
        ip_address=request.client.host,
        user_agent=request.headers.get("user-agent"),
        status=LeadStatus.NEW
    )
    db.add(new_lead)
    await db.commit()
    await db.refresh(new_lead)
    
    # 4. Async Tasks
    lead_dict = {
        "email": new_lead.email,
        "first_name": new_lead.first_name,
        "source": new_lead.source
    }
    background_tasks.add_task(crm_service.push_lead_to_crm, lead_dict)
    background_tasks.add_task(email_service.send_welcome_email, new_lead.email, new_lead.first_name)
    
    return new_lead
