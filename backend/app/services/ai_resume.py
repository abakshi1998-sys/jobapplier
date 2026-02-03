from typing import List

from pydantic import BaseModel


class ResumeRequest(BaseModel):
    job_description: str
    base_resume: dict


class ResumeResponse(BaseModel):
    tailored_resume: str
    match_score: int
    matching_skills: List[str]
    missing_skills: List[str]


def generate_resume(payload: ResumeRequest) -> ResumeResponse:
    """Stubbed AI integration; wire OpenAI client here."""
    return ResumeResponse(
        tailored_resume="Generated resume content goes here.",
        match_score=78,
        matching_skills=["Product Strategy", "Roadmap Planning"],
        missing_skills=["Experimentation"],
    )
