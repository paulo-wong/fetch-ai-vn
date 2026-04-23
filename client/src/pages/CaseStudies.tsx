import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

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

type CaseStudy = {
  id: string;
  tag: string;
  headline: string;
  subheadline: string;
  situation: string;
  whatWeDid: string[];
  results: { metric: string; label: string }[];
  quote: string;
  quoteName: string;
  quoteTitle: string;
  quotePhoto: string;
  engagement: string;
  duration: string;
  teamSize: string;
};

function CaseStudyCard({ cs, t }: { cs: CaseStudy; t: (key: string) => string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="animate-on-scroll"
      style={{ borderBottom: "1px solid #E8EDF5", paddingBottom: "3rem", marginBottom: "3rem" }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span
          className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm font-body"
          style={{ backgroundColor: "#EEF2F8", color: "#17264E" }}
        >
          {cs.tag}
        </span>
        <span className="text-gray-300 text-xs">·</span>
        <span className="text-gray-400 text-xs font-body">{cs.subheadline}</span>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mb-6">
        <div className="lg:col-span-2">
          <h2
            className="font-display font-bold text-[#17264E] mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.15 }}
          >
            {cs.headline}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cs.results.map(({ metric, label }) => (
              <div key={label} className="py-3 px-4 rounded-lg" style={{ backgroundColor: "#F3F5F7" }}>
                <div className="font-display font-bold text-[#17264E] text-lg leading-tight">{metric}</div>
                <div className="text-gray-400 text-xs font-body mt-0.5 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-6 flex flex-col justify-between" style={{ backgroundColor: "#17264E" }}>
          <div className="amber-border-left mb-5">
            <p className="text-white/80 text-sm leading-relaxed font-body italic">"{cs.quote}"</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFBE16]/20 flex-shrink-0" />
            <div>
              <div className="text-white text-sm font-semibold font-body">{cs.quoteName}</div>
              <div className="text-white/40 text-xs font-body">{cs.quoteTitle}</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-semibold font-body transition-colors hover:opacity-70"
        style={{ color: "#17264E" }}
      >
        {expanded ? t("caseStudies.hideStory") : t("caseStudies.readStory")}
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {expanded && (
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display font-bold text-[#17264E] text-lg mb-4">{t("caseStudies.situation")}</h3>
            {cs.situation.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed font-body mb-4">{para}</p>
            ))}
          </div>
          <div>
            <h3 className="font-display font-bold text-[#17264E] text-lg mb-4">{t("caseStudies.whatWeDid")}</h3>
            <ul className="space-y-4 mb-6">
              {cs.whatWeDid.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold font-body"
                    style={{ backgroundColor: "#FFBE16", color: "#091738" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{item}</p>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-lg" style={{ backgroundColor: "#F3F5F7" }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">{t("caseStudies.engagement")}</div>
                  <div className="text-sm font-semibold text-[#17264E] font-body">{cs.engagement}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">{t("caseStudies.duration")}</div>
                  <div className="text-sm font-semibold text-[#17264E] font-body">{cs.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">{t("caseStudies.scope")}</div>
                  <div className="text-sm font-semibold text-[#17264E] font-body">{cs.teamSize}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function CaseStudies() {
  const { t } = useTranslation();
  useScrollReveal();

  const caseStudies = t("caseStudies.studies", { returnObjects: true }) as CaseStudy[];
  const patterns = t("caseStudies.patterns", { returnObjects: true }) as Array<{ num: string; title: string; body: string }>;

  return (
    <Layout>
      <section className="pt-32 pb-16 section-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("caseStudies.heroLabel")}</span>
            </div>
            <h1
              className="font-display text-white mb-5 animate-on-scroll"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              {t("caseStudies.heroTitle")}
            </h1>
            <p className="text-white/60 text-xl font-body animate-on-scroll leading-relaxed">
              {t("caseStudies.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} t={t} />
          ))}
        </div>
      </section>

      <section className="py-20 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4 animate-on-scroll text-center">{t("caseStudies.patternLabel")}</div>
            <h2
              className="font-display text-[#17264E] mb-10 animate-on-scroll text-center"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}
            >
              {t("caseStudies.patternTitle")}
            </h2>
            <div className="space-y-6">
              {patterns.map(({ num, title, body }) => (
                <div key={num} className="fetch-card animate-on-scroll flex gap-6">
                  <div
                    className="font-display font-bold text-4xl flex-shrink-0"
                    style={{ color: "rgba(255,190,22,0.3)", lineHeight: 1 }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#17264E] text-xl mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container text-center">
          <div className="max-w-xl mx-auto">
            <h2
              className="font-display text-white mb-4 animate-on-scroll"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              {t("caseStudies.ctaTitle")}
            </h2>
            <p className="text-white/55 mb-8 animate-on-scroll font-body">
              {t("caseStudies.ctaDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4">
                  {t("caseStudies.ctaBtn")}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/ai-adoption-sprint">
                <span className="btn-navy-outline px-8 py-4">
                  {t("caseStudies.ctaSecondary")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
