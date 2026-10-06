
import PlayButton from "./Playbutton";
import tvPromo from "./Tvpromo";

export default function TvPromoContent() {
  const { title, copy, cta } = tvPromo;

  return (
    <div className="flex flex-col items-start justify-center px-6 py-8 md:py-0 md:pr-[clamp(1.5rem,3.5vw,3.2rem)] md:pl-0">
      <h2 id="tv-promo-title" className="text-title uppercase text-brand-blue">
        {title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      <p className="mt-4 text-copy uppercase text-muted">{copy}</p>
      <PlayButton href={cta.href} className="mt-4">
        {cta.label}
      </PlayButton>
    </div>
  );
}