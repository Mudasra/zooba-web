import { socialLinks } from "../../data/social";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./BrandIcons";

const icons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
};

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {socialLinks.map(({ id, label, href, bg }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              className={`grid size-10.5 place-items-center rounded-full border-2 border-white text-white transition hover:scale-105 ${bg}`}
            >
              <Icon className="size-[48%]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
