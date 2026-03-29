import { Outlet } from "react-router-dom";
import AppContainer from "../app/AppContainer";
import Navbar from "../components/navigation/Navbar";

function AppLayout() {
  return (
    <div className="relative min-h-screen text-[#1E293B]">
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
