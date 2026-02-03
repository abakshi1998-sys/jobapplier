import FiltersPanel from "../components/FiltersPanel";
import JobCard from "../components/JobCard";
import TopNav from "../components/TopNav";

const jobs = [
  {
    title: "Product Manager - AI/ML",
    company: "DataFlow Systems",
    location: "Remote",
    salary: "$140k - $180k",
    postedDate: "1 day ago",
    description:
      "Join our innovative AI team as a Product Manager focused on machine learning products. You'll define the product vision...",
    source: "Remotive",
  },
  {
    title: "Senior Product Manager",
    company: "TechCorp Inc",
    location: "San Francisco, CA (Hybrid)",
    salary: "$120k - $160k",
    postedDate: "2 days ago",
    description:
      "We are seeking an experienced Senior Product Manager to lead our B2B SaaS product line. You will work closely with...",
    source: "Wellfound",
  },
  {
    title: "Associate Product Manager",
    company: "StartupHub",
    location: "Austin, TX",
    salary: "$90k - $110k",
    postedDate: "3 days ago",
    description:
      "Looking for an APM to join our fast-growing startup. You'll work on consumer-facing mobile apps and help...",
    source: "SimplyHired",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Product Manager Jobs
            </h1>
            <p className="text-sm text-slate-500">5 jobs found</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            🔄 Refresh
          </button>
        </div>
        <FiltersPanel />
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </section>
      </main>
    </div>
  );
}
