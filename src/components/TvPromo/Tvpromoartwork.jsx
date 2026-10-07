import tvPromo from "./Tvpromo";

export default function TvPromoArtwork() {
  const { backgrounds, characters } = tvPromo;

  return (
    <div aria-hidden="true" className="relative aspect-332/233 md:aspect-auto">
      <img
        src={backgrounds.base}
        alt=""
        className="absolute inset-0 size-full object-cover object-bottom-left"
      />
      <img src={backgrounds.mist} alt="" className="absolute -inset-x-2.5 -bottom-5 w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,rgb(255_255_255/0.9)_12%,rgb(255_255_255/0.5)_30%,rgb(255_255_255/0)_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_left,#fff_0%,rgb(255_255_255/0.95)_8%,rgb(255_255_255/0.6)_22%,rgb(255_255_255/0)_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#fff_0%,rgb(255_255_255/0)_30%)] md:hidden" />
      {characters.map(({ id, src, className }) => (
        <img key={id} src={src} alt="" className={`absolute h-auto ${className}`} />
      ))}
    </div>
  );
}