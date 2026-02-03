# JobApplier Architecture Overview

## System Overview
- **Frontend (Next.js + TailwindCSS)**: Dashboard UI for browsing jobs, saving roles, and tracking applications.
- **Backend (FastAPI)**: API layer for job ingestion, resume tailoring, and alert workflows.
- **Database (PostgreSQL/Supabase)**: Persist jobs and application tracking data.
- **Scrapers (Python + Playwright/Requests)**: Collects listings from multiple sources.
- **AI Service (OpenAI API)**: Tailors resumes, computes match scores, and identifies missing skills.
- **Scheduler**: Runs daily to scrape and send alerts.

## Data Flow
1. Scheduler triggers scraper runner.
2. Scrapers normalize job data and pass it through dedupe logic.
3. Jobs are stored in PostgreSQL.
4. Frontend queries backend for job listings.
5. Resume generation endpoint sends JD + base resume to OpenAI.
6. Alerts notify user when new roles are found.

## Non-Functional Notes
- Keep scrapes low frequency to avoid rate limiting.
- Add retries and circuit breakers for scraping failures.
- Design models to be multi-tenant ready for future expansion.
