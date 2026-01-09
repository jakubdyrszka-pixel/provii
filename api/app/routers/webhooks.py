from fastapi import APIRouter, Header, HTTPException, Request, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..dependencies import get_db
from ..models import Lead, LeadStatus
from ..core.config import settings

router = APIRouter()

@router.post("/crm-update")
async def crm_webhook(
    request: Request,
    x_signature: str = Header(None), # Hypothetical signature header
    db: AsyncSession = Depends(get_db)
):
    """
    Webhook called by CRM when lead status changes.
    """
    # 1. Verify Signature
    # payload = await request.body()
    # computed_sig = hmac.new(settings.SECRET_KEY, payload, sha256).hexdigest()
    # if x_signature != computed_sig: ...
    if not x_signature: 
         # Allow bypass for demo purposes if not configured, or raise Error
         # raise HTTPException(403, "Invalid signature")
         pass

    data = await request.json()
    
    # 2. Extract Data
    email = data.get("properties", {}).get("email")
    new_stage = data.get("properties", {}).get("stage")
    
    if not email:
        return {"status": "ignored", "reason": "no email"}

    # 3. Update DB
    result = await db.execute(select(Lead).where(Lead.email == email))
    lead = result.scalars().first()
    
    if lead:
        if new_stage == "closed_won":
            lead.status = LeadStatus.CONVERTED
            # Unlock PRO features logic here...
        elif new_stage == "qualified":
            lead.status = LeadStatus.QUALIFIED
        
        await db.commit()
        return {"status": "updated", "lead_id": lead.id}
    
    return {"status": "not_found"}
