import JobCard from "../components/JobCard";

const jobs = [
  {
    title: "Product Manager",
    company: "Acme Corp",
    location: "Remote",
    postedDate: "2 days ago",
    matchScore: 82,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">Job Dashboard</h1>
        <p className="text-sm text-slate-600">
          Filter and prioritize Product Manager roles with AI insights.
        </p>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.title} {...job} />
        ))}
      </section>
    </div>
  );
}
