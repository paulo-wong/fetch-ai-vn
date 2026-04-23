/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Government Grants Page
   Vietnam-specific grants — not on Singapore site
   ============================================================= */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, DollarSign, FileText, Clock, Users, ChevronRight, AlertCircle } from "lucide-react";

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

type Grant = {
  id: string;
  name: string;
  nameVi: string;
  badge: string;
  badgeColor: string;
  badgeTextColor?: string;
  amount: string;
  totalFund: string;
  authority: string;
  decree: string;
  timeline: string;
  eligibility: string[];
  covered: string[];
  process: string[];
  note: string;
};

type FAQ = {
  q: string;
  a: string;
};

export default function Grants() {
  const { t } = useTranslation();
  useScrollReveal();

  const grants = t("grants.grants", { returnObjects: true }) as Grant[];
  const faqs = t("grants.faqs", { returnObjects: true }) as FAQ[];
  const summaryCards = t("grants.summaryCards", { returnObjects: true }) as Array<{ label: string; value: string; sub: string }>;

  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#091738" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(218,37,29,0.08) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold font-body"
              style={{ backgroundColor: "rgba(218,37,29,0.15)", border: "1px solid rgba(218,37,29,0.35)", color: "#ff6b6b" }}
            >
              <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} />
              {t("grants.heroPill")}
            </div>
            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.02em" }}
            >
              {t("grants.heroTitle")}
            </h1>
            <p className="text-white/65 text-xl leading-relaxed font-body mb-10 max-w-2xl">
              {t("grants.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold font-body text-base cursor-pointer transition-all"
                  style={{ backgroundColor: "#DA251D", color: "white" }}
                >
                  {t("grants.heroCtaBtn")}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <a href="#grants">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold font-body text-base cursor-pointer transition-all"
                  style={{ border: "2px solid rgba(255,255,255,0.3)", color: "white" }}
                >
                  {t("grants.heroSecondaryBtn")}
                  <ChevronRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="py-16 bg-white" id="grants">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[DollarSign, Users, Clock].map((Icon, i) => {
              const card = summaryCards[i];
              if (!card) return null;
              return (
                <div key={card.label} className="fetch-card text-center animate-on-scroll">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#DA251D12" }}>
                    <Icon className="w-6 h-6" style={{ color: "#DA251D" }} />
                  </div>
                  <div className="text-3xl font-bold font-display mb-1" style={{ color: "#17264E" }}>{card.value}</div>
                  <div className="text-xs text-gray-400 font-body mb-1">{card.sub}</div>
                  <div className="text-sm font-semibold text-gray-600 font-body">{card.label}</div>
                </div>
              );
            })}
          </div>

          {/* GRANT DETAIL CARDS */}
          <div className="space-y-12">
            {grants.map((g) => (
              <div key={g.id} id={g.id} className="fetch-card animate-on-scroll" style={{ borderTop: `4px solid ${g.badgeColor}` }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 font-body"
                      style={{ backgroundColor: g.badgeColor, color: g.badgeTextColor ?? "white" }}
                    >
                      {g.badge}
                    </div>
                    <h2 className="font-display text-[#17264E] font-bold text-2xl mb-1">{g.name}</h2>
                    <p className="text-gray-400 text-sm font-body italic">{g.nameVi}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-display" style={{ color: g.badgeColor === "#FFBE16" ? "#17264E" : g.badgeColor }}>{g.amount}</div>
                    <div className="text-xs text-gray-400 font-body">{g.totalFund}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 font-body">{t("grants.authority")}</div>
                    <div className="text-[#17264E] font-semibold font-body">{g.authority}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 font-body">{t("grants.legalBasis")}</div>
                    <div className="text-[#17264E] font-semibold font-body">{g.decree}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 font-body">{t("grants.timeline")}</div>
                    <div className="text-[#17264E] font-semibold font-body">{g.timeline}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold text-[#17264E] text-sm mb-3 font-body flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: "#DA251D" }} /> {t("grants.eligibility")}
                    </h4>
                    <ul className="space-y-2">
                      {g.eligibility.map((item) => (
                        <li key={item} className="text-gray-600 text-xs font-body flex items-start gap-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17264E] text-sm mb-3 font-body flex items-center gap-2">
                      <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} /> {t("grants.covered")}
                    </h4>
                    <ul className="space-y-2">
                      {g.covered.map((item) => (
                        <li key={item} className="text-gray-600 text-xs font-body flex items-start gap-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17264E] text-sm mb-3 font-body flex items-center gap-2">
                      <FileText className="w-4 h-4" style={{ color: "#DA251D" }} /> {t("grants.process")}
                    </h4>
                    <ol className="space-y-2">
                      {g.process.map((item, i) => (
                        <li key={item} className="text-gray-600 text-xs font-body flex items-start gap-2">
                          <span
                            className="flex-shrink-0 w-4 h-4 rounded-full text-white flex items-center justify-center font-bold mt-0.5"
                            style={{ backgroundColor: "#DA251D", fontSize: "9px" }}
                          >
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 p-4 rounded-lg text-sm font-body"
                  style={{ backgroundColor: "#FFBE1610", border: "1px solid #FFBE1640" }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#FFBE16" }} />
                  <p className="text-gray-700">{g.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-label mb-4 animate-on-scroll">{t("grants.faqLabel")}</div>
              <h2
                className="font-display text-[#17264E] mb-4 animate-on-scroll"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
              >
                {t("grants.faqTitle")}
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="fetch-card animate-on-scroll">
                  <h3 className="font-display text-[#17264E] font-bold mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#DA251D" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              {t("grants.ctaTitle")}
            </h2>
            <p className="text-white/80 text-lg font-body mb-10 leading-relaxed">
              {t("grants.ctaDesc")}
            </p>
            <Link href="/contact">
              <span
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold font-body text-base transition-all cursor-pointer"
                style={{ backgroundColor: "white", color: "#DA251D" }}
              >
                {t("grants.ctaBtn")}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
