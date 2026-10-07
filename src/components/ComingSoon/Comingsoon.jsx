import Container from "../ui/Container";
import { comingSoon } from "./Comingsoon";
import ComingSoonHeader from "./ComingSoonHeader";
import EpisodeRow from "./EpisodeRow";

export default function ComingSoon() {
  return (
    <section
      aria-labelledby="coming-soon-title"
      className="pt-14 pb-14 md:pt-24 md:pb-27"
    >
      <Container>
        <ComingSoonHeader />
        <ul className="mt-10 flex flex-col gap-6 md:mt-25">
          {comingSoon.episodes.map((episode) => (
            <EpisodeRow key={episode.number} {...episode} />
          ))}
        </ul>
      </Container>
    </section>
  );
}