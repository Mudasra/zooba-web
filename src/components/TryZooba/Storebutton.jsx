export default function StoreButton({ label, href, icon }) {
  return (
    <a
      href={href}
      className="inline-flex h-[clamp(2.5rem,4.4vw,3.95rem)] items-center gap-[1.45em] rounded-full bg-[#fef9f6] pr-[1.45em] pl-[0.34em] font-display text-tag uppercase text-brand-coral shadow-[0_6px_14px_rgb(160_60_30/0.25)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span className="grid aspect-square h-[81%] shrink-0 place-items-center rounded-full bg-linear-to-b from-[#eb5140] to-[#f99065]">
        <img src={icon} alt="" aria-hidden="true" className="w-[45%] brightness-0 invert" />
      </span>
      {label}
    </a>
  );
}