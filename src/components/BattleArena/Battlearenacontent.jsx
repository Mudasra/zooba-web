import { battleArenaData } from "./Battlearena";
import PromoContent from "./Promocontent";

export default function BattleArenaContent() {
  const { title, copy, cta } = battleArenaData;

  const heading = (
    <h2 id="battle-arena-title" className="uppercase text-brand-blue">
      <span className="block text-4xl md:text-5xl lg:text-6xl text-title-xl">{title.lead}</span>
      <span className="mt-1 block text-title leading-none">{title.sub}</span>
    </h2>
  );

  return (
    <PromoContent
      heading={heading}
      copy={copy}
      cta={cta}
      copyClassName="mt-2 text-[#95bbd0] text-justify leading-[2.55]"
      ctaClassName="mt-7"
      insetClassName="md:pl-[clamp(1.25rem,2.8vw,2.5rem)]"
    />
  );
}