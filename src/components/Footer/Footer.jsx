import Container from "../ui/Container";
import SocialLinks from "../ui/SocialLinks";
import HeaderLogo from "../Header/HeaderLogo"; 
import NewsletterForm from "./NewsletterForm";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import FooterCloud from "./FooterCloud";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FBFBFC] pt-12 pb-8 text-slate-700">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center pr-0 lg:pr-64">
          <HeaderLogo />
          <NewsletterForm className="w-full md:w-auto" />
        </div>

        <div className="pt-2 pr-0 lg:pr-64">
          <FooterNav />
        </div>

        <div className="h-px w-full bg-slate-200/80 pr-0 lg:pr-64" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row pr-0 lg:pr-64">
          <Copyright />
          <SocialLinks />
        </div>
      </Container>

      <FooterCloud className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center justify-end" />
    </footer>
  );
}