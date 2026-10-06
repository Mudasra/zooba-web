import { hero } from "../../data/hero";
import HeroPills from "./HeroPills";
import HeroRating from "./HeroRating";
import TrailerLink from "./TrailerLink";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-start">
      <HeroRating />
      <h1
        id="hero-title"
        className="mt-4 text-display uppercase text-white md:mt-10"
      >
        {hero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <HeroPills />
      <TrailerLink />
    </div>
  );
}
