from typing import List

from fastapi import APIRouter

from app.db.models import Job
from app.services.dedupe import dedupe_jobs

router = APIRouter()


@router.get("/", response_model=List[Job])
def list_jobs() -> List[Job]:
    """Placeholder endpoint for listing jobs."""
    return []


@router.post("/ingest", response_model=List[Job])
def ingest_jobs(jobs: List[Job]) -> List[Job]:
    """Deduplicate incoming jobs before storing them."""
    return dedupe_jobs(jobs)
