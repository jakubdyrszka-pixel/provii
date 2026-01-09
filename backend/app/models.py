from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Enum, JSON, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import enum
from datetime import datetime

Base = declarative_base()

class LeadStatus(str, enum.Enum):
    NEW = "new"
    CONTACTED = "contacted"
    QUALIFIED = "qualified"
    CONVERTED = "converted"
    LOST = "lost"

class IndustryType(str, enum.Enum):
    FINANCE = "finance"
    ECOMMERCE = "ecommerce"
    SAAS = "saas"
    HEALTHCARE = "healthcare"
    OTHER = "other"

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    company = Column(String, nullable=True)
    source = Column(String, index=True)  # pricing, contact_form, etc.
    status = Column(Enum(LeadStatus), default=LeadStatus.NEW)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_verified = Column(Boolean, default=False)
    
    # Anti-spam / tracking
    ip_address = Column(String, nullable=True)
    user_agent = Column(String, nullable=True)

class CalculatorSubmission(Base):
    __tablename__ = "calculator_submissions"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True, nullable=True) # Optional link to lead
    industry = Column(Enum(IndustryType))
    customer_count = Column(Integer)
    avg_revenue = Column(Float)
    churn_rate = Column(Float)
    
    # Results
    potential_savings = Column(Float)
    retention_uplift_percent = Column(Float)
    break_even_point_months = Column(Float)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class ContentDownload(Base):
    __tablename__ = "content_downloads"

    id = Column(Integer, primary_key=True, index=True)
    lead_id = Column(Integer, ForeignKey("leads.id"), nullable=True)
    email = Column(String, index=True) # Redundant but useful if lead doesn't exist yet/quick lookup
    resource_id = Column(String, index=True) # e.g., 'whitepaper_q1_2025'
    downloaded_at = Column(DateTime(timezone=True), server_default=func.now())

class DemoRequest(Base):
    __tablename__ = "demo_requests"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    requested_slot = Column(DateTime(timezone=True))
    status = Column(String, default="pending") # pending, confirmed, cancelled
    created_at = Column(DateTime(timezone=True), server_default=func.now())

