from typing import List

from app.db.models import Job


def dedupe_jobs(jobs: List[Job]) -> List[Job]:
    """Deduplicate jobs by (title, company, location)."""
    seen = set()
    unique_jobs: List[Job] = []

    for job in jobs:
        key = (job.title.lower(), job.company.lower(), job.location.lower())
        if key in seen:
            continue
        seen.add(key)
        unique_jobs.append(job)

    return unique_jobs
