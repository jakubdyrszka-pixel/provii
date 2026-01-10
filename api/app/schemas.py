from pydantic import BaseModel, EmailStr, Field, field_validator, ConfigDict
from typing import Optional, Literal, List
from .models import IndustryType, LeadStatus, LeadPriority, PackageType
from datetime import datetime

# --- Shared ---

# --- Leads ---
class LeadCreate(BaseModel):
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    domain: Optional[str] = None
    package: Optional[PackageType] = None
    source: Literal['pricing', 'contact_form', 'whitepaper_download', 'roi_calculator', 'start_form', 'other'] = 'other'
    notes: Optional[str] = None
    
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
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    domain: Optional[str] = None
    package: Optional[str] = None
    priority: str
    status: str
    source: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    model_config = ConfigDict(from_attributes=True)

class LeadUpdate(BaseModel):
    status: Optional[LeadStatus] = None
    priority: Optional[LeadPriority] = None
    notes: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    company: Optional[str] = None

class LeadDetailResponse(LeadResponse):
    notes: Optional[str] = None
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None

class LeadListResponse(BaseModel):
    total: int
    leads: List[LeadResponse]
    
class LeadStatsResponse(BaseModel):
    total_leads: int
    new_leads: int
    contacted_leads: int
    qualified_leads: int
    converted_leads: int
    high_priority_leads: int

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
