from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_limiter import FastAPILimiter
import redis.asyncio as redis
from contextlib import asynccontextmanager

from .core.config import settings
from .routers import leads, calculator, demo, webhooks
from .models import Base
from .dependencies import engine

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Redis connection
    r = redis.from_url(settings.REDIS_URL, encoding="utf-8", decode_responses=True)
    await FastAPILimiter.init(r)
    
    # Init DB tables (for demo purposes - usually use Alembic)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    yield
    
    # Shutdown
    await r.close()

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Update in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(leads.router, prefix=f"{settings.API_V1_STR}/leads", tags=["leads"])
app.include_router(calculator.router, prefix=f"{settings.API_V1_STR}/tools", tags=["tools"])
app.include_router(demo.router, prefix=f"{settings.API_V1_STR}/demo-request", tags=["demo"])
app.include_router(webhooks.router, prefix=f"{settings.API_V1_STR}/webhooks", tags=["webhooks"])

@app.get("/")
async def root():
    return {"message": "AI Profit Hub Backend API is running"}
