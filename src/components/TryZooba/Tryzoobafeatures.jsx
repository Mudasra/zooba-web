import { tryZooba } from "./Tryzooba";

const tones = {
  light:
    "gap-[0.6em] bg-[#2ca8f2] pr-[1.08em] pl-[0.45em] shadow-[0_8px_16px_-6px_#48bdfb] md:bg-transparent md:pr-[1.9em] md:shadow-none",
  dark:
    "relative z-10 gap-[0.57em] bg-[#1f97ed] pr-[2.06em] pl-[0.48em] md:-ml-[1.2em] shadow-[inset_7px_0_10px_#42bff5,inset_2px_0_0_#42bff5,-3px_0_6px_-1px_#42bff5,0_8px_16px_-6px_#48bdfb] md:shadow-[inset_7px_0_10px_#42bff5,inset_2px_0_0_#42bff5,-3px_0_6px_-1px_#42bff5]",
};

function Badge({ children }) {
  return (
    <span className="grid size-[2.27em] shrink-0 place-items-center rounded-full bg-[#fef2f0] shadow-[0_1px_3px_rgb(10_80_160/0.35)]">
      <span className="grid size-[76%] place-items-center rounded-full bg-linear-to-b from-[#f58a63] to-[#e8664b] text-white shadow-[inset_0_1px_1px_rgb(255_255_255/0.35)]">
        <span className="text-[0.74em] font-extrabold italic leading-none">
          {children}
        </span>
      </span>
    </span>
  );
}

export default function TryZoobaFeatures({ className = "" }) {
  return (
    <ul
      className={`relative z-0 flex w-fit flex-col items-start gap-3 text-cta-feature md:h-[3.18em] md:flex-row md:items-stretch md:gap-0 md:overflow-hidden md:rounded-full md:bg-[#2ca8f2] md:shadow-[0_12px_24px_-8px_#48bdfb] md:after:pointer-events-none md:after:absolute md:after:inset-0 md:after:z-20 md:after:rounded-full md:after:shadow-[inset_0_2px_5px_rgb(10_100_200/0.35),inset_0_-2px_5px_rgb(10_100_200/0.25)] ${className}`}
    >
      {tryZooba.features.map(({ id, badge, tone, title, sub }) => (
        <li
          key={id}
          className={`flex h-[3.18em] items-center rounded-full md:h-auto ${tones[tone]}`}
        >
          <Badge>{badge}</Badge>
          <span className="flex flex-col">
            <span className="font-extrabold uppercase italic leading-none text-white">
              {title}
            </span>
            <span className="mt-[0.2em] text-[0.478em] font-semibold uppercase leading-none tracking-wide text-[#a8f3fc]">
              {sub}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}