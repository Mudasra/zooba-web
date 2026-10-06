
import bg1 from "../../assets/images/BG1.png";
import bg2 from "../../assets/images/BG2.png";
import cartoon1 from "../../assets/images/cartoon1.png";
import cartoon2 from "../../assets/images/cartoon2.png";
import cartoon3 from "../../assets/images/cartoon3.png";
import cartoon4 from "../../assets/images/cartoon4.png";

const tvPromo = {
  title: ["The TV you love", "on your terms"],
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.",
  cta: { label: "Start Watching", href: "#watch" },
  backgrounds: { base: bg1, mist: bg2 },
  characters: [
    { id: "cartoon2", src: cartoon2, className: "left-[28.9%] bottom-[61.4%] w-[9.5%]" },
    { id: "cartoon3", src: cartoon3, className: "left-[24.1%] bottom-[29.8%] w-[9.8%]" },
    { id: "cartoon4", src: cartoon4, className: "left-[4.2%] bottom-[6.4%] w-[24.4%]" },
    { id: "cartoon1", src: cartoon1, className: "left-[36.1%] bottom-[5.8%] w-[48.2%]" },
  ],
};

export default tvPromo;