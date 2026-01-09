from fastapi import BackgroundTasks
import asyncio

async def send_welcome_email(email: str, name: str = "User"):
    """
    Simulate sending an email via SES/SendGrid.
    """
    await asyncio.sleep(0.5)
    print(f"[Email Service] Sending welcome email to {email}")

async def send_calendar_invite(email: str, ics_content: str):
    await asyncio.sleep(0.5)
    print(f"[Email Service] Sending calendar invite to {email}")
    # implementation with smtplib or Email provider API
