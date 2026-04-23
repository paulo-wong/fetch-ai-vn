/* =============================================================
   FETCH TECHNOLOGY — Solutions Page (Vietnam)
   ============================================================= */

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Workflow, Brain, Users, BarChart3, Shield, CheckCircle2 } from "lucide-react";

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

const solutionIcons = [Zap, Workflow, Brain, Users, BarChart3, Shield];
const solutionKeys = ["sprint", "workflow", "implementation", "upskilling", "department", "managed"];
const solutionHrefs = ["/ai-adoption-sprint", "/contact", "/contact", "/contact", "/contact", "/contact"];

export default function Solutions() {
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
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("solutions.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("solutions.heroTitle")}
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              {t("solutions.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-16">
            {solutionKeys.map((key, i) => {
              const Icon = solutionIcons[i];
              const href = solutionHrefs[i];
              const isFirst = i === 0;
              const outcomes: string[] = t(`solutions.${key}.outcomes`, { returnObjects: true }) as string[];
              const deliverables: string[] = t(`solutions.${key}.deliverables`, { returnObjects: true }) as string[];
              return (
                <div key={key} className="grid lg:grid-cols-2 gap-12 items-start animate-on-scroll">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FFBE16" }}>
                        <Icon className="w-5 h-5 text-[#091738]" />
                      </div>
                      {isFirst && (
                        <span className="px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-widest font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>
                          {t("solutions.mostPopular")}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-bold text-[#17264E] mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{t(`solutions.${key}.title`)}</h2>
                    <p className="font-semibold text-sm mb-6 font-body" style={{ color: "#FFBE16" }}>{t(`solutions.${key}.tagline`)}</p>
                    <div className="space-y-5">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">{t("solutions.theProblem")}</div>
                        <p className="text-gray-600 text-sm leading-relaxed font-body">{t(`solutions.${key}.problem`)}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">{t("solutions.whatWeDo")}</div>
                        <p className="text-gray-600 text-sm leading-relaxed font-body">{t(`solutions.${key}.whatWeDo`)}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">{t("solutions.whoFor")}</div>
                        <p className="text-gray-600 text-sm leading-relaxed font-body">{t(`solutions.${key}.whoFor`)}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href={href}>
                        <span className="btn-navy text-sm px-6 py-3">
                          {isFirst ? t("solutions.learnSprint") : t("solutions.enquire")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: "#F3F5F7" }}>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-body">{t("solutions.outcomes")}</div>
                      <div className="space-y-2.5">
                        {Array.isArray(outcomes) && outcomes.map((o, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FFBE16] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm font-body">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 rounded-xl border border-[#E8EDF5]">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-body">{t("solutions.deliverables")}</div>
                      <div className="space-y-2">
                        {Array.isArray(deliverables) && deliverables.map((d, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0" />
                            <span className="text-gray-600 text-sm font-body">{d}</span>
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
            {t("solutions.ctaTitle")}
          </h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            {t("solutions.ctaDesc")}
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors animate-on-scroll">
              {t("solutions.bookCall")}
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
