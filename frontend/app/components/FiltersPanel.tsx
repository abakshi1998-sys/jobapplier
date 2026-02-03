export default function FiltersPanel() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
          ▽
        </span>
        Filters
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className="space-y-2 text-xs font-semibold text-slate-500">
          Keyword Search
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <span>🔎</span>
            <input
              className="w-full bg-transparent text-sm text-slate-700 outline-none"
              placeholder="Search jobs..."
              type="text"
            />
          </div>
        </label>
        <label className="space-y-2 text-xs font-semibold text-slate-500">
          Location
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-500">
            <span>📍</span>
            <input
              className="w-full bg-transparent text-sm text-slate-700 outline-none"
              placeholder="e.g., Remote, NYC"
              type="text"
            />
          </div>
        </label>
        <label className="space-y-2 text-xs font-semibold text-slate-500">
          Source
          <select className="w-full rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 outline-none">
            <option>All</option>
            <option>Remotive</option>
            <option>Wellfound</option>
            <option>SimplyHired</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-semibold text-slate-500">
          Posted Date
          <select className="w-full rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 outline-none">
            <option>All Time</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </label>
      </div>
    </section>
  );
}
