import { SquarePlay, Timer } from "lucide-react";
import { hero } from "../../data/hero";
import FaceSquareIcon from "./FaceSquareIcon";

const icons = { timer: Timer, face: FaceSquareIcon, play: SquarePlay };

export default function HeroPills() {
  return (
    <ul className="mt-1 flex flex-wrap gap-3">
      {hero.pills.map(({ label, icon }) => {
        const Icon = icons[icon];
        return (
          <li
            key={label}
            className="inline-flex h-[clamp(2.5rem,3.75vw,3.4rem)] items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-[clamp(1rem,2.5vw,2.25rem)] text-pill uppercase text-white shadow-[0_4px_10px_rgb(0_80_190/0.18)]"
          >
            {label}
            <Icon className="size-[0.85em] text-cream" strokeWidth={2} />
          </li>
        );
      })}
    </ul>
  );
}
