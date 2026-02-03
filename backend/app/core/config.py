from pydantic import BaseSettings


class Settings(BaseSettings):
    app_name: str = "JobApplier API"
    database_url: str = "postgresql+psycopg2://user:password@localhost:5432/jobapplier"
    openai_api_key: str = ""
    alert_email_from: str = ""
    alert_email_to: str = ""

    class Config:
        env_file = ".env"


settings = Settings()
