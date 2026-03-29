function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

export default Card;
