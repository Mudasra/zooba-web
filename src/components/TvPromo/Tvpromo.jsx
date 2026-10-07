import Container from "../ui/Container";
import TvPromoArtwork from "./Tvpromoartwork";
import TvPromoContent from "./Tvpromocontent";


const splitBackground =
  "bg-[linear-gradient(to_bottom,var(--color-brand-blue)_4.2rem,var(--color-brand-coral)_4.2rem)]";

export default function TvPromo() {
  return (
    <section
      aria-labelledby="tv-promo-title"
      className={`relative -top-6 z-10 pb-20 md:pb-16 ${splitBackground}`}
    >
      <Container>
        <article className="grid overflow-hidden rounded-card bg-white shadow-[0_10px_24px_rgb(150_40_10/0.28)] md:aspect-615/233 md:grid-cols-[minmax(0,54fr)_minmax(0,46fr)]">
          <TvPromoArtwork />
          <TvPromoContent />
        </article>
      </Container>
    </section>
  );
}
