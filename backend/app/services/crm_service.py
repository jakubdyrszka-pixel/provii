import asyncio
from ..core.config import settings

async def push_lead_to_crm(lead_data: dict):
    """
    Simulate pushing lead to HubSpot/Pipedrive/Salesforce.
    In production, use httpx to call CRM API.
    """
    # Simulate network delay
    await asyncio.sleep(1)
    print(f"[CRM Integration] Pushed lead {lead_data.get('email')} to CRM. Source: {lead_data.get('source')}")
    # Example:
    # async with httpx.AsyncClient() as client:
    #     resp = await client.post(settings.CRM_API_URL, json=lead_data, headers={"Authorization": ...})

async def update_crm_status(email: str, status: str):
    await asyncio.sleep(0.5)
    print(f"[CRM Integration] Updated status for {email} to {status}")
