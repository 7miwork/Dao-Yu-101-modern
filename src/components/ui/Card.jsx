function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_10px_30px_rgba(30,41,59,0.06)] ${className}`}>
      {children}
    </div>
  );
}

export default Card;
