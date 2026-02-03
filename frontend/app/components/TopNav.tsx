const navItems = [
  { label: "Jobs", href: "/dashboard", active: true },
  { label: "Saved", href: "/saved-jobs" },
  { label: "Applications", href: "/tracker" },
  { label: "Settings", href: "/settings" },
];

export default function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            ✨
          </div>
          <span className="text-lg font-semibold text-slate-900">JobSearch AI</span>
        </div>
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                item.active
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
