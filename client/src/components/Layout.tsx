/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Shared Layout Component
   Design: Kinetic Authority × Vietnam
   Vietnam red #DA251D accent on flag stripe and CTAs
   ============================================================= */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, ChevronDown, BookOpen, DollarSign, Globe } from "lucide-react";
import ChatWidget from "./ChatWidget";

/* ── Nav link types ── */
type NavLink =
  | { label: string; href: string; dropdown?: undefined }
  | {
      label: string;
      href?: undefined;
      dropdown: { label: string; href: string; icon: React.ReactNode; desc: string }[];
    };

const navLinks: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pods", href: "/transformation-pods" },
  { label: "Industries", href: "/industries" },
  { label: "Why Fetch", href: "/why-fetch" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Articles & Tools",
        href: "/resources",
        icon: <BookOpen className="w-4 h-4" />,
        desc: "Guides, checklists, and frameworks for AI adoption",
      },
      {
        label: "Vietnam AI Grants",
        href: "/grants",
        icon: <DollarSign className="w-4 h-4" />,
        desc: "Government funds up to 70% of your AI transformation costs",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

/* ── Dropdown component ── */
function NavDropdown({
  label,
  items,
  isActive,
}: {
  label: string;
  items: { label: string; href: string; icon: React.ReactNode; desc: string }[];
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1 px-2.5 py-2 text-xs font-medium transition-colors rounded-sm font-body"
        style={{ color: isActive ? "#FFBE16" : "rgba(255,255,255,0.7)" }}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
      >
        {label}
        <ChevronDown
          className="w-3.5 h-3.5 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-1 w-72 rounded-xl overflow-hidden z-50"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 16px 48px rgba(9,23,56,0.18)",
            border: "1px solid rgba(23,38,78,0.1)",
          }}
          onMouseLeave={() => setOpen(false)}
        >
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className="flex items-start gap-3 px-4 py-3.5 cursor-pointer transition-colors hover:bg-gray-50 block"
                onClick={() => setOpen(false)}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#DA251D12", color: "#DA251D" }}
                >
                  {item.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#17264E] font-body">{item.label}</span>
                  <span className="block text-xs text-gray-500 font-body leading-relaxed mt-0.5">{item.desc}</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileResourcesOpen(false);
  }, [location]);

  const isResourcesActive = location === "/resources" || location === "/grants";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(9,23,56,0.97)" : "rgba(9,23,56,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
      }}
    >
      {/* Vietnam flag stripe — thin red line at very top */}
      <div style={{ height: "3px", backgroundColor: "#DA251D", width: "100%" }} />

      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="flex items-center gap-2 cursor-pointer">
              <img
                src="/images/fetch-logo.svg"
                alt="Fetch Technology"
                className="h-8 w-auto"
              />
              {/* Vietnam badge */}
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded font-body"
                style={{ backgroundColor: "#DA251D", color: "white", fontSize: "0.6rem", letterSpacing: "0.05em" }}
              >
                VIETNAM
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <NavDropdown
                    key={link.label}
                    label={link.label}
                    items={link.dropdown}
                    isActive={isResourcesActive}
                  />
                );
              }
              return (
                <Link key={link.href} href={link.href!}>
                  <span
                    className="px-2.5 py-2 text-xs font-medium transition-colors rounded-sm font-body cursor-pointer"
                    style={{ color: location === link.href ? "#FFBE16" : "rgba(255,255,255,0.7)" }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {/* Fetch Group hub link — icon only to save space */}
            <a
              href="https://fetch.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-sm transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.12)" }}
              title="Fetch Singapore — Group HQ"
            >
              <Globe className="w-4 h-4" />
            </a>
            <Link href="/contact">
              <span className="btn-amber text-sm px-5 py-2.5">
                Book a Call
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "#091738" }}>
          <div className="container py-4">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-sm font-body"
                        style={{ color: isResourcesActive ? "#FFBE16" : "rgba(255,255,255,0.8)" }}
                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className="w-4 h-4 transition-transform"
                          style={{ transform: mobileResourcesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>
                      {mobileResourcesOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link key={item.href} href={item.href}>
                              <span
                                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-sm font-body cursor-pointer"
                                style={{ color: location === item.href ? "#FFBE16" : "rgba(255,255,255,0.65)" }}
                              >
                                <span style={{ color: location === item.href ? "#DA251D" : "rgba(218,37,29,0.5)" }}>
                                  {item.icon}
                                </span>
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link key={link.href} href={link.href!}>
                    <span
                      className="block px-3 py-3 text-sm font-medium rounded-sm font-body cursor-pointer"
                      style={{ color: location === link.href ? "#FFBE16" : "rgba(255,255,255,0.8)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
            <Link href="/grants">
              <span className="block w-full text-center text-sm font-medium font-body px-5 py-3 rounded-sm mb-2" style={{ color: "#DA251D", border: "1px solid rgba(218,37,29,0.4)" }}>
                Vietnam AI Grants →
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-amber w-full justify-center">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#091738" }}>
      {/* Vietnam flag stripe at top of footer */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #DA251D 0%, #FFBE16 50%, #DA251D 100%)" }} />
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <img
                src="/images/fetch-logo.svg"
                alt="Fetch Technology"
                className="h-8 w-auto"
              />
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded font-body"
                style={{ backgroundColor: "#DA251D", color: "white", fontSize: "0.6rem" }}
              >
                VIETNAM
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-body mb-4">
              AI transformation execution partner for Vietnamese enterprises. We embed, deploy, and stay until it works.
            </p>
            <div className="text-white/30 text-xs font-body">Ho Chi Minh City · Hà Nội</div>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4 font-body">Solutions</div>
            <ul className="space-y-2.5">
              {[
                { label: "AI Adoption Sprint", href: "/ai-adoption-sprint" },
                { label: "Workflow Redesign", href: "/solutions" },
                { label: "AI Implementation", href: "/solutions" },
                { label: "Team Upskilling", href: "/solutions" },
                { label: "Managed Transformation", href: "/solutions" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>
                    <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4 font-body">Company</div>
            <ul className="space-y-2.5">
              {[
                { label: "Transformation Pods", href: "/transformation-pods" },
                { label: "Industries", href: "/industries" },
                { label: "Why Fetch", href: "/why-fetch" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "About", href: "/about" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>
                    <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4 font-body">Resources</div>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link href="/resources">
                  <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">Articles & Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/grants">
                  <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">Vietnam AI Grants</span>
                </Link>
              </li>
              <li><a href="mailto:vietnam@fetch.tech" className="text-white/60 text-sm hover:text-white transition-colors font-body">vietnam@fetch.tech</a></li>
            </ul>
            <Link href="/contact">
              <span className="btn-amber text-sm px-5 py-2.5">
                Book a Strategy Call
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Part of Fetch Group callout */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2 font-body">Part of the Fetch Group</div>
              <a
                href="https://fetch.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
              >
                <span className="text-white/60 text-sm font-semibold font-body group-hover:text-white transition-colors">Fetch Singapore</span>
                <span className="text-white/30 text-xs font-body">Group Headquarters</span>
                <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors">fetch.tech ↗</span>
              </a>
            </div>
            <div className="text-white/25 text-xs font-body text-right">
              <div>Fetch Technology Vietnam</div>
              <div>Ho Chi Minh City · Hà Nội</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Fetch Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/grants"><span className="text-white/30 text-xs hover:text-white/60 transition-colors font-body cursor-pointer">AI Grants</span></Link>
            <Link href="/privacy-policy"><span className="text-white/30 text-xs hover:text-white/60 transition-colors font-body cursor-pointer">Privacy Policy</span></Link>
            <Link href="/terms"><span className="text-white/30 text-xs hover:text-white/60 transition-colors font-body cursor-pointer">Terms</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
