import { tryZooba } from "./Tryzooba";

const itemStyles = {
  true: "gap-[0.62em] bg-[#2ca8f2] pr-[1.08em] pl-[0.5em] md:bg-transparent",
  false:
    "gap-[0.93em] bg-[#1f97ed] pr-[2.25em] pl-[0.8em] shadow-[inset_6px_0_10px_rgb(10_90_190/0.25)]",
};

function Badge({ ring, children }) {
  const core =
    "grid place-items-center rounded-full bg-linear-to-b from-[#f98a66] to-[#ea6247] text-white";
  const label = <span className="text-[0.74em] italic">{children}</span>;

  if (!ring) return <span className={`size-[1.73em] ${core}`}>{label}</span>;
  return (
    <span className="grid size-[2.31em] shrink-0 place-items-center rounded-full bg-[#fff0ea]">
      <span className={`size-[76%] ${core}`}>{label}</span>
    </span>
  );
}

export default function TryZoobaFeatures({ className = "" }) {
  return (
    <ul
      className={`flex flex-col items-start gap-3 text-cta-feature md:h-[3.18em] md:flex-row md:items-stretch md:gap-0 md:rounded-full md:bg-[#2ca8f2] md:shadow-[inset_0_2px_5px_rgb(10_100_200/0.35),inset_0_-2px_5px_rgb(10_100_200/0.25)] ${className}`}
    >
      {tryZooba.features.map(({ id, badge, ring, title, sub }) => (
        <li
          key={id}
          className={`flex h-[3.18em] items-center rounded-full md:h-auto ${itemStyles[ring]}`}
        >
          <Badge ring={ring}>{badge}</Badge>
          <span className="flex flex-col">
            <span className="uppercase italic text-white">{title}</span>
            <span className="mt-[0.2em] text-[0.478em] text-[#a8f3fc] uppercase text-cyan-soft">{sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}