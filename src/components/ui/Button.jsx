const variants = {
  coral: "bg-brand-coral text-white",
  blue: "bg-brand-blue text-white",
  white: "bg-white text-brand-blue",
};

const sizes = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export default function Button({
  href,
  variant = "coral",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-wide transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
