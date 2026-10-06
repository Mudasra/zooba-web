import { Play } from "lucide-react";

export default function PlayButton({ href, className = "", children }) {
  return (
    <a
      href={href}
      className={`inline-flex h-[clamp(2.75rem,4.5vw,4.05rem)] items-center gap-[0.85em] rounded-full bg-linear-to-b from-[#fb9068] to-[#ea644c] pr-[0.85em] pl-[0.8em] font-display text-btn uppercase text-white shadow-[0_8px_16px_rgb(249_119_85/0.4)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral ${className}`}
    >
      <span className="grid aspect-square h-[70%] shrink-0 place-items-center rounded-full border-[3px] border-[#e76949] bg-[#fff3ee] text-brand-coral">
        <Play className="size-[42%] fill-current" aria-hidden="true" />
      </span>
      {children}
    </a>
  );
}