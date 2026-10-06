import Container from "../ui/Container";
import HeroArtwork from "./HeroArtwork";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-brand-blue">
      <Container className="relative flex flex-col pt-6 md:block md:pt-10 md:pb-20">
        <HeroContent />
        <HeroArtwork />
      </Container>
    </section>
  );
}
