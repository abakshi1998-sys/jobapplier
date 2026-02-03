from fastapi import FastAPI

from app.api.routes import jobs, resume
from app.core.config import settings


def create_app() -> FastAPI:
    app = FastAPI(title=settings.app_name)

    app.include_router(jobs.router, prefix="/api/jobs", tags=["jobs"])
    app.include_router(resume.router, prefix="/api/resume", tags=["resume"])

    return app


app = create_app()
