import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const item = ({ isActive }: { isActive: boolean }) =>
    isActive ? "rounded-full bg-mark px-3 py-1.5 font-semibold" : "px-3 py-1.5 text-muted hover:text-ink";

  return (
    <header className="sticky top-0 z-20 bg-page/90 backdrop-blur">
      <nav className="wrap flex min-h-16 items-center justify-between py-3 md:min-h-20">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-link text-sm text-white">MM</span>
          <span className="hidden lg:inline">Matsilele Mabaso</span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-medium md:flex lg:gap-3">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={item}>{label}</NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full bg-tint-blue md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="wrap flex flex-col gap-1 pb-4 text-base font-medium md:hidden">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} className={item}>{label}</NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
