import Container from "../ui/Container";
import SocialLinks from "../ui/SocialLinks";
import HeaderLogo from "../Header/HeaderLogo";
import NewsletterForm from "./NewsletterForm";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import FooterCloud from "./FooterCloud";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FAFAFA] pt-12 pb-7 text-slate-700">
      <Container className="relative z-10">
        <div className="flex w-full flex-col lg:max-w-193.75">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-30.5">
            <HeaderLogo />
            <NewsletterForm />
          </div>

          <div className="mt-12.5 mb-12.5">
            <FooterNav />
          </div>

          <div className="h-px w-full bg-slate-200" />

          <div className="flex flex-col items-center justify-between gap-4 pt-7.5 sm:flex-row">
            <Copyright />
            <SocialLinks />
          </div>
        </div>
      </Container>

      <FooterCloud className="hidden lg:block" />
    </footer>
  );
}