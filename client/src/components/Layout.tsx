/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Shared Layout Component
   Design: Kinetic Authority × Vietnam
   Vietnam red #DA251D accent on flag stripe and CTAs
   i18n: Vietnamese default, English toggle
   ============================================================= */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, ChevronDown, BookOpen, DollarSign, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import ChatWidget from "./ChatWidget";

/* ── Language selector ── */
function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = i18n.language?.startsWith("vi") ? "VI" : "EN";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchTo = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm text-xs font-medium font-body transition-colors hover:bg-white/10"
        style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        <Globe className="w-3.5 h-3.5" />
        {current}
        <ChevronDown className="w-3 h-3" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 mt-1 w-28 rounded-lg overflow-hidden z-50"
          style={{ backgroundColor: "#fff", boxShadow: "0 8px 24px rgba(9,23,56,0.18)", border: "1px solid rgba(23,38,78,0.1)" }}
        >
          {[
            { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
            { code: "en", label: "English", flag: "🇬🇧" },
          ].map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => switchTo(code)}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-body transition-colors hover:bg-gray-50 text-left"
              style={{
                color: current === code.toUpperCase() ? "#17264E" : "#6b7280",
                fontWeight: current === code.toUpperCase() ? 600 : 400,
              }}
            >
              <span>{flag}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
  const { t } = useTranslation();
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

  const navLinks = [
    { label: t("nav.solutions"), href: "/solutions" },
    { label: t("nav.pods"), href: "/transformation-pods" },
    { label: t("nav.industries"), href: "/industries" },
    { label: t("nav.whyFetch"), href: "/why-fetch" },
    { label: t("nav.caseStudies"), href: "/case-studies" },
    {
      label: t("nav.resources"),
      dropdown: [
        {
          label: t("resources.articles"),
          href: "/resources",
          icon: <BookOpen className="w-4 h-4" />,
          desc: t("resources.heroDesc"),
        },
        {
          label: t("nav.grants"),
          href: "/grants",
          icon: <DollarSign className="w-4 h-4" />,
          desc: t("grants.heroDesc"),
        },
      ],
    },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.careers"), href: "/careers" },
  ] as const;

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
              if ("dropdown" in link && link.dropdown) {
                return (
                  <NavDropdown
                    key={link.label}
                    label={link.label}
                    items={link.dropdown as unknown as { label: string; href: string; icon: React.ReactNode; desc: string }[]}
                    isActive={isResourcesActive}
                  />
                );
              }
              const l = link as { label: string; href: string };
              return (
                <Link key={l.href} href={l.href}>
                  <span
                    className="px-2.5 py-2 text-xs font-medium transition-colors rounded-sm font-body cursor-pointer"
                    style={{ color: location === l.href ? "#FFBE16" : "rgba(255,255,255,0.7)" }}
                  >
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {/* Language selector */}
            <LanguageSelector />
            {/* Fetch Group hub link — icon only */}
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
                {t("nav.bookCall")}
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
                if ("dropdown" in link && link.dropdown) {
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
                          {(link.dropdown as unknown as { label: string; href: string; icon: React.ReactNode; desc: string }[]).map((item) => (
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
                const l = link as { label: string; href: string };
                return (
                  <Link key={l.href} href={l.href}>
                    <span
                      className="block px-3 py-3 text-sm font-medium rounded-sm font-body cursor-pointer"
                      style={{ color: location === l.href ? "#FFBE16" : "rgba(255,255,255,0.8)" }}
                    >
                      {l.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 px-3 py-2 mb-2">
              <span className="text-white/40 text-xs font-body">{t("nav.language")}:</span>
              <LanguageSelector />
            </div>
            <Link href="/grants">
              <span className="block w-full text-center text-sm font-medium font-body px-5 py-3 rounded-sm mb-2" style={{ color: "#DA251D", border: "1px solid rgba(218,37,29,0.4)" }}>
                {t("nav.grants")} →
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-amber w-full justify-center text-sm px-5 py-3">
                {t("nav.bookCall")}
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
  const { t } = useTranslation();
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
              {t("footer.tagline")}
            </p>
            <div className="text-white/30 text-xs font-body">{t("footer.officeHCM")} · {t("footer.officeHN")}</div>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4 font-body">{t("footer.solutions")}</div>
            <ul className="space-y-2.5">
              {[
                { labelKey: "footer.aiAdoptionSprint", href: "/ai-adoption-sprint" },
                { labelKey: "footer.workflowRedesign", href: "/solutions" },
                { labelKey: "footer.aiImplementation", href: "/solutions" },
                { labelKey: "footer.teamUpskilling", href: "/solutions" },
                { labelKey: "footer.managedTransformation", href: "/solutions" },
              ].map(({ labelKey, href }) => (
                <li key={labelKey}>
                  <Link href={href}>
                    <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">{t(labelKey)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4 font-body">{t("footer.company")}</div>
            <ul className="space-y-2.5">
              {[
                { labelKey: "nav.pods", href: "/transformation-pods" },
                { labelKey: "nav.industries", href: "/industries" },
                { labelKey: "nav.whyFetch", href: "/why-fetch" },
                { labelKey: "nav.caseStudies", href: "/case-studies" },
                { labelKey: "nav.about", href: "/about" },
              ].map(({ labelKey, href }) => (
                <li key={labelKey}>
                  <Link href={href}>
                    <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">{t(labelKey)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4 font-body">{t("resources.allResources")}</div>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link href="/resources">
                  <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">{t("resources.articles")} & {t("resources.tools")}</span>
                </Link>
              </li>
              <li>
                <Link href="/grants">
                  <span className="text-white/60 text-sm hover:text-white transition-colors font-body cursor-pointer">{t("nav.grants")}</span>
                </Link>
              </li>
              <li><a href="mailto:vietnam@fetch.tech" className="text-white/60 text-sm hover:text-white transition-colors font-body">vietnam@fetch.tech</a></li>
            </ul>
            <Link href="/contact">
              <span className="btn-amber text-sm px-5 py-2.5">
                {t("nav.bookCall")}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Part of Fetch Group callout */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2 font-body">{t("footer.fetchGroup")}</div>
              <a
                href="https://fetch.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
              >
                <span className="text-white/60 text-sm font-semibold font-body group-hover:text-white transition-colors">{t("footer.fetchSingapore")}</span>
                <span className="text-white/30 text-xs font-body">{t("footer.sgHQ")}</span>
                <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors">{t("footer.visitSG")}</span>
              </a>
            </div>
            <div className="text-white/25 text-xs font-body text-right">
              <div>Fetch Technology Vietnam</div>
              <div>{t("footer.officeHCM")} · {t("footer.officeHN")}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/grants"><span className="text-white/30 text-xs hover:text-white/60 transition-colors font-body cursor-pointer">{t("nav.grants")}</span></Link>
            <Link href="/privacy-policy"><span className="text-white/30 text-xs hover:text-white/60 transition-colors font-body cursor-pointer">{t("footer.privacyPolicy")}</span></Link>
            <Link href="/terms"><span className="text-white/30 text-xs hover:text-white/60 transition-colors font-body cursor-pointer">{t("footer.terms")}</span></Link>
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
