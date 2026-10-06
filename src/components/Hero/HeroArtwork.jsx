import appleCloud from "../../assets/images/hero-apple-cloud.png";
import cloud from "../../assets/images/hero-cloud.png";
import fox from "../../assets/images/hero-fox.png";

export default function HeroArtwork() {
  return (
    <>
      <img
        src={cloud}
        alt=""
        aria-hidden="true"
        className=" absolute top-2 right-2 z-10 w-[28%] md:top-9 md:right-auto md:left-[31.5%] md:w-[20.5%]"
      />
      <img
        src={appleCloud}
        alt=""
        aria-hidden="true"
        className=" absolute bottom-0 left-[26%] z-10 hidden w-[21.3%] md:block"
      />
      <img
        src={fox}
        alt="Nix, the orange fox, holding a double-barreled shotgun"
        className=" ml-auto mt-6 w-[72%] md:absolute md:right-10 md:bottom-0 md:z-0 md:mt-0 md:w-[51%]"
      />
    </>
  );
}
