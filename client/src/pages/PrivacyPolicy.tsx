/* =============================================================
   FETCH TECHNOLOGY — Privacy Policy Page
   Design: Kinetic Authority
   ============================================================= */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";

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

type Section = { title: string; content: string };

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  useScrollReveal();

  const sections = t("privacy.sections", { returnObjects: true }) as Section[];

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
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("privacy.legalLabel")}</span>
            </div>
            <h1
              className="font-display text-white mb-4 animate-on-scroll"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              {t("privacy.title")}
            </h1>
            <p className="text-white/50 text-sm font-body animate-on-scroll">
              {t("privacy.effectiveDate")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-gray-500 text-sm leading-relaxed font-body mb-12 pb-8 border-b border-gray-100">
              {t("privacy.intro")}
            </p>
            <div className="space-y-12">
              {sections.map(({ title, content }) => (
                <div key={title} className="animate-on-scroll">
                  <h2
                    className="font-display font-bold text-[#17264E] mb-4"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {title}
                  </h2>
                  <div className="space-y-3">
                    {content.split("\n\n").map((para, i) => {
                      if (para.startsWith("—") || para.startsWith("**")) {
                        const lines = para.split("\n");
                        return (
                          <ul key={i} className="space-y-2 mt-2">
                            {lines.map((line, j) => {
                              const cleaned = line.replace(/^— /, "").replace(/\*\*(.*?)\*\*/g, "$1");
                              const boldMatch = line.match(/^\*\*(.*?)\*\*:(.*)/);
                              return (
                                <li key={j} className="flex items-start gap-2 text-gray-600 text-sm font-body leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FFBE16" }} />
                                  {boldMatch ? (
                                    <span><strong className="text-[#17264E]">{boldMatch[1]}:</strong>{boldMatch[2]}</span>
                                  ) : (
                                    <span>{cleaned}</span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }
                      return (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed font-body">
                          {para.replace(/\*\*(.*?)\*\*/g, "$1")}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
