import { SquarePlay, Timer } from "lucide-react";
import { hero } from "../../data/hero";
import FaceSquareIcon from "./FaceSquareIcon";

const icons = { timer: Timer, face: FaceSquareIcon, play: SquarePlay };

const pillStyle = [
  "inline-flex cursor-pointer h-[clamp(2.5rem,3.75vw,3.4rem)] items-center gap-[0.4em]",
  "rounded-full border-[0.2em] border-[#3cbbfd] bg-brand-blue",
  "px-[clamp(0.8rem,2.2vw,2rem)]",
  "text-pill uppercase text-white [-webkit-text-stroke:0.025em_white]",
  "shadow-[inset_0_0_0.45em_rgb(0_90_200/0.22)]",
  "transition duration-200 hover:-translate-y-0.5 hover:border-[#5ccaff]",
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
].join(" ");

export default function HeroPills() {
  return (
    <ul className="mt-1 flex flex-wrap gap-3">
      {hero.pills.map(({ label, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label} className={pillStyle}>
            {label}
            <Icon className="size-[1.05em] shrink-0 text-cream" strokeWidth={2.25} />
          </li>
        );
      })}
    </ul>
  );
}