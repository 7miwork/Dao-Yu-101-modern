const variantStyles = {
  primary:
    "bg-[#4F7CFF] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#426be6] focus-visible:ring-[#4F7CFF]",
  secondary:
    "border border-[#cdd9ff] bg-white text-[#1E293B] shadow-sm hover:-translate-y-0.5 hover:border-[#4F7CFF] hover:text-[#4F7CFF] focus-visible:ring-[#4F7CFF]",
  ghost:
    "text-[#1E293B] hover:bg-[#eef3ff] focus-visible:ring-[#6C63FF]",
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
