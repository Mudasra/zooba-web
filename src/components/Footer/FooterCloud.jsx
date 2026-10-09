import footerCloudImg from "../../assets/images/footer-cloud.png";

export default function FooterCloud({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <img
        src={footerCloudImg}
        alt="Decorative Cloud with Heart"
        className="w-56 object-contain drop-shadow-md sm:w-72 md:w-80 lg:w-96"
      />
    </div>
  );
}