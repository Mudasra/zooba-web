import { navLinks } from "../../data/navigation";

export default function FooterNav({ className = "" }) {
  return (
    <nav aria-label="Footer Navigation" className={className}>
      <ul className="flex flex-wrap items-center justify-center gap-x-24.5 gap-y-4 sm:justify-start">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="relative block font-display font-bold text-xl uppercase text-[#FF7A52] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#FF7A52] after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}