# jobapplier

## Architecture Overview
See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the system layout, data flow, and non-functional notes.

## Folder Structure
```
backend/
  app/
    api/routes/        # FastAPI routes
    core/              # settings/config
    db/                # models + db session
    services/          # AI resume + dedupe + alerts
    tasks/             # scheduler jobs
scrapers/              # scraping services
frontend/              # Next.js app (App Router)
database/              # SQL schema
```

## Backend Scaffolding Highlights
- **FastAPI app**: `backend/app/main.py`
- **Resume generation endpoint**: `backend/app/api/routes/resume.py`
- **Job ingestion + dedupe**: `backend/app/api/routes/jobs.py`
- **OpenAI integration stub**: `backend/app/services/ai_resume.py`

## Frontend Component Examples
- **Job card UI**: `frontend/app/components/JobCard.tsx`
- **Dashboard page**: `frontend/app/dashboard/page.tsx`
- **Saved jobs page**: `frontend/app/saved-jobs/page.tsx`
- **Application tracker**: `frontend/app/tracker/page.tsx`

## Scraper Logic Sample
- **Remotive API**: `scrapers/remotive.py`
- **Playwright placeholder**: `scrapers/wellfound.py`
- **Runner**: `scrapers/runner.py`

## AI Integration
Wire the OpenAI API call inside `backend/app/services/ai_resume.py`. The stub returns a sample response with:
- Tailored resume text
- Match score
- Matching/missing skills

## Deployment Steps
1. **Database**: Provision PostgreSQL/Supabase and apply `database/schema.sql`.
2. **Backend**: Deploy FastAPI to Railway/Render, configure `.env` (DB URL, OpenAI key).
3. **Frontend**: Deploy Next.js to Vercel and point API calls to the backend.
4. **Scheduler**: Configure daily cron to run `backend/app/tasks/scheduler.py`.
