from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, HttpUrl


class Job(BaseModel):
    id: Optional[int] = None
    title: str
    company: str
    description: str
    salary: Optional[str] = None
    location: str
    posted_date: Optional[date] = None
    source: str
    url: HttpUrl
    created_at: Optional[datetime] = None


class Application(BaseModel):
    id: Optional[int] = None
    job_id: int
    resume_version: str
    status: str = "Not Applied"
