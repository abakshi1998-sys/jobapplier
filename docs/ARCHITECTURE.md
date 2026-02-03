# Architecture Overview

This document describes the high-level architecture for JobApplier and where responsibilities live in the repository.

## Components
- Frontend (Next.js App Router)
  - User-facing UI (dashboard, saved jobs, tracker, job cards)
  - Fetches from backend REST API for jobs, applications and resume generation
- Backend (FastAPI)
  - REST endpoints for ingestion, resume generation, job management, and alerts
  - Business logic and integrations (OpenAI, dedupe, alerts)
- Scrapers
  - Site-specific scrapers (Remotive, Wellfound, etc.) that produce job data
  - Runner script to orchestrate scraping runs
- Database (PostgreSQL / Supabase)
  - Stores jobs, users, applications, dedupe keys and audit metadata
- Scheduler / Worker
  - Periodic tasks for running scrapers, ingestion, deduplication and alerts
  - Can be a cron job, serverless schedule, or background worker (e.g., Celery/RQ)
- AI Integration
  - OpenAI (or an equivalent LLM) used to generate tailored resumes and match scores
  - Encapsulated behind backend/app/services/ai_resume.py

## Data flow
1. Scrapers fetch job listings from third-party sources and POST to backend ingestion endpoints (or write to an ingestion queue).
2. Backend ingestion endpoint validates, normalizes and persists job records to the database.
3. Deduplication logic computes keys/hashes to avoid duplicate job entries.
4. Scheduler triggers periodic scrapes and background jobs to keep data fresh.
5. When a user requests a tailored resume, the backend calls the AI Integration service to generate text, a match score and suggested skills; the backend stores the result and returns it to the frontend.

## Folder mapping
- backend/app/ — FastAPI application, routes, services, models and tasks
- scrapers/ — scraper scripts and a runner orchestrator
- frontend/ — Next.js project (App Router), UI components and pages
- database/ — SQL schema and migration artifacts

## Non-functional considerations
- Scalability: run scrapers as separate workers; offload heavy AI calls to background jobs; use paging and indexes for job queries.
- Security: keep secrets in environment variables; restrict DB access; validate/escape external data.
- Observability: add structured logs, request tracing and metrics for scrapers and scheduler jobs.
- Reliability: retry policies for scraper network calls and AI API requests; isolate long-running jobs to workers.
- Cost: batch AI requests where possible and cache results to reduce repeated calls.

## Deployment hints
- Database: provision PostgreSQL (or Supabase). Apply `database/schema.sql` before running the backend.
- Backend: deploy to Railway/Render/Heroku and set environment variables (DATABASE_URL, OPENAI_API_KEY, etc.).
- Frontend: deploy to Vercel and point API calls to the backend base URL.
- Scheduler: configure a daily cron (or use a cloud scheduler) to run `backend/app/tasks/scheduler.py` or run scrapers via a worker.
