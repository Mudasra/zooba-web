import ComingSoon from "./components/ComingSoon/Comingsoon.jsx";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TvPromo from "./components/TvPromo/Tvpromo.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TvPromo />
        <ComingSoon />
      </main>
    </>
  );
}

export default App;
