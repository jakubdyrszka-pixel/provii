from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "AIProfitHub Backend"
    API_V1_STR: str = "/api/v1"
    
    # Database
    DATABASE_URL: str = "postgresql+asyncpg://user:password@localhost/dbname"
    
    # Redis (for Rate Limiting)
    REDIS_URL: str = "redis://localhost:6379"

    # Security
    SECRET_KEY: str = "your-super-secret-key"
    
    # CRM
    CRM_API_KEY: Optional[str] = None
    CRM_API_URL: Optional[str] = None
    
    # Email
    SMTP_HOST: Optional[str] = None
    SMTP_PORT: int = 587
    SMTP_USER: Optional[str] = None
    SMTP_PASSWORD: Optional[str] = None
    FROM_EMAIL: str = "info@aiprofithub.com"

    class Config:
        env_file = ".env"

settings = Settings()
