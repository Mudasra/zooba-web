import footerCloudImg from "../../assets/images/footer-cloud.png";

export default function FooterCloud({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 z-0 flex items-center justify-end overflow-hidden ${className}`}
    >
      <img
        src={footerCloudImg}
        alt="Decorative Cloud with Heart"
        className="h-full w-auto max-w-none object-cover object-right"
      />
    </div>
  );
}