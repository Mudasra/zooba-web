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
      <img src={backgrounds.mist} alt="" className="absolute inset-x-0 top-0 w-full" />
      <div className="absolute inset-0 bg-linear-to-t from-white to-white/0 to-35% md:bg-linear-to-l md:to-45%" />
      {characters.map(({ id, src, className }) => (
        <img key={id} src={src} alt="" className={`absolute h-auto ${className}`} />
      ))}
    </div>
  );
}