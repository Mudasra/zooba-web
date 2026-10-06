import { navLinks } from "../../data/navigation";

export default function HeaderNav({ className = "", onNavigate }) {
  return (
    <nav aria-label="Primary" className={className}>
      <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              onClick={onNavigate}
              className="font-display text-xl uppercase text-white transition hover:text-cream lg:text-base"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
