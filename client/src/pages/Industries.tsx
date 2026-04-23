import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const industryKeys = ["logistics", "customerOps", "professionalServices", "healthcare", "finance", "distribution"];
const industryEmojis = ["🚚", "💬", "⚖️", "🏥", "📊", "🏭"];

export default function Industries() {
  const { t } = useTranslation();
  useScrollReveal();

  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#FFBE16]" />
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("industries.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("industries.heroTitle")}
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              {t("industries.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-20">
            {industryKeys.map((key, i) => {
              const painPoints = t(`industries.${key}.painPoints`, { returnObjects: true }) as string[];
              const howAIHelps = t(`industries.${key}.howAIHelps`, { returnObjects: true }) as string[];
              const outcomes = t(`industries.${key}.outcomes`, { returnObjects: true }) as string[];
              return (
                <div key={key} className="animate-on-scroll">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-4xl">{industryEmojis[i]}</div>
                    <div>
                      <h2 className="font-display font-bold text-[#17264E]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                        {t(`industries.${key}.name`)}
                      </h2>
                      <p className="text-gray-500 font-body">{t(`industries.${key}.tagline`)}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-5 rounded-xl" style={{ backgroundColor: "#F3F5F7" }}>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-body">{t("industries.painPoints")}</div>
                      <div className="space-y-2">
                        {painPoints.map((p) => (
                          <div key={p} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                            <span className="text-gray-600 text-xs font-body">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 rounded-xl border border-[#E8EDF5]">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-body">{t("industries.howAIHelps")}</div>
                      <div className="space-y-2">
                        {howAIHelps.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0 mt-1.5" />
                            <span className="text-gray-600 text-xs font-body">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 rounded-xl" style={{ backgroundColor: "#17264E" }}>
                      <div className="text-xs font-bold uppercase tracking-widest mb-3 font-body" style={{ color: "#FFBE16" }}>{t("industries.fetchApproach")}</div>
                      <p className="text-white/70 text-xs leading-relaxed font-body">{t(`industries.${key}.podApproach`)}</p>
                    </div>
                    <div className="p-5 rounded-xl" style={{ backgroundColor: "#091738" }}>
                      <div className="text-xs font-bold uppercase tracking-widest mb-3 font-body" style={{ color: "#FFBE16" }}>{t("industries.outcomes")}</div>
                      <div className="space-y-2">
                        {outcomes.map((o) => (
                          <div key={o} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0 mt-1.5" />
                            <span className="text-white/70 text-xs font-body">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFBE16]">
        <div className="container text-center">
          <h2 className="font-display text-[#091738] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            {t("industries.ctaTitle")}
          </h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            {t("industries.ctaDesc")}
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors animate-on-scroll">
              {t("industries.ctaBtn")}
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
