import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

function AppLayout() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] opacity-25" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-400/20 blur-[120px]" />

      <div className="relative z-10">
        <Navbar />
        <Outlet />
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-400">
          Dao-Yu-101 - AI Education Operating System
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;
