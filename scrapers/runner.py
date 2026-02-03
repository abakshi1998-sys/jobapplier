from typing import List

from scrapers.base import ScrapedJob
from scrapers.remotive import RemotiveScraper
from scrapers.wellfound import WellfoundScraper


def run_all_scrapers() -> List[ScrapedJob]:
    scrapers = [RemotiveScraper(), WellfoundScraper()]
    jobs: List[ScrapedJob] = []
    for scraper in scrapers:
        try:
            jobs.extend(scraper.run())
        except Exception as exc:  # noqa: BLE001
            print(f"Scraper failed: {scraper.source}: {exc}")
    return jobs
