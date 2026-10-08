export default function PromoCard({ className = "", children }) {
  return (
    <article className={`grid rounded-2xl overflow-hidden bg-white ${className}`}>
      {children}
    </article>
  );
}