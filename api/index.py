
import sys
import os

# Add current directory to python path for imports
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.main import app

# Optional: Set root_path if Vercel strips/rewrites, but typically with vercel.json rewrite 
# passing the full path, and FastAPI handling it, we might need to adjust.
# For now, we expose the unmodified app.
