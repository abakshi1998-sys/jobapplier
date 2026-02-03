const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Saved Jobs", href: "/saved-jobs" },
  { label: "Tracker", href: "/tracker" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col gap-8 border-r border-slate-200 bg-white p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Jobapplier
        </p>
        <h1 className="mt-2 text-xl font-semibold text-slate-900">
          AI Job Search
        </h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-xl bg-slate-900 p-4 text-white">
        <p className="text-sm font-semibold">Resume Studio</p>
        <p className="mt-2 text-xs text-slate-200">
          Generate tailored resumes with one click.
        </p>
        <button className="mt-4 w-full rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-900">
          Launch
        </button>
      </div>
    </aside>
  );
}
