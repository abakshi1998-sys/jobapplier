import JobCard from "../components/JobCard";
import PageShell from "../components/PageShell";

const savedJobs = [
  {
    title: "Product Manager - Growth",
    company: "Brightside",
    location: "Remote",
    salary: "$130k - $155k",
    postedDate: "4 days ago",
    description:
      "Help scale a fintech product with rapid experimentation and user research to improve conversion rates...",
    source: "Remotive",
  },
];

export default function SavedJobsPage() {
  return (
    <PageShell title="Saved Jobs" subtitle="Jobs you've bookmarked for deeper review.">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {savedJobs.map((job) => (
          <JobCard key={job.title} {...job} />
        ))}
      </section>
    </PageShell>
  );
}
