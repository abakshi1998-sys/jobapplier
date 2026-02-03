from typing import List

from app.db.models import Job


def format_alert(jobs: List[Job]) -> str:
    lines = [f"New jobs found: {len(jobs)}", ""]
    for job in jobs[:5]:
        lines.append(f"- {job.title} at {job.company} ({job.location})")
    return "\n".join(lines)
