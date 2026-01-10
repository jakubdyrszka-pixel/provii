from fastapi import BackgroundTasks
import asyncio
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiosmtplib
from typing import Optional
from ..core.config import settings

async def send_email(to_email: str, subject: str, html_content: str, text_content: Optional[str] = None):
    """
    Send email via SMTP (Gmail, SendGrid, AWS SES, etc.)
    """
    if not settings.SMTP_HOST:
        print(f"[Email Service] SMTP not configured. Would send to {to_email}: {subject}")
        return
    
    message = MIMEMultipart("alternative")
    message["From"] = settings.FROM_EMAIL
    message["To"] = to_email
    message["Subject"] = subject
    
    # Add text and HTML parts
    if text_content:
        part1 = MIMEText(text_content, "plain")
        message.attach(part1)
    
    part2 = MIMEText(html_content, "html")
    message.attach(part2)
    
    try:
        await aiosmtplib.send(
            message,
            hostname=settings.SMTP_HOST,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASSWORD,
            use_tls=True,
        )
        print(f"[Email Service] Email sent to {to_email}")
    except Exception as e:
        print(f"[Email Service] Error sending email: {e}")

def get_lead_confirmation_email(lead_id: int, first_name: Optional[str] = None) -> str:
    """
    Professional HTML email template for lead confirmation
    """
    name = first_name or "Szanowny Kliencie"
    
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
            }}
            .container {{
                background-color: #ffffff;
                border-radius: 12px;
                padding: 40px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }}
            .header {{
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 3px solid #6366f1;
            }}
            .logo {{
                font-size: 28px;
                font-weight: 700;
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }}
            .ticket-number {{
                display: inline-block;
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 20px;
                font-weight: 600;
                margin: 20px 0;
            }}
            .content {{
                margin: 30px 0;
            }}
            .highlight {{
                background-color: #f0f9ff;
                border-left: 4px solid #6366f1;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
            }}
            .cta-button {{
                display: inline-block;
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                color: white;
                padding: 14px 32px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                margin: 20px 0;
                text-align: center;
            }}
            .footer {{
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                font-size: 14px;
                color: #6b7280;
            }}
            .timeline {{
                margin: 30px 0;
            }}
            .timeline-item {{
                display: flex;
                align-items: center;
                margin: 15px 0;
            }}
            .timeline-icon {{
                width: 32px;
                height: 32px;
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                margin-right: 15px;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">Antigravity</div>
                <p style="color: #6b7280; margin-top: 10px;">Optymalizacja Google w Abonamencie</p>
            </div>
            
            <div class="content">
                <h2 style="color: #1f2937;">Cześć {name}! 👋</h2>
                
                <p>Dziękujemy za zainteresowanie naszymi usługami. Twoje zgłoszenie zostało pomyślnie przyjęte.</p>
                
                <div style="text-align: center;">
                    <div class="ticket-number">
                        Zgłoszenie #{lead_id:04d}
                    </div>
                </div>
                
                <div class="highlight">
                    <strong>✓ Co dalej?</strong><br>
                    Twój dedykowany opiekun skontaktuje się z Tobą w ciągu <strong>24 godzin</strong> (dni robocze).
                </div>
                
                <div class="timeline">
                    <h3 style="color: #1f2937;">Następne kroki:</h3>
                    <div class="timeline-item">
                        <div class="timeline-icon">1</div>
                        <div>Analiza Twojej strony i potrzeb biznesowych</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">2</div>
                        <div>Przygotowanie spersonalizowanej oferty</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">3</div>
                        <div>Rozmowa z ekspertem i omówienie strategii</div>
                    </div>
                </div>
                
                <p style="margin-top: 30px;">W międzyczasie możesz:</p>
                <ul style="color: #4b5563;">
                    <li>Przygotować dostęp do Google Search Console</li>
                    <li>Zebrać pytania dotyczące SEO</li>
                    <li>Sprawdzić nasze <a href="https://twoja-domena.pl/case-studies" style="color: #6366f1;">case studies</a></li>
                </ul>
            </div>
            
            <div class="footer">
                <p><strong>Antigravity</strong> - Profesjonalna Optymalizacja Google</p>
                <p style="font-size: 12px; color: #9ca3af;">
                    Masz pytania? Odpowiedz na tego maila lub napisz na: {settings.FROM_EMAIL}
                </p>
            </div>
        </div>
    </body>
    </html>
    """

def get_admin_notification_email(lead_data: dict) -> str:
    """
    Email notification for admin with lead details
    """
    priority_emoji = {
        "urgent": "🔴",
        "high": "🟠",
        "medium": "🟡",
        "low": "🟢"
    }
    
    priority = lead_data.get("priority", "medium")
    emoji = priority_emoji.get(priority, "⚪")
    
    package_names = {
        "visibility_boost": "Visibility Boost (499 PLN)",
        "market_core": "Market Core (999 PLN)",
        "market_dominance": "Market Dominance (1999 PLN)",
        "custom": "Custom"
    }
    
    package = lead_data.get("package", "Nie wybrano")
    package_display = package_names.get(package, package) if package != "Nie wybrano" else package
    
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9fafb;
            }}
            .container {{
                background-color: #ffffff;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }}
            .priority-badge {{
                display: inline-block;
                padding: 6px 12px;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 20px;
            }}
            .priority-urgent {{ background-color: #fee2e2; color: #991b1b; }}
            .priority-high {{ background-color: #fed7aa; color: #9a3412; }}
            .priority-medium {{ background-color: #fef3c7; color: #92400e; }}
            .priority-low {{ background-color: #d1fae5; color: #065f46; }}
            .info-grid {{
                display: grid;
                gap: 15px;
                margin: 20px 0;
            }}
            .info-item {{
                background-color: #f9fafb;
                padding: 12px;
                border-radius: 6px;
                border-left: 3px solid #6366f1;
            }}
            .info-label {{
                font-size: 12px;
                color: #6b7280;
                text-transform: uppercase;
                font-weight: 600;
            }}
            .info-value {{
                font-size: 16px;
                color: #1f2937;
                margin-top: 4px;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h2 style="margin-top: 0;">🎯 Nowy Lead #{lead_data.get('id', 'N/A'):04d}</h2>
            
            <div class="priority-badge priority-{priority}">
                {emoji} Priorytet: {priority.upper()}
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Imię i Nazwisko</div>
                    <div class="info-value">{lead_data.get('first_name', '')} {lead_data.get('last_name', '')}</div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value"><a href="mailto:{lead_data.get('email')}">{lead_data.get('email')}</a></div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Telefon</div>
                    <div class="info-value">{lead_data.get('phone', 'Nie podano')}</div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Firma</div>
                    <div class="info-value">{lead_data.get('company', 'Nie podano')}</div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Domena</div>
                    <div class="info-value">{lead_data.get('domain', 'Nie podano')}</div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Wybrany Pakiet</div>
                    <div class="info-value"><strong>{package_display}</strong></div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Źródło</div>
                    <div class="info-value">{lead_data.get('source', 'unknown')}</div>
                </div>
            </div>
            
            {f'<div style="background-color: #eff6ff; padding: 15px; border-radius: 6px; margin-top: 20px;"><strong>Notatki:</strong><br>{lead_data.get("notes")}</div>' if lead_data.get('notes') else ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
                <p><strong>Metadane:</strong></p>
                <p>IP: {lead_data.get('ip_address', 'N/A')}<br>
                User Agent: {lead_data.get('user_agent', 'N/A')[:100]}...</p>
            </div>
        </div>
    </body>
    </html>
    """

async def send_lead_confirmation(email: str, lead_id: int, first_name: Optional[str] = None):
    """
    Send confirmation email to the lead
    """
    html_content = get_lead_confirmation_email(lead_id, first_name)
    text_content = f"""
    Cześć {first_name or 'Szanowny Kliencie'}!
    
    Dziękujemy za zainteresowanie naszymi usługami. Twoje zgłoszenie #{lead_id:04d} zostało pomyślnie przyjęte.
    
    Twój dedykowany opiekun skontaktuje się z Tobą w ciągu 24 godzin (dni robocze).
    
    Pozdrawiamy,
    Zespół Antigravity
    """
    
    await send_email(
        to_email=email,
        subject=f"✓ Zgłoszenie #{lead_id:04d} przyjęte - Antigravity",
        html_content=html_content,
        text_content=text_content
    )

async def send_admin_notification(lead_data: dict, admin_emails: list[str]):
    """
    Send notification to admin(s) about new lead
    """
    html_content = get_admin_notification_email(lead_data)
    
    priority = lead_data.get("priority", "medium")
    priority_prefix = "🔴 URGENT" if priority == "urgent" else "🟠 HIGH PRIORITY" if priority == "high" else ""
    
    subject = f"{priority_prefix} Nowy Lead #{lead_data.get('id', 'N/A'):04d} - {lead_data.get('email')}"
    
    for admin_email in admin_emails:
        await send_email(
            to_email=admin_email,
            subject=subject.strip(),
            html_content=html_content
        )

async def send_welcome_email(email: str, name: str = "User"):
    """
    Legacy function - redirects to send_lead_confirmation
    """
    await send_lead_confirmation(email, 0, name)

async def send_calendar_invite(email: str, ics_content: str):
    await asyncio.sleep(0.5)
    print(f"[Email Service] Sending calendar invite to {email}")
    # implementation with smtplib or Email provider API

