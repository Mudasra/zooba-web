export default function Copyright({ className = "" }) {
  const year = new Date().getFullYear();

  return (
    <div
      className={`inline-flex h-13 items-center rounded-full bg-[#F1F3F6] px-8 font-display text-[13px] uppercase tracking-[0.15em] text-[#8FB8D0] ${className}`}
    >
      Copyright by Zooba {year}!
    </div>
  );
}