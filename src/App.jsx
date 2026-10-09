import BattleArena from "./components/BattleArena/Battlearena.jsx";
import ComingSoon from "./components/ComingSoon/Comingsoon.jsx";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TryZooba from "./components/TryZooba/Tryzooba.jsx";
import TvPromo from "./components/TvPromo/Tvpromo.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TvPromo />
        <ComingSoon />
        <BattleArena />
        <TryZooba />
      </main>
    </>
  );
}

export default App;
