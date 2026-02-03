export default function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Good morning, Arjun</h2>
        <p className="text-sm text-slate-500">
          Here are the newest Product Manager roles matched to your profile.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
          Import Resume
        </button>
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
          New Job Alert
        </button>
      </div>
    </header>
  );
}
