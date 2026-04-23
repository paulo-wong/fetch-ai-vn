import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Target, Zap, Users, BarChart3, Shield, Globe } from "lucide-react";

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

const pillarIcons = [Globe, Zap, Target, Users, BarChart3, Shield];
const pillarKeys = ["vietnam", "execution", "workflow", "upskilling", "measurable", "lowerRisk"];
const fitKeys = ["fit1", "fit2", "fit3", "fit4", "fit5"];

export default function WhyFetch() {
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
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("whyFetch.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-6 animate-on-scroll" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("whyFetch.heroTitle")}
            </h1>
            <p className="text-white/60 text-xl leading-relaxed font-body max-w-2xl animate-on-scroll">
              {t("whyFetch.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 animate-on-scroll">{t("whyFetch.differenceLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("whyFetch.differenceTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarKeys.map((key, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={key} className="fetch-card animate-on-scroll">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#FFBE16" }}>
                    <Icon className="w-6 h-6 text-[#091738]" />
                  </div>
                  <h3 className="font-display font-bold text-[#17264E] text-xl mb-3">{t(`whyFetch.pillar.${key}.title`)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{t(`whyFetch.pillar.${key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 section-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 animate-on-scroll">{t("whyFetch.honestLabel")}</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
                {t("whyFetch.honestTitle")}
              </h2>
              <div className="space-y-4 animate-on-scroll">
                <p className="text-gray-600 leading-relaxed font-body">{t("whyFetch.honestP1")}</p>
                <p className="text-gray-600 leading-relaxed font-body">{t("whyFetch.honestP2")}</p>
                <div className="mt-6 p-5 rounded-xl border-l-4 animate-on-scroll" style={{ borderColor: "#FFBE16", backgroundColor: "#F9FAFB" }}>
                  <p className="text-gray-700 text-sm italic font-body leading-relaxed">{t("whyFetch.testimonialQuote")}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <img src="/images/img-f1s7v8.jpg" alt="Marcus Tan" className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-[#17264E] font-body">{t("whyFetch.testimonialName")}</div>
                      <div className="text-xs text-gray-400 font-body">{t("whyFetch.testimonialCompany")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "#091738" }}>
                <div className="section-label mb-6" style={{ color: "#FFBE16" }}>{t("whyFetch.fitLabel")}</div>
                <div className="space-y-3">
                  {fitKeys.map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FFBE16] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm font-body">{t(`whyFetch.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFBE16]">
        <div className="container text-center">
          <h2 className="font-display text-[#091738] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            {t("whyFetch.ctaTitle")}
          </h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            {t("whyFetch.ctaDesc")}
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors animate-on-scroll">
              {t("whyFetch.ctaBtn")}
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
