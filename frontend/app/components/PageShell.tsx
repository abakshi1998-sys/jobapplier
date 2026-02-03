import TopNav from "./TopNav";

interface PageShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </header>
        {children}
      </main>
    </div>
  );
}
