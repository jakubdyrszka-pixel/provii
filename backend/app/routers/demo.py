from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from datetime import datetime, timedelta
from ics import Calendar, Event

from ..schemas import DemoRequestInput, DemoRequestResponse
from ..models import DemoRequest
from ..dependencies import get_db
from ..services import email_service

router = APIRouter()

@router.post("/", response_model=DemoRequestResponse)
async def request_demo(
    demo_in: DemoRequestInput,
    db: AsyncSession = Depends(get_db)
):
    # 1. Anti-duplicate check (max 5 per hour)
    one_hour_ago = datetime.utcnow() - timedelta(hours=1)
    query = select(func.count(DemoRequest.id)).where(
        DemoRequest.email == demo_in.email,
        DemoRequest.created_at > one_hour_ago
    )
    result = await db.execute(query)
    count = result.scalar()
    
    if count >= 5:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many demo requests. Please try again later."
        )
        
    # 2. Check availability (Mock)
    if demo_in.requested_slot.hour < 9 or demo_in.requested_slot.hour > 17:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Requested slot is outside business hours."
        )

    # 3. Create ICS
    c = Calendar()
    e = Event()
    e.name = "Demo Call: AI Profit Hub"
    e.begin = demo_in.requested_slot
    e.duration = {"minutes": 30}
    e.description = f"Demo for {demo_in.email}. Notes: {demo_in.notes}"
    c.events.add(e)
    ics_string = str(c)

    # 4. Save to DB
    new_request = DemoRequest(
        email=demo_in.email,
        requested_slot=demo_in.requested_slot
    )
    db.add(new_request)
    await db.commit()
    
    # 5. Send Invite
    # background_tasks.add_task(email_service.send_calendar_invite, demo_in.email, ics_string)

    return DemoRequestResponse(
        message="Demo requested successfully. Check your email for the calendar invite.",
        ics_content=ics_string
    )
