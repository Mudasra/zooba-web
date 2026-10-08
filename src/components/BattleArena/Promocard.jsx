export default function PromoCard({ className = "", children }) {
  return (
    <article className={`grid overflow-hidden bg-white ${className}`}>
      {children}
    </article>
  );
}