import { tryZooba } from "./Tryzooba";

export default function TryZoobaArtwork() {
  return (
    <img
      src={tryZooba.penguin}
      alt=""
      aria-hidden="true"
      className="pointer-events-none relative z-10 -mt-8 -mb-12 ml-auto w-[46%] md:absolute md:bottom-0 md:left-[41.4%] md:m-0 md:w-[34.2%]"
    />
  );
}