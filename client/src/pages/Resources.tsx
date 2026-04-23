import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { ArrowRight, Clock, X, Download, BookOpen, FileText, Video, Wrench, ChevronRight } from "lucide-react";
import { toast } from "sonner";

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

const toolIcons = [FileText, Download, BookOpen, Video, Wrench, FileText];

type Article = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  featured: boolean;
  body: string;
};

type Tool = {
  title: string;
  desc: string;
  tag: string;
};

export default function Resources() {
  const { t } = useTranslation();
  useScrollReveal();

  const articles = t("resources.articles", { returnObjects: true }) as Article[];
  const tools = t("resources.tools", { returnObjects: true }) as Tool[];
  const categories = t("resources.categories", { returnObjects: true }) as string[];

  const [activeCategory, setActiveCategory] = useState(categories[0] || "All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeCategory === categories[0] ? articles : articles.filter(a => a.category === activeCategory);

  function handleChecklistSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error(t("resources.emailError"));
      return;
    }
    setSubmitted(true);
    toast.success(t("resources.emailSuccess"));
  }

  function handleToolDownload(title: string) {
    toast.success(`"${title}" — ${t("resources.toolRequestToast")}`);
  }

  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#FFBE16]" />
              <span className="section-label" style={{ color: "#FFBE16" }}>{t("resources.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              {t("resources.heroTitle")}
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              {t("resources.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12 animate-on-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-sm text-sm font-medium font-body transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17264E]"
                style={{
                  backgroundColor: activeCategory === cat ? "#17264E" : "#F3F5F7",
                  color: activeCategory === cat ? "white" : "#17264E",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-6 font-body animate-on-scroll">
            {filtered.length} {filtered.length !== 1 ? t("resources.articlesPlural") : t("resources.articleSingular")}
            {activeCategory !== categories[0] ? ` ${t("resources.inCategory")} ${activeCategory}` : ""}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <div
                key={article.title}
                onClick={() => setSelectedArticle(article)}
                className="fetch-card animate-on-scroll cursor-pointer group"
              >
                {article.featured && (
                  <div className="inline-flex px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-widest mb-3 font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>
                    {t("resources.featured")}
                  </div>
                )}
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">{article.category}</div>
                <h3 className="font-display font-bold text-[#17264E] text-lg mb-3 group-hover:text-[#FFBE16] transition-colors leading-snug">{article.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 font-body">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-body">
                    <Clock className="w-3.5 h-3.5" />{article.readTime}
                  </div>
                  <div className="flex items-center gap-1 text-[#17264E] text-sm font-semibold group-hover:gap-2 transition-all">
                    {t("resources.readBtn")} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-light">
        <div className="container">
          <div className="mb-12 animate-on-scroll">
            <div className="section-label mb-3">{t("resources.toolsLabel")}</div>
            <h2 className="font-display text-[#17264E] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
              {t("resources.toolsTitle")}
            </h2>
            <p className="text-gray-600 font-body max-w-2xl">
              {t("resources.toolsDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(({ title, desc, tag }, i) => {
              const Icon = toolIcons[i] || FileText;
              const color = i % 2 === 0 ? "#17264E" : "#FFBE16";
              return (
                <div key={title} className="fetch-card animate-on-scroll group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm font-body" style={{ backgroundColor: tag === "Playbook" || tag === "Bộ công cụ" ? "rgba(255,190,22,0.15)" : "#F3F5F7", color: "#17264E" }}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#17264E] text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 font-body">{desc}</p>
                  <button
                    onClick={() => handleToolDownload(title)}
                    className="flex items-center gap-1.5 text-[#17264E] text-sm font-semibold group-hover:gap-2.5 transition-all focus:outline-none"
                  >
                    <Download className="w-3.5 h-3.5" /> {t("resources.requestAccess")} <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 section-navy">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-white mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
              {t("resources.checklistTitle")}
            </h2>
            <p className="text-white/65 mb-8 animate-on-scroll font-body">
              {t("resources.checklistDesc")}
            </p>
            {submitted ? (
              <div className="inline-flex items-center gap-2 px-6 py-4 rounded-sm animate-on-scroll" style={{ backgroundColor: "rgba(255,190,22,0.15)", border: "1px solid rgba(255,190,22,0.3)" }}>
                <span className="text-[#FFBE16] font-semibold font-body">{t("resources.checklistSent")}</span>
              </div>
            ) : (
              <form onSubmit={handleChecklistSubmit} className="flex gap-3 max-w-md mx-auto animate-on-scroll">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t("resources.emailPlaceholder")}
                  required
                  className="flex-1 px-4 py-3 rounded-sm border border-white/20 bg-white/10 text-white placeholder:text-white/40 text-sm font-body focus:outline-none focus:border-[#FFBE16]"
                />
                <button type="submit" className="btn-amber px-6 py-3 text-sm whitespace-nowrap">
                  {t("resources.checklistBtn")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 overflow-y-auto"
          style={{ backgroundColor: "rgba(9,23,56,0.7)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedArticle(null); }}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full shadow-2xl relative" style={{ maxHeight: "80vh", overflowY: "auto" }}>
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-start justify-between gap-4 z-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 font-body">{selectedArticle.category}</div>
                <h2 className="font-display font-bold text-[#17264E] text-xl leading-snug">{selectedArticle.title}</h2>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Close article"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="px-8 py-6">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs font-body mb-6">
                <Clock className="w-3.5 h-3.5" />{selectedArticle.readTime}
              </div>
              <div className="prose prose-sm max-w-none font-body text-gray-700 leading-relaxed">
                {selectedArticle.body.split("\n\n").map((para, i) => {
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return <h3 key={i} className="font-display font-bold text-[#17264E] text-base mt-6 mb-2">{para.replace(/\*\*/g, "")}</h3>;
                  }
                  const parts = para.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={i} className="mb-4">
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**")
                          ? <strong key={j} className="text-[#17264E]">{part.replace(/\*\*/g, "")}</strong>
                          : part
                      )}
                    </p>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-body mb-4">{t("resources.modalCta")}</p>
                <a href="/contact" className="btn-navy inline-flex items-center gap-2 px-6 py-3 text-sm">
                  {t("resources.modalCtaBtn")} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
