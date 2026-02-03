interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  postedDate: string;
  description: string;
  source: string;
}

export default function JobCard({
  title,
  company,
  location,
  salary,
  postedDate,
  description,
  source,
}: JobCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
            🏢
          </span>
          {company}
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span>📍</span>
          {location}
          <span className="ml-2">💲</span>
          {salary}
        </div>
        <div className="flex items-center gap-2">
          <span>🗓️</span>
          {postedDate}
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">{description}</p>
      <span className="mt-4 inline-flex w-fit rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
        {source}
      </span>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
          View JD
        </button>
        <button className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
          ✨ AI Resume
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2">
          🔖 Save
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2">
          ↗ Apply
        </button>
      </div>
    </article>
  );
}
