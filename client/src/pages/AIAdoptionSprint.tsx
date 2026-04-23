/* =============================================================
   FETCH TECHNOLOGY - 30-Day AI Adoption Sprint Page
   Design: Kinetic Authority
   ============================================================= */

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Clock, Zap, Target, Users, BarChart3, FileText } from "lucide-react";

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

const deliverableIcons = [FileText, Target, Zap, Users, BarChart3, Clock];

type Week = {
  week: string;
  title: string;
  desc: string;
  activities: string[];
  deliverable: string;
};

type Deliverable = {
  title: string;
  desc: string;
};

export default function AIAdoptionSprint() {
  const { t } = useTranslation();
  useScrollReveal();

  const weeks = t("aiSprint.weeks", { returnObjects: true }) as Week[];
  const deliverablesList = t("aiSprint.deliverables", { returnObjects: true }) as Deliverable[];
  const forList = t("aiSprint.forList", { returnObjects: true }) as string[];
  const notForList = t("aiSprint.notForList", { returnObjects: true }) as string[];
  const stats = t("aiSprint.stats", { returnObjects: true }) as Array<{ value: string; unit: string; label: string }>;

  return (
    <Layout>
      <section className="pt-32 pb-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #FFBE16 0%, transparent 50%)" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest mb-6 font-body" style={{ backgroundColor: "#FFBE16", color: "#091738" }}>
              {t("aiSprint.heroBadge")}
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("aiSprint.heroTitle")}
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl mb-10">
              {t("aiSprint.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4 text-base">
                  {t("aiSprint.heroCtaBtn")}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <a href="#how-it-works">
                <span className="btn-navy-outline px-8 py-4 text-base">{t("aiSprint.heroSecondaryBtn")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFBE16]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, unit, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-[#091738]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {value}<span className="text-lg ml-1">{unit}</span>
                </div>
                <div className="text-[#091738]/70 text-sm font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4 animate-on-scroll">{t("aiSprint.forLabel")}</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
                {t("aiSprint.forTitle")}
              </h2>
              <div className="space-y-4 animate-on-scroll">
                {forList.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFBE16] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-body">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="p-8 rounded-xl" style={{ backgroundColor: "#091738" }}>
                <div className="section-label mb-4" style={{ color: "#FFBE16" }}>{t("aiSprint.notForLabel")}</div>
                <div className="space-y-3">
                  {notForList.map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                        <span className="text-white/60 text-xs">x</span>
                      </div>
                      <span className="text-white/60 text-sm font-body">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 animate-on-scroll">{t("aiSprint.howLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("aiSprint.howTitle")}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {weeks.map(({ week, title, desc, activities, deliverable }, i) => (
              <div key={week} className="flex gap-6 mb-12 animate-on-scroll">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#091738] font-bold text-sm flex-shrink-0 font-body" style={{ backgroundColor: "#FFBE16" }}>
                    {i + 1}
                  </div>
                  {i < weeks.length - 1 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: "rgba(255,190,22,0.3)" }} />}
                </div>
                <div className="pb-12">
                  <div className="text-xs font-bold text-[#FFBE16] uppercase tracking-widest mb-1 font-body">{week}</div>
                  <h3 className="font-display font-bold text-[#17264E] text-xl mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-body">{desc}</p>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                    {activities.map((a) => (
                      <div key={a} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0 mt-2" />
                        <span className="text-gray-600 text-xs font-body">{a}</span>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-semibold font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>
                    <FileText className="w-3.5 h-3.5" />
                    {t("aiSprint.deliverableLabel")}: {deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 animate-on-scroll">{t("aiSprint.whatYouGetLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("aiSprint.whatYouGetTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {deliverablesList.map(({ title, desc }, i) => {
              const Icon = deliverableIcons[i] || FileText;
              return (
                <div key={title} className="fetch-card animate-on-scroll">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#FFBE16" }}>
                    <Icon className="w-6 h-6 text-[#091738]" />
                  </div>
                  <h3 className="font-display font-bold text-[#17264E] text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFBE16]">
        <div className="container text-center">
          <h2 className="font-display text-[#091738] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            {t("aiSprint.ctaTitle")}
          </h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            {t("aiSprint.ctaDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors">
                {t("aiSprint.ctaBtn")}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/solutions">
              <span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-base border-2 border-[#091738] text-[#091738] hover:bg-[#091738] hover:text-white transition-colors">
                {t("aiSprint.ctaSecondary")}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
