import { navLinks } from "../../data/navigation";

export default function FooterNav({ className = "" }) {
  return (
    <nav aria-label="Footer Navigation" className={className}>
      <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="font-display relative uppercase text-[#F37053] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F37053] after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}