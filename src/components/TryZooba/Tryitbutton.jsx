import { tryZooba } from "./Tryzooba";

export default function TryItButton({ className = "" }) {
  const { label, href, icon } = tryZooba.cta;
 
  return (
    <a
      href={href}
      className={`inline-flex rounded-full bg-[#47d3fc] p-1.25 shadow-[0_10px_18px_rgb(20_110_200/0.35)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      <span className="flex h-[clamp(2.6rem,4.1vw,3.7rem)] rounded-full bg-linear-to-b from-[#fa9266] to-[#ee6850] px-[0.42em] pt-[0.5em] pb-[0.34em] font-display text-[clamp(0.85rem,1.24vw,1.1rem)] uppercase tracking-[0.12em] text-cream">
        <span className="flex flex-1 items-center gap-[1.65em] rounded-full bg-linear-to-b from-[#ee674f] to-[#f99165] pr-[1.65em] pl-[0.6em] shadow-[inset_0_-3px_0_#e74b38,inset_0_2px_0_rgb(251_160_116/0.7)]">
          <span className="grid size-[1.62em] shrink-0 place-items-center rounded-full bg-[#fff3ee]">
            <img src={icon} alt="" aria-hidden="true" className="w-[70%]" />
          </span>
          {label}
        </span>
      </span>
    </a>
  );
}