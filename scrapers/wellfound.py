from playwright.sync_api import sync_playwright

from scrapers.base import BaseScraper, ScrapedJob


class WellfoundScraper(BaseScraper):
    source = "Wellfound"

    def run(self) -> list[ScrapedJob]:
        jobs: list[ScrapedJob] = []
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto("https://wellfound.com/jobs", timeout=60000)
            # TODO: implement scraping logic for job cards.
            browser.close()
        return jobs
