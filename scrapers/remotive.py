import requests

from scrapers.base import BaseScraper, ScrapedJob


class RemotiveScraper(BaseScraper):
    source = "Remotive"
    endpoint = "https://remotive.com/api/remote-jobs"

    def run(self) -> list[ScrapedJob]:
        response = requests.get(self.endpoint, timeout=30)
        response.raise_for_status()
        payload = response.json()

        jobs: list[ScrapedJob] = []
        for item in payload.get("jobs", []):
            jobs.append(
                ScrapedJob(
                    title=item.get("title", ""),
                    company=item.get("company_name", ""),
                    description=item.get("description", ""),
                    salary=item.get("salary"),
                    location=item.get("candidate_required_location", "Remote"),
                    posted_date=item.get("publication_date"),
                    source=self.source,
                    url=item.get("url", ""),
                )
            )
        return jobs
