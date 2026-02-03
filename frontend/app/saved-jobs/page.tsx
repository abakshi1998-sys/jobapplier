export default function SavedJobsPage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold text-slate-900">Saved Jobs</h1>
      <p className="text-sm text-slate-600">
        Review and manage jobs you want to revisit.
      </p>
      <div className="rounded-lg border border-dashed border-slate-300 p-6 text-sm text-slate-500">
        No saved jobs yet.
      </div>
    </div>
  );
}
