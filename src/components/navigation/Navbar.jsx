import { GraduationCap } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
          <span className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-200">
            <GraduationCap size={16} />
          </span>
          Dao-Yu-101
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-cyan-300" : "transition hover:text-slate-100"
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
      </div>
    </header>
  );
}

export default Navbar;
