import { GraduationCap } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import AppContainer from "../../app/AppContainer";
import { APP_ROUTES } from "../../lib/routes";
import Button from "../ui/Button";

const navItems = [
  { to: APP_ROUTES.landing, label: "Home" },
  { to: APP_ROUTES.dashboard, label: "Dashboard" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dbe5ff] bg-[#F7F9FC]/90 backdrop-blur-xl">
      <AppContainer className="flex items-center justify-between py-4">
        <Link to={APP_ROUTES.landing} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E293B]">
          <span className="rounded-lg border border-[#cdd9ff] bg-[#eef3ff] p-2 text-[#4F7CFF]">
            <GraduationCap size={16} />
          </span>
          Dao-Yu-101
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#64748B] md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-[#4F7CFF]" : "transition hover:text-[#1E293B]"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="px-4 py-2">
            Login
          </Button>
          <Button className="px-4 py-2">Get Started</Button>
        </div>
      </AppContainer>
    </header>
  );
}

export default Navbar;
