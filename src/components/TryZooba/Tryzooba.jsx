import Container from "../ui/Container";
import MoreWays from "./Moreways";
import TryZoobaArtwork from "./Tryzoobazrtwork";
import TryZoobaIntro from "./Tryzoobaintro";

export default function TryZooba() {
  return (
    <section aria-labelledby="try-zooba-title" className="md:bg-split-cta">
      <Container className="relative grid md:min-h-[clamp(26rem,36vw,32.5rem)] md:grid-cols-[minmax(0,74.4fr)_minmax(0,25.6fr)]">
        <TryZoobaIntro />
        <TryZoobaArtwork />
        <MoreWays />
      </Container>
    </section>
  );
}