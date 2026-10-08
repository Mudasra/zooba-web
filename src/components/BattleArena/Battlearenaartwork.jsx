import { battleArenaData } from "./Battlearena";

export default function BattleArenaArtwork() {
  const { src, alt } = battleArenaData.image;

  return (
    <div className="relative aspect-444/424 md:aspect-auto">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}