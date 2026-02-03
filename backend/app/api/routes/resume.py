from fastapi import APIRouter

from app.services.ai_resume import ResumeRequest, ResumeResponse, generate_resume

router = APIRouter()


@router.post("/generate", response_model=ResumeResponse)
def generate_resume_endpoint(payload: ResumeRequest) -> ResumeResponse:
    return generate_resume(payload)
