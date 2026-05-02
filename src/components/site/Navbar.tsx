import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/#programs" },
  { label: "Stories", to: "/stories" },
  { label: "Impact", to: "/impact" },
  { label: "Gallery", to: "/gallery" },
  { label: "Events", to: "/events" },
  { label: "Team", to: "/team" },
  { label: "Get Involved", to: "/get-involved" },
];

export const Navbar = ({ onDonate }: { onDonate: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Force solid bg on inner pages for legibility
  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-0 group shrink-0" aria-label="360 DWAIF — home">
          <img
            src={logo}
            alt="360 DWAIF logo"
            width={512}
            height={512}
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-base font-semibold">DWAIF</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Foundation</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              {l.to.startsWith("/#") ? (
                <Link
                  to={l.to}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "text-sm transition-colors",
                      isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="donate" size="default" onClick={onDonate}>
            <Heart className="fill-current" />
            Donate
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden container mt-4 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-1 bg-card rounded-xl p-3 shadow-soft border border-border">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-secondary text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="donate" className="w-full" onClick={() => { setOpen(false); onDonate(); }}>
                <Heart className="fill-current" /> Donate
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
