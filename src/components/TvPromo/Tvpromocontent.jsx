import PromoContent from "../BattleArena/Promocontent";
import tvPromo from "./Tvpromo";

export default function TvPromoContent() {
  const { title, copy, cta } = tvPromo;

  const heading = (
    <h2 id="tv-promo-title" className="text-title uppercase text-brand-blue">
      {title.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h2>
  );

  return (
    <PromoContent
      heading={heading}
      copy={copy}
      cta={cta}
      copyClassName="mt-4 text-[#95bbd0]"
      ctaClassName="mt-4"
    />
  );
}