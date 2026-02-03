import PageShell from "../components/PageShell";

const applications = [
  {
    company: "TechCorp Inc",
    role: "Senior Product Manager",
    status: "Interview",
    updated: "Today",
  },
  {
    company: "DataFlow Systems",
    role: "Product Manager - AI/ML",
    status: "Applied",
    updated: "Yesterday",
  },
];

export default function TrackerPage() {
  return (
    <PageShell
      title="Applications"
      subtitle="Monitor where each application stands."
    >
      <div className="space-y-3">
        {applications.map((application) => (
          <div
            key={application.company}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {application.role}
              </p>
              <p className="text-xs text-slate-500">{application.company}</p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {application.status}
              </span>
              <p className="mt-2">Updated {application.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
