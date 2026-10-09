import { socialLinks } from "../../data/social";
import fbLogo from "../../assets/images/fb-logo.png";
import xLogo from "../../assets/images/x-logo.png";
import ytLogo from "../../assets/images/yt-logo.png";

const images = {
  facebook: fbLogo,
  twitter: xLogo,
  youtube: ytLogo,
};

export default function FooterSocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ id, label, href }) => (
        <li key={id}>
          <a
            href={href}
            aria-label={label}
            className="block transition hover:scale-105"
          >
            <img
              src={images[id]}
              alt=""
              className="size-12 object-contain"
              draggable={false}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}