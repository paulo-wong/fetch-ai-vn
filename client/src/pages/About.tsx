import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

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

const teamPhotos: Record<string, string> = {
  "Adrian Lim": "/images/adrian-lim-ceo.jpeg",
  "Tung Tran": "/images/tung-tran-headshot.jpeg",
  "Luck": "/images/img-lk7r2m.png",
  "Hillary": "/images/img-hl3p9q.png",
  "Mia": "/images/mia-headshot.jpg",
  "Curtis": "/images/curtis-professional.png",
};

export default function About() {
  const { t } = useTranslation();
  useScrollReveal();

  const teamKeys = ["adrianLim", "tungTran", "luck", "hillary", "mia", "curtis"];
  const teamPhotoKeys: Record<string, string> = {
    adrianLim: "/images/adrian-lim-ceo.jpeg",
    tungTran: "/images/tung-tran-headshot.jpeg",
    luck: "/images/img-lk7r2m.png",
    hillary: "/images/img-hl3p9q.png",
    mia: "/images/mia-headshot.jpg",
    curtis: "/images/curtis-professional.png",
  };

  const whyNowItems = ["whyNow1", "whyNow2", "whyNow3"];

  return (
    <Layout>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("about.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-5 animate-on-scroll" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("about.heroTitle")}
            </h1>
            <p className="text-white/60 text-xl font-body animate-on-scroll leading-relaxed">
              {t("about.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4 animate-on-scroll">{t("about.storyLabel")}</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
                {t("about.storyTitle")}
              </h2>
              <div className="space-y-5 animate-on-scroll">
                <p className="text-gray-600 leading-relaxed font-body">{t("about.storyP1")}</p>
                <p className="text-gray-600 leading-relaxed font-body">{t("about.storyP2")}</p>
                <p className="text-gray-600 leading-relaxed font-body">{t("about.storyP3")}</p>
                <p className="text-gray-600 leading-relaxed font-body font-semibold" style={{ color: "#17264E" }}>{t("about.storyP4")}</p>
              </div>
            </div>
            <div className="space-y-5 animate-on-scroll">
              <div className="rounded-2xl overflow-hidden" style={{ border: "3px solid #FFBE16", boxShadow: "0 20px 60px rgba(9,23,56,0.18)", background: "#091738", padding: "6px" }}>
                <img src="/images/fetch-team-beach.jpg" alt="The Fetch team" className="w-full rounded-xl" style={{ display: "block" }} />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="p-6 rounded-xl" style={{ backgroundColor: "#091738" }}>
                  <div className="section-label mb-3" style={{ color: "#FFBE16" }}>{t("about.focusLabel")}</div>
                  <p className="text-white/75 text-sm leading-relaxed font-body">{t("about.focusDesc")}</p>
                </div>
                <div className="p-6 rounded-xl" style={{ backgroundColor: "#17264E" }}>
                  <div className="section-label mb-3" style={{ color: "#FFBE16" }}>{t("about.marketLabel")}</div>
                  <p className="text-white/75 text-sm leading-relaxed font-body">{t("about.marketDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll">{t("about.teamLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              {t("about.teamTitle")}
            </h2>
            <p className="text-gray-500 animate-on-scroll font-body">{t("about.teamDesc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamKeys.map((key) => (
              <div key={key} className="animate-on-scroll text-center">
                <div className="relative inline-block mb-5">
                  <img
                    src={teamPhotoKeys[key]}
                    alt={t(`about.team.${key}.name`)}
                    className="w-28 h-28 rounded-2xl object-cover mx-auto"
                    style={{ boxShadow: "0 12px 40px rgba(9,23,56,0.15)" }}
                  />
                  <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full" style={{ backgroundColor: "#FFBE16" }} />
                </div>
                <h3 className="font-display font-bold text-[#17264E] text-xl mb-1">{t(`about.team.${key}.name`)}</h3>
                <div className="text-sm font-semibold font-body mb-3" style={{ color: "#FFBE16" }}>{t(`about.team.${key}.title`)}</div>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{t(`about.team.${key}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOW ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4 animate-on-scroll text-center">{t("about.whyNowLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-10 animate-on-scroll text-center" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
              {t("about.whyNowTitle")}
            </h2>
            <div className="space-y-5">
              {whyNowItems.map((key, i) => (
                <div key={key} className="fetch-card animate-on-scroll flex gap-6">
                  <div className="font-display font-bold text-4xl flex-shrink-0" style={{ color: "rgba(255,190,22,0.3)", lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#17264E] text-xl mb-2">{t(`about.${key}Title`)}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-body">{t(`about.${key}Body`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 section-navy">
        <div className="container text-center">
          <h2 className="font-display text-white mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            {t("about.ctaTitle")}
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            {t("about.ctaDesc")}
          </p>
          <Link href="/contact">
            <span className="btn-amber px-8 py-4 text-base animate-on-scroll">
              {t("about.ctaBtn")}
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
