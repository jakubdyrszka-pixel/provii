# AIProfitHub

This project is structured for seamless deployment on Vercel.

## Structure

- **Frontend**: Next.js application at the root (`/`).
- **Backend**: FastAPI application in `/api`.

## Development

1. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies:**
   ```bash
   pip install -r api/requirements.txt
   ```

3. **Run Locally:**
   - Frontend: `npm run dev` (Runs on http://localhost:3000)
   - Backend: You need to run the backend separately on port 8000.
     ```bash
     cd api/app
     uvicorn main:app --reload --port 8000
     ```

## Deployment to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js.
4. **Environment Variables**: Use `env_template.txt` to configure your environment variables in Vercel Project Settings.
5. The `vercel.json` file handles routing API requests (`/api/*`) to the Python backend.

## Environment Variables

Copy `env_template.txt` to `.env` locally (gitignored) and set values in Vercel.
