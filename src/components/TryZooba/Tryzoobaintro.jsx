import TryItButton from "./TryItButton";
import { tryZooba } from "./Tryzooba";
import TryZoobaFeatures from "./TryZoobaFeatures";

export default function TryZoobaIntro() {
  return (
    <div className="-mx-5 bg-brand-blue px-5 pt-10 pb-12 sm:-mx-8 sm:px-8 md:mx-0 md:bg-transparent md:px-0 md:pt-[min(3.5vw,3.1rem)] md:pb-10">
      <h2 id="try-zooba-title" className="text-cta-title uppercase text-white">
        {tryZooba.title}
      </h2>
      <p className="max-w-[28em] text-[#a8f3fc] text-lead uppercase text-cyan-soft">{tryZooba.copy}</p>
      <TryZoobaFeatures className="mt-8" />
      <TryItButton className="mt-10" />
    </div>
  );
}