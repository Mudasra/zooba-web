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
              className="font-display relative uppercase text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cream after:transition-all after:duration-300 hover:text-cream hover:after:w-full " >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
