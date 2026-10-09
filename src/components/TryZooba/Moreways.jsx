import { tryZooba } from "./Tryzooba";
import StoreButton from "./StoreButton";

export default function MoreWays() {
  const { icon, title, stores } = tryZooba.more;

  return (
    <div className="-mx-5 bg-brand-coral px-5 pt-16 pb-10 sm:-mx-8 sm:px-8 md:mx-0 md:bg-transparent md:px-0 md:pt-[min(2.1vw,1.9rem)] md:pb-10">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="w-[clamp(4rem,8.1vw,7.3rem)]"
      />
      <h2 className="mt-8 text-cta-sub uppercase text-white md:mt-12">
        {title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      <ul className="mt-9 flex flex-col items-start gap-6">
        {stores.map((store) => (
          <li key={store.id}>
            <StoreButton {...store} />
          </li>
        ))}
      </ul>
    </div>
  );
}