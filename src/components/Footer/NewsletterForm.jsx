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
      className={`relative flex w-full max-w-md items-center rounded-full border border-slate-200 bg-slate-100/70 p-1 shadow-inner ${className}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="SUBSCRIBE OUR NEWSLETTER"
        className="w-full bg-transparent px-5 py-2.5 font-display text-sm tracking-wider uppercase text-slate-500 outline-none placeholder:text-slate-400"
      />
      <button
        type="submit"
        className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F37053] px-6 py-2.5 font-display text-sm font-semibold uppercase text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-1.015 hover:brightness-110 hover:shadow-md active:translate-y-0 active:scale-95"
      >
        <span>Subscribe</span>
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}