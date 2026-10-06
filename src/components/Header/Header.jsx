import { useState } from "react";
import Container from "../ui/Container";
import SocialLinks from "../ui/SocialLinks";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import MenuToggle from "./MenuToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-brand-blue">
      <Container className="grid grid-cols-[auto_1fr] items-center py-5 lg:grid-cols-[1fr_auto_1fr] lg:py-8">
        <HeaderLogo />
        <HeaderNav className="hidden lg:block" />
        <SocialLinks className="hidden justify-self-end lg:flex" />
        <MenuToggle
          open={open}
          onToggle={() => setOpen((value) => !value)}
          className="justify-self-end lg:hidden"
        />
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full bg-brand-blue pb-6 shadow-card lg:hidden"
        >
          <Container className="flex flex-col gap-6 border-t border-white/20 pt-6">
            <HeaderNav onNavigate={() => setOpen(false)} />
            <SocialLinks />
          </Container>
        </div>
      )}
    </header>
  );
}
