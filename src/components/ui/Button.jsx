const variantStyles = {
  primary:
    "bg-cyan-400 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:ring-cyan-300",
  secondary:
    "border border-slate-600 bg-slate-900/50 text-slate-100 hover:-translate-y-0.5 hover:border-slate-400 focus-visible:ring-slate-400",
  ghost:
    "text-slate-200 hover:bg-slate-800/60 focus-visible:ring-slate-500",
};

function Button({ children, className = "", variant = "primary", type = "button", ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
