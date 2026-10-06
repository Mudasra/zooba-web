import { Menu, X } from "lucide-react";

export default function MenuToggle({ open, onToggle, className = "" }) {
  const Icon = open ? X : Menu;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className={`grid size-11 place-items-center rounded-full border-2 border-white text-white ${className}`}
    >
      <Icon className="size-5" />
    </button>
  );
}
