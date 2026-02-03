interface JobCardProps {
  title: string;
  company: string;
  location: string;
  postedDate: string;
  matchScore: number;
  onView?: () => void;
  onApply?: () => void;
  onSave?: () => void;
}

export default function JobCard({
  title,
  company,
  location,
  postedDate,
  matchScore,
  onView,
  onApply,
  onSave,
}: JobCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{company}</p>
          <p className="text-xs text-slate-500">
            {location} · {postedDate}
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Match {matchScore}%
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white"
          onClick={onView}
        >
          View JD
        </button>
        <button
          className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
          onClick={onApply}
        >
          Apply with AI Resume
        </button>
        <button
          className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
          onClick={onSave}
        >
          Save Job
        </button>
      </div>
    </div>
  );
}
