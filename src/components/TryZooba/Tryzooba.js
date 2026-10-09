import androidLogo from "../../assets/images/android-logo.png";
import appleLogo from "../../assets/images/apple-black-logo.png";
import cartoon5 from "../../assets/images/cartoon5.png";
import creditCards from "../../assets/images/credit-cards.png";
import puma from "../../assets/images/puma.png";

export const tryZooba = {
  title: "Try Zooba",
  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  features: [
    { id: "hd", badge: "HD", ring: true, title: "Full HD", sub: "Full HD Resolution" },
    { id: "trial", badge: "07", ring: false, title: "Free", sub: "7 Days Trial" },
  ],
  cta: { label: "Try It Now", href: "#try", icon: puma },
  penguin: cartoon5,
  more: {
    icon: creditCards,
    title: ["More way to", "play us"],
    stores: [
      { id: "play", label: "Play Store", href: "#play-store", icon: androidLogo },
      { id: "app", label: "App Store", href: "#app-store", icon: appleLogo },
    ],
  },
};