import { useState } from "react";
import EpisodeToggle from "./Episodetoggle";

export default function EpisodeRow({ number, tag, title, details }) {
  const [open, setOpen] = useState(false);
  const panelId = details ? `episode-${number}-details` : undefined;

  return (
    <li className="rounded-2xl bg-white shadow-[0_6px_18px_rgb(80_110_140/0.14)]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3 p-5 md:h-[clamp(5rem,10vw,9rem)] md:flex-nowrap md:justify-between md:px-[clamp(1.25rem,6.3vw,5.7rem)] md:py-0">
        <span className="text-episode-no text-brand-blue">{number}</span>
        <span className="inline-flex cursor-pointer h-[clamp(2rem,3.85vw,3.4rem)] items-center rounded-full border-2 border-[#f3f3f3] px-[clamp(1rem,2.15vw,2rem)] text-tag uppercase text-[#7791a2] text-slate">
        {tag}
        </span>
        <h3 className="order-last basis-full text-episode-title uppercase text-brand-blue md:order-0 md:basis-auto">
          {title}
        </h3>
        <EpisodeToggle
          open={open}
          onToggle={() => setOpen((value) => !value)}
          controls={panelId}
          label={title}
          className="ml-auto cursor-pointer md:ml-0"
        />
      </div>
      {open && details && (
        <div id={panelId} className="px-5 pb-6 text-copy uppercase text-slate md:px-[clamp(1.25rem,6.3vw,5.7rem)]">
          {details}
        </div>
      )}
    </li>
  );
}

