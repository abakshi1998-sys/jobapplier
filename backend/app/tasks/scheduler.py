from datetime import datetime

from app.services.alerts import format_alert
from scrapers.runner import run_all_scrapers


def run_daily_scrape() -> None:
    jobs = run_all_scrapers()
    if not jobs:
        return

    alert_body = format_alert(jobs)
    print(f"[{datetime.utcnow()}] Alert payload:\n{alert_body}")
