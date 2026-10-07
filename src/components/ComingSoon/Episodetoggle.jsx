import { Triangle } from "lucide-react";

export default function EpisodeToggle({ open, onToggle, controls, label, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={`${open ? "Hide" : "Show"} details for ${label}`}
      className={`grid size-[clamp(3rem,5vw,4.6rem)] shrink-0 place-items-center rounded-full border-[1.5px] border-brand-blue bg-[#fbfcfe] text-brand-blue shadow-[0_6px_16px_rgb(56_174_248/0.45)] transition hover:shadow-[0_8px_20px_rgb(56_174_248/0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${className}`}
    >
      <Triangle
        aria-hidden="true"
        strokeLinejoin="round"
        className={`size-[36%] fill-current transition-transform ${open ? "" : "rotate-180"}`}
      />
    </button>
  );
}