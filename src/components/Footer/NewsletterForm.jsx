import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm({ className = "" }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex h-16 w-full max-w-96.25 items-center overflow-hidden rounded-full border border-slate-200 bg-transparent ${className}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="SUBSCRIBE OUR NEWSLETTER"
        className="h-full min-w-0 flex-1 bg-transparent pl-6 pr-2 font-display text-[13px] uppercase tracking-normal text-slate-500 outline-none placeholder:text-[#8FB3C9]"
      />
      <button
        type="submit"
        className="flex h-full shrink-0 items-center justify-center gap-2 rounded-full bg-linear-to-br from-[#F4674A] to-[#FF8F5C] px-6 font-display text-sm uppercase text-white transition-all duration-300 ease-out hover:brightness-110 active:scale-95"
      >
        <span>Subscribe</span>
        <ArrowRight className="size-7" strokeWidth={3} />
      </button>
    </form>
  );
}