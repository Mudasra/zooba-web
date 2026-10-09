export default function Copyright({ className = "" }) {
  const year = new Date().getFullYear();

  return (
    <div
      className={`inline-flex items-center rounded-full bg-slate-100/80 px-6 py-2 font-display text-xs tracking-widest uppercase text-slate-400 shadow-inner ${className}`}
    >
      Copyright by Zooba {year}!
    </div>
  );
}