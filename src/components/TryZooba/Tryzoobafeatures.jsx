import { tryZooba } from "./Tryzooba";

const tones = {
  light: "gap-[0.6em] bg-[#3ab0fa] pr-[1.08em] pl-[0.45em] md:bg-transparent",
  dark: "gap-[0.57em] bg-[#1f97ed] pr-[2.06em] pl-[0.48em] shadow-[inset_6px_0_10px_rgb(10_90_190/0.25)]",
};

function Badge({ children }) {
  return (
    <span className="grid size-[2.27em] shrink-0 place-items-center rounded-full bg-[#fef2f0]">
      <span className="grid size-[76%] place-items-center rounded-full bg-linear-to-b from-[#f58a63] to-[#e8664b] text-white">
        <span className="text-[0.74em] italic">{children}</span>
      </span>
    </span>
  );
}

export default function TryZoobaFeatures({ className = "" }) {
  return (
    <ul
      className={`flex w-fit flex-col items-start gap-3 text-cta-feature md:h-[3.18em] md:flex-row md:items-stretch md:gap-0 md:rounded-full md:bg-[#2ca8f2] md:shadow-[inset_0_2px_5px_rgb(10_100_200/0.35),inset_0_-2px_5px_rgb(10_100_200/0.25)] ${className}`}
    >
      {tryZooba.features.map(({ id, badge, tone, title, sub }) => (
        <li
          key={id}
          className={`flex h-[3.18em] items-center rounded-full md:h-auto ${tones[tone]}`}
        >
          <Badge>{badge}</Badge>
          <span className="flex flex-col">
            <span className="uppercase italic text-white">{title}</span>
            <span className="mt-[0.2em] text-[0.478em] text-[#a8f3fc] uppercase text-cyan-soft">{sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}