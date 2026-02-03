const applications = [
  {
    company: "Acme Corp",
    role: "Product Manager",
    status: "Applied",
  },
];

export default function TrackerPage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold text-slate-900">Application Tracker</h1>
      <div className="space-y-3">
        {applications.map((application) => (
          <div
            key={application.company}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {application.role}
              </p>
              <p className="text-xs text-slate-500">{application.company}</p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {application.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
