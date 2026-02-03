from dataclasses import dataclass
from typing import List


@dataclass
class ScrapedJob:
    title: str
    company: str
    description: str
    salary: str | None
    location: str
    posted_date: str | None
    source: str
    url: str


class BaseScraper:
    source: str = ""

    def run(self) -> List[ScrapedJob]:
        raise NotImplementedError
