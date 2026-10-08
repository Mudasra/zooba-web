
import Container from "../ui/Container";
import BattleArenaArtwork from "./Battlearenaartwork"
import BattleArenaContent from "./Battlearenacontent";
import PromoCard from "./Promocard";

export default function BattleArena() {
  return (
    <section aria-labelledby="battle-arena-title" className="pb-20 md:pb-36">
      <Container>
        <PromoCard className="rounded-card-sm md:aspect-874/424 md:grid-cols-[minmax(0,51fr)_minmax(0,49fr)]">
          <BattleArenaArtwork />
          <BattleArenaContent />
        </PromoCard>
      </Container>
    </section>
  );
}