from pydantic import BaseModel, EmailStr, Field, field_validator, ConfigDict
from typing import Optional, Literal
from .models import IndustryType
from datetime import datetime

# --- Shared ---

# --- Leads ---
class LeadCreate(BaseModel):
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    company: Optional[str] = None
    source: Literal['pricing', 'contact_form', 'whitepaper_download', 'roi_calculator', 'other'] = 'other'
    
    # Honeypot field - should be empty. If filled, it's spam.
    website_url_check: Optional[str] = Field(None, description="Honeypot field, do not fill")

    @field_validator('website_url_check')
    @classmethod
    def check_honeypot(cls, v: Optional[str]) -> Optional[str]:
        if v:
            raise ValueError('Spam detected')
        return v

class LeadResponse(BaseModel):
    id: int
    email: str
    status: str
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

# --- Calculator ---
class ROICalculatorInput(BaseModel):
    industry: IndustryType
    customer_count: int = Field(..., gt=0, description="Number of active customers")
    avg_revenue: float = Field(..., gt=0, description="Average revenue per customer")
    churn_rate: float = Field(..., ge=0, le=100, description="Annual churn rate in percent")
    email: Optional[EmailStr] = None # Optional for lead capture

class ROICalculatorOutput(BaseModel):
    potential_savings: float
    retention_uplift_percent: float
    break_even_point_months: float
    currency: str = "USD"

# --- Demo Request ---
class DemoRequestInput(BaseModel):
    email: EmailStr
    requested_slot: datetime
    notes: Optional[str] = None

class DemoRequestResponse(BaseModel):
    message: str
    ics_content: Optional[str] = None # Or link to download

# --- Webhooks ---
class CBDWebhookPayload(BaseModel):
    # Example payload from a CRM like HubSpot
    event_type: str
    object_id: str
    properties: dict
