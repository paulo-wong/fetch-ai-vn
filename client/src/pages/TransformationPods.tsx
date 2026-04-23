import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Users, Target, Zap, BarChart3, CheckCircle2 } from "lucide-react";

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

const podTypeIcons = [Zap, Users, BarChart3, Target];

export default function TransformationPods() {
  const { t } = useTranslation();
  useScrollReveal();

  const podRoles = t("pods.roles", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const podTypes = t("pods.podTypes", { returnObjects: true }) as Array<{ name: string; focus: string; roles: string[]; duration: string; bestFor: string }>;
  const comparisons = t("pods.comparisons", { returnObjects: true }) as Array<{ aspect: string; pod: string; consulting: string; staffing: string }>;
  const podFeatures = t("pods.podFeatures", { returnObjects: true }) as string[];

  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#FFBE16]" />
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("pods.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("pods.heroTitle")}
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              {t("pods.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 animate-on-scroll">{t("pods.whatIsPodLabel")}</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
                {t("pods.whatIsPodTitle")}
              </h2>
              <div className="space-y-5 animate-on-scroll">
                <p className="text-gray-600 leading-relaxed font-body">{t("pods.whatIsPodDesc1")}</p>
                <p className="text-gray-600 leading-relaxed font-body">{t("pods.whatIsPodDesc2")}</p>
              </div>
              <div className="mt-8 space-y-3 animate-on-scroll">
                {podFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBE16] flex-shrink-0" />
                    <span className="text-gray-700 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "#091738" }}>
                <div className="section-label mb-6" style={{ color: "#FFBE16" }}>{t("pods.compositionLabel")}</div>
                <div className="space-y-4">
                  {podRoles.map(({ title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#FFBE16] flex-shrink-0 mt-2" />
                      <div>
                        <div className="text-white font-semibold text-sm font-body">{title}</div>
                        <div className="text-white/50 text-xs mt-0.5 font-body">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 animate-on-scroll">{t("pods.typesLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("pods.typesTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {podTypes.map(({ name, focus, roles, duration, bestFor }, i) => {
              const Icon = podTypeIcons[i] || Zap;
              return (
                <div key={name} className="fetch-card animate-on-scroll">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FFBE16" }}>
                      <Icon className="w-5 h-5 text-[#091738]" />
                    </div>
                    <h3 className="font-display font-bold text-[#17264E] text-xl">{name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 font-body">{focus}</p>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">{t("pods.podRolesLabel")}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {roles.map((r) => (
                          <span key={r} className="px-2 py-0.5 rounded-sm text-xs font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>{r}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 font-body">{t("pods.durationLabel")}</div>
                        <div className="text-[#17264E] font-semibold text-sm font-body">{duration}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 font-body">{t("pods.bestForLabel")}</div>
                        <div className="text-gray-600 text-sm font-body">{bestFor}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 animate-on-scroll">{t("pods.whyPodsLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("pods.whyPodsTitle")}
            </h2>
          </div>
          <div className="overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "2px solid #E8EDF5" }}>
                  <th className="text-left py-3 px-4 font-body text-gray-400 text-xs uppercase tracking-widest font-semibold">{t("pods.tableAspect")}</th>
                  <th className="text-left py-3 px-4 font-body text-xs uppercase tracking-widest font-semibold" style={{ color: "#17264E" }}>{t("pods.tableFetchPod")}</th>
                  <th className="text-left py-3 px-4 font-body text-gray-400 text-xs uppercase tracking-widest font-semibold">{t("pods.tableConsulting")}</th>
                  <th className="text-left py-3 px-4 font-body text-gray-400 text-xs uppercase tracking-widest font-semibold">{t("pods.tableStaffing")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(({ aspect, pod, consulting, staffing }, i) => (
                  <tr key={aspect} style={{ backgroundColor: i % 2 === 0 ? "#F3F5F7" : "white" }}>
                    <td className="py-3 px-4 font-semibold text-[#17264E] font-body">{aspect}</td>
                    <td className="py-3 px-4 font-body font-medium" style={{ color: "#17264E" }}>{pod}</td>
                    <td className="py-3 px-4 text-gray-500 font-body">{consulting}</td>
                    <td className="py-3 px-4 text-gray-500 font-body">{staffing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container text-center">
          <h2 className="font-display text-white mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            {t("pods.ctaTitle")}
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            {t("pods.ctaDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Link href="/contact">
              <span className="btn-amber px-8 py-4 text-base">
                {t("pods.ctaBtn")}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/solutions">
              <span className="btn-navy-outline px-8 py-4 text-base">{t("pods.ctaSecondary")}</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
