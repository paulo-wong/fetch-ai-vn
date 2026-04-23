/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Home Page (i18n)
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Zap, Workflow, Brain, Users, BarChart3, Shield, TrendingUp, ChevronRight, DollarSign } from "lucide-react";

/* ── Scroll reveal ── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const { t } = useTranslation();
  useScrollReveal();

  const solutions = [
    { icon: Zap, title: t("home.sol1Title"), desc: t("home.sol1Desc"), href: "/ai-adoption-sprint", tag: t("home.solTag") },
    { icon: Workflow, title: t("home.sol2Title"), desc: t("home.sol2Desc"), href: "/solutions", tag: null },
    { icon: Brain, title: t("home.sol3Title"), desc: t("home.sol3Desc"), href: "/solutions", tag: null },
    { icon: Users, title: t("home.sol4Title"), desc: t("home.sol4Desc"), href: "/solutions", tag: null },
    { icon: BarChart3, title: t("home.sol5Title"), desc: t("home.sol5Desc"), href: "/solutions", tag: null },
    { icon: Shield, title: t("home.sol6Title"), desc: t("home.sol6Desc"), href: "/solutions", tag: null },
  ];

  const steps = [
    { num: "01", title: t("home.step1Title"), desc: t("home.step1Desc") },
    { num: "02", title: t("home.step2Title"), desc: t("home.step2Desc") },
    { num: "03", title: t("home.step3Title"), desc: t("home.step3Desc") },
    { num: "04", title: t("home.step4Title"), desc: t("home.step4Desc") },
  ];

  const industries = [
    { name: t("home.ind1Name"), desc: t("home.ind1Desc") },
    { name: t("home.ind2Name"), desc: t("home.ind2Desc") },
    { name: t("home.ind3Name"), desc: t("home.ind3Desc") },
    { name: t("home.ind4Name"), desc: t("home.ind4Desc") },
    { name: t("home.ind5Name"), desc: t("home.ind5Desc") },
    { name: t("home.ind6Name"), desc: t("home.ind6Desc") },
  ];

  const testimonials = [
    { quote: t("home.test1Quote"), name: "Nguyễn Minh Tuấn", title: "COO", company: t("home.test1Company") },
    { quote: t("home.test2Quote"), name: "Trần Thị Lan", title: "Managing Director", company: t("home.test2Company") },
    { quote: t("home.test3Quote"), name: "Phạm Văn Đức", title: "Head of Operations", company: t("home.test3Company") },
  ];

  const grants = [
    { name: t("home.grant1Name"), amount: t("home.grant1Amount"), total: t("home.grant1Total"), body: t("home.grant1Body"), desc: t("home.grant1Desc") },
    { name: t("home.grant2Name"), amount: t("home.grant2Amount"), total: t("home.grant2Total"), body: t("home.grant2Body"), desc: t("home.grant2Desc") },
    { name: t("home.grant3Name"), amount: t("home.grant3Amount"), total: t("home.grant3Total"), body: t("home.grant3Body"), desc: t("home.grant3Desc") },
  ];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#091738" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/fetch-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(9,23,56,0.97) 0%, rgba(9,23,56,0.75) 55%, rgba(9,23,56,0.4) 100%)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none hidden xl:block" style={{ fontSize: "30rem", lineHeight: 1, color: "rgba(218,37,29,0.04)" }}>AI</div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Vietnam grant banner */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold font-body"
              style={{ backgroundColor: "rgba(218,37,29,0.15)", border: "1px solid rgba(218,37,29,0.35)", color: "#ff6b6b" }}
            >
              <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} />
              {t("home.grantBadge")}
            </div>

            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("home.badge")}</span>
            </div>

            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.02em" }}
            >
              {t("home.headline")}
            </h1>

            <p className="text-white/65 text-xl leading-relaxed font-body mb-10 max-w-2xl">
              {t("home.subheadline")}
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4 text-base">
                  {t("home.cta1")}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/grants">
                <span className="btn-red px-8 py-4 text-base">
                  {t("home.cta2")}
                  <DollarSign className="w-5 h-5" />
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {[t("home.trust1"), t("home.trust2"), t("home.trust3")].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#FFBE16" }} />
                  <span className="text-white/55 text-sm font-body">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, #091738)" }} />
      </section>

      {/* ── GRANTS BANNER ── */}
      <section style={{ backgroundColor: "#DA251D" }}>
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-white flex-shrink-0" />
              <p className="text-white font-semibold font-body text-sm md:text-base">
                <strong>{t("home.grantsBannerStrong")}</strong> {t("home.grantsBannerText")}
              </p>
            </div>
            <Link href="/grants">
              <span
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded font-bold text-sm font-body transition-all cursor-pointer"
                style={{ backgroundColor: "white", color: "#DA251D" }}
              >
                {t("home.grantsBannerCTA")}
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-14 section-navy">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 30, suffix: t("home.stat1Suffix"), label: t("home.stat1Label") },
              { value: 70, suffix: t("home.stat2Suffix"), label: t("home.stat2Label") },
              { value: 82, suffix: t("home.stat3Suffix"), label: t("home.stat3Label") },
              { value: 94, suffix: t("home.stat4Suffix"), label: t("home.stat4Label") },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="animate-on-scroll">
                <div className="font-display font-bold text-white mb-1" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="text-white/45 text-sm font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 animate-on-scroll">{t("home.problemLabel")}</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
                {t("home.problemTitle")}
              </h2>
              <div className="space-y-5 animate-on-scroll">
                <p className="text-gray-600 text-lg leading-relaxed font-body">{t("home.problemP1")}</p>
                <p className="text-gray-600 text-lg leading-relaxed font-body">{t("home.problemP2")}</p>
                <p className="text-gray-600 text-lg leading-relaxed font-body font-semibold" style={{ color: "#17264E" }}>{t("home.problemP3")}</p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{ border: "3px solid #FFBE16", padding: "6px", boxShadow: "0 24px 64px rgba(9,23,56,0.12)", backgroundColor: "#FFBE16" }}
              >
                <img
                  src="/images/fetch-team-beach.jpg"
                  alt="The Fetch team"
                  className="w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVERNMENT GRANTS SECTION ── */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll" style={{ color: "#DA251D" }}>{t("home.grantsLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("home.grantsTitle")}
            </h2>
            <p className="text-gray-500 text-lg font-body animate-on-scroll">{t("home.grantsDesc")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {grants.map((g) => (
              <div key={g.name} className="fetch-card animate-on-scroll">
                <div className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 font-body" style={{ backgroundColor: "#DA251D12", color: "#DA251D" }}>
                  {g.body}
                </div>
                <h3 className="font-display text-[#17264E] font-bold text-lg mb-2">{g.name}</h3>
                <div className="text-2xl font-bold font-display mb-1" style={{ color: "#DA251D" }}>{g.amount}</div>
                <div className="text-xs text-gray-400 font-body mb-3">{g.total}</div>
                <p className="text-gray-600 text-sm leading-relaxed font-body">{g.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/grants">
              <span className="btn-red px-8 py-4 text-base">
                {t("home.grantsCTA")}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll">{t("home.whatWeDoLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("home.whatWeDoTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link href={s.href} key={s.title}>
                <div className="fetch-card group cursor-pointer relative">
                  {s.tag && (
                    <div className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full font-body" style={{ backgroundColor: "#FFBE16", color: "#091738" }}>
                      {s.tag}
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#17264E0D" }}>
                    <s.icon className="w-5 h-5" style={{ color: "#17264E" }} />
                  </div>
                  <h3 className="font-display text-[#17264E] font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold font-body" style={{ color: "#17264E" }}>
                    {t("home.learnMore")} <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 section-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll" style={{ color: "#FFBE16" }}>{t("home.howLabel")}</div>
            <h2 className="font-display text-white mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("home.howTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="animate-on-scroll">
                <div className="font-display font-bold mb-3" style={{ fontSize: "3rem", color: "rgba(255,190,22,0.2)", lineHeight: 1 }}>{step.num}</div>
                <h3 className="font-display text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-4 animate-on-scroll">{t("home.industriesLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
              {t("home.industriesTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="fetch-card animate-on-scroll">
                <div className="vn-red-border-left">
                  <h3 className="font-display text-[#17264E] font-bold mb-1">{ind.name}</h3>
                  <p className="text-gray-500 text-sm font-body">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll">{t("home.clientResultsLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("home.clientResultsTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div key={test.name} className="fetch-card animate-on-scroll flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#FFBE16" }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-body mb-6 flex-1 italic">"{test.quote}"</p>
                <div>
                  <div className="font-semibold text-[#17264E] font-body text-sm">{test.name}</div>
                  <div className="text-gray-400 text-xs font-body">{test.title}, {test.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: "#091738" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold font-body" style={{ backgroundColor: "rgba(218,37,29,0.15)", border: "1px solid rgba(218,37,29,0.35)", color: "#ff6b6b" }}>
              <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} />
              {t("home.ctaBadge")}
            </div>
            <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
              {t("home.ctaTitle")}
            </h2>
            <p className="text-white/60 text-lg font-body mb-10 leading-relaxed">
              {t("home.ctaDesc")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4 text-base">
                  {t("home.ctaBtn")}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/grants">
                <span className="btn-red px-8 py-4 text-base">
                  {t("home.cta2")}
                  <TrendingUp className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
