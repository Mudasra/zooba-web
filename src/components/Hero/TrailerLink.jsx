import { Play } from "lucide-react";
import { hero } from "../../data/hero";

export default function TrailerLink() {
  const { label, duration, href } = hero.trailer;

  return (
    <a href={href} className="mt-8 flex items-center gap-[0.65em] text-pill text-white">
      <span className="relative grid size-[clamp(4.5rem,7.5vw,6.75rem)] shrink-0 place-items-center rounded-full bg-disc shadow-[0_12px_28px_rgb(10_90_200/0.4)]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r="43.25"
            fill="none"
            stroke="var(--color-arc)"
            strokeWidth="13.5"
            strokeLinecap="round"
            strokeDasharray="122 150"
            transform="rotate(-113 50 50)"
          />
        </svg>
        <span className="relative grid size-[72%] place-items-center rounded-full bg-linear-to-b from-[#f2694c] to-[#fdb78a]">
          <span className="grid size-[62%] place-items-center rounded-full bg-black/5">
            <Play className="size-[45%] fill-white text-white" />
          </span>
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="uppercase">{label}</span>
        <span className="text-cream">{duration}</span>
      </span>
    </a>
  );
}
