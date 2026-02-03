const filters = [
  "Remote",
  "United States",
  "Salary listed",
  "Last 7 days",
  "Product Manager",
];

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <span className="text-xs font-semibold text-slate-500">Filters</span>
      {filters.map((filter) => (
        <button
          key={filter}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
        >
          {filter}
        </button>
      ))}
      <button className="ml-auto text-xs font-semibold text-slate-500">
        Clear all
      </button>
    </div>
  );
}
