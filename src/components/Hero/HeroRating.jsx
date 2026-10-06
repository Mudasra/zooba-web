import starIcon from "../../assets/images/hero-star.png";
import { hero } from "../../data/hero";

export default function HeroRating() {
  return (
    <p className="flex items-center gap-[0.5em] text-meta uppercase text-white">
      <img src={starIcon} alt="" aria-hidden="true" className="w-[1.45em]" />
      <span>
        <span className="sr-only">Rating </span>
        {hero.rating}
      </span>
      <span aria-hidden="true" className="h-[0.55em] w-0.5 bg-white/30" />
      <span className="text-cream">{hero.badge}</span>
    </p>
  );
}
