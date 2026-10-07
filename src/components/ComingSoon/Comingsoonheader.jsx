import { comingSoon } from "./Comingsoon";

export default function ComingSoonHeader() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] md:gap-0">
      <h2
        id="coming-soon-title"
        className="text-section uppercase text-coral-text md:pl-[min(8vw,7.2rem)]"
      >
        {comingSoon.title}
      </h2>
      <p className="max-w-[32em] text-copy uppercase text-slate">{comingSoon.copy}</p>
    </div>
  );
}