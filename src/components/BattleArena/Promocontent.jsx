import PlayButton from "../TvPromo/Playbutton";

export default function PromoContent({
  heading,
  copy,
  cta,
  copyClassName = "",
  ctaClassName = "",
  insetClassName = "md:pl-0",
}) {
  return (
    <div
      className={`flex flex-col items-start justify-center px-6 py-8 md:py-0 md:pr-[clamp(1.5rem,3.5vw,3.2rem)] ${insetClassName}`}
    >
      {heading}
      <p className={`text-copy uppercase text-muted ${copyClassName}`}>{copy}</p>
      <PlayButton href={cta.href} className={ctaClassName}>
        {cta.label}
      </PlayButton>
    </div>
  );
}