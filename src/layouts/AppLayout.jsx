import { Outlet } from "react-router-dom";
import AppContainer from "../app/AppContainer";
import Navbar from "../components/navigation/Navbar";

function AppLayout() {
  return (
    <div className="relative min-h-screen text-[#1E293B]">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] opacity-[0.08]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#4F7CFF]/8 blur-[80px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#5B6CFF]/8 blur-[80px]" />

      <div className="relative z-10">
        <Navbar />
        <Outlet />
        <footer className="border-t border-[#dbe5ff] bg-white/70 py-8 text-center text-xs text-[#64748B]">
          <AppContainer>Dao-Yu-101 - AI Education Operating System</AppContainer>
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;
