import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const explore = [
  { label: "About", to: "/about" },
  { label: "Stories", to: "/stories" },
  { label: "Impact", to: "/impact" },
  { label: "Gallery", to: "/gallery" },
  { label: "Events", to: "/events" },
  { label: "Team", to: "/team" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary-foreground/10 grid place-items-center font-display font-semibold">
              360
            </div>
            <div className="font-display text-lg">DWAIF Foundation</div>
          </div>
          <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
            360 Degrees What Am I Foundation — a Nigerian non-profit committed to
            education, livelihood, and dignity for underserved communities since 2013.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent grid place-items-center transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {explore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-4">Trust</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/impact" className="hover:text-accent transition-colors">Annual report</Link></li>
            <li><Link to="/impact" className="hover:text-accent transition-colors">Financials</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">Governance</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-4">Reach us</div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            12 Awolowo Road<br />
            Ikoyi, Lagos, Nigeria<br />
            hello@360dwaif.org
          </p>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
        <div>© {new Date().getFullYear()} 360 DWAIF Foundation. Registered in Nigeria since 2013.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
