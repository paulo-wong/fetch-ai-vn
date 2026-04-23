/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Careers Page (i18n)
   ============================================================= */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { MapPin, Clock, DollarSign, ChevronDown, ChevronUp, ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";

const locTagColors: Record<string, string> = {
  HCM: "bg-amber-100 text-amber-800",
  HN: "bg-blue-100 text-blue-800",
  Remote: "bg-green-100 text-green-800",
};

function JobCard({ job }: { job: { id: number; titleKey: string; location: string; locTag: string; typeKey: string; salary: string; tag: string | null; remote: boolean; requirementsKeys: string[] } }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-lg"
      style={{ boxShadow: "0 2px 12px rgba(9,23,56,0.06)" }}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {job.tag && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#DA251D" }}>
                  {t(`careers.${job.tag}`)}
                </span>
              )}
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${locTagColors[job.locTag] ?? "bg-gray-100 text-gray-700"}`}>
                {job.locTag}
              </span>
              {job.remote && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">{t("careers.remote")}</span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl text-[#17264E] mb-2">{t(`careers.${job.titleKey}`)}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{t(`careers.${job.typeKey}`)}</span>
              <span className="flex items-center gap-1.5 font-semibold" style={{ color: "#FFBE16" }}>
                <DollarSign className="w-4 h-4" />{job.salary}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`mailto:careers@fetch.tech?subject=${encodeURIComponent(t(`careers.${job.titleKey}`))}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#091738] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FFBE16" }}
            >
              {t("careers.applyNow")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-2.5 rounded-xl border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {expanded && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="font-semibold text-[#17264E] mb-3 text-sm uppercase tracking-wide">{t("careers.requirements")}</h4>
            <ul className="space-y-2">
              {job.requirementsKeys.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#FFBE16" }} />
                  {t(`careers.${req}`)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Careers() {
  const [locationFilter, setLocationFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const jobs = [
    {
      id: 1, titleKey: "job1Title", location: t("careers.job1Location"), locTag: "HCM",
      typeKey: "fullTime", salary: "Up to 1,500 USD", tag: "tagNew", remote: false,
      requirementsKeys: ["job1Req1","job1Req2","job1Req3","job1Req4","job1Req5","job1Req6","job1Req7"],
    },
    {
      id: 2, titleKey: "job2Title", location: t("careers.job2Location"), locTag: "HCM",
      typeKey: "fullTime", salary: "Up to 2,200 USD", tag: "tagNew", remote: false,
      requirementsKeys: ["job2Req1","job2Req2","job2Req3","job2Req4","job2Req5","job2Req6"],
    },
    {
      id: 3, titleKey: "job3Title", location: t("careers.job3Location"), locTag: "Remote",
      typeKey: "fullTime", salary: "Up to 4,500 USD", tag: "tagNew", remote: true,
      requirementsKeys: ["job3Req1","job3Req2","job3Req3","job3Req4","job3Req5","job3Req6"],
    },
    {
      id: 4, titleKey: "job4Title", location: t("careers.job4Location"), locTag: "HN",
      typeKey: "fullTime", salary: "Up to 800 USD", tag: "tagNew", remote: false,
      requirementsKeys: ["job4Req1","job4Req2","job4Req3","job4Req4","job4Req5"],
    },
    {
      id: 5, titleKey: "job5Title", location: t("careers.job5Location"), locTag: "HN",
      typeKey: "fullTime", salary: "Up to 2,500 USD", tag: "tagNew", remote: false,
      requirementsKeys: ["job5Req1","job5Req2","job5Req3","job5Req4","job5Req5","job5Req6"],
    },
    {
      id: 6, titleKey: "job6Title", location: t("careers.job6Location"), locTag: "HCM",
      typeKey: "fullTime", salary: "Up to 1,200 USD", tag: null, remote: false,
      requirementsKeys: ["job6Req1","job6Req2","job6Req3","job6Req4","job6Req5"],
    },
    {
      id: 7, titleKey: "job7Title", location: t("careers.job7Location"), locTag: "Remote",
      typeKey: "fullTime", salary: "Up to 2,800 USD", tag: null, remote: true,
      requirementsKeys: ["job7Req1","job7Req2","job7Req3","job7Req4","job7Req5","job7Req6","job7Req7","job7Req8"],
    },
    {
      id: 8, titleKey: "job8Title", location: t("careers.job8Location"), locTag: "HCM",
      typeKey: "fullTime", salary: "Up to 25,000,000 VND", tag: null, remote: false,
      requirementsKeys: ["job8Req1","job8Req2","job8Req3","job8Req4","job8Req5"],
    },
  ];

  const perks = [
    { icon: DollarSign, titleKey: "perk1Title", descKey: "perk1Desc" },
    { icon: TrendingUp, titleKey: "perk2Title", descKey: "perk2Desc" },
    { icon: Users, titleKey: "perk3Title", descKey: "perk3Desc" },
  ];

  const locations = ["All", "HCM", "HN", "Remote"];

  const filtered = jobs.filter((j) => {
    const matchLoc = locationFilter === "All" || j.locTag === locationFilter;
    const matchSearch = search === "" || t(`careers.${j.titleKey}`).toLowerCase().includes(search.toLowerCase());
    return matchLoc && matchSearch;
  });

  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#091738" }}>
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#DA251D" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFBE16" }}>{t("careers.heroLabel")}</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.06 }}>
              {t("careers.heroTitle")}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed font-body mb-8 max-w-2xl">{t("careers.heroDesc")}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#open-roles" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#091738] transition-opacity hover:opacity-90" style={{ backgroundColor: "#FFBE16" }}>
                {t("careers.seeRoles")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:careers@fetch.tech" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-white/20 hover:border-white/40 transition-colors">
                {t("careers.speculativeCV")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#FFBE16" }}>
                  <Icon className="w-5 h-5 text-[#091738]" />
                </div>
                <h3 className="font-display font-bold text-[#17264E] mb-2">{t(`careers.${titleKey}`)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`careers.${descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="py-20" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="section-label mb-3">{t("careers.openPositions")}</div>
              <h2 className="font-display text-[#17264E]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                {filtered.length} {t("careers.rolesTitle")}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                placeholder={t("careers.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-amber-400 w-48"
              />
              <div className="flex gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocationFilter(loc)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                      locationFilter === loc ? "text-[#091738] border-transparent" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                    }`}
                    style={locationFilter === loc ? { backgroundColor: "#FFBE16", borderColor: "#FFBE16" } : {}}
                  >
                    {loc === "All" ? t("careers.filterAll") : loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">{t("careers.noRoles")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SPECULATIVE CTA */}
      <section className="py-20" style={{ backgroundColor: "#091738" }}>
        <div className="container text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#DA251D" }}>
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            {t("careers.noRoleTitle")}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">{t("careers.noRoleDesc")}</p>
          <a
            href="mailto:careers@fetch.tech"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#091738] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFBE16" }}
          >
            {t("careers.speculativeApply")}
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-sm mt-4">{t("careers.careersEmail")}</p>
        </div>
      </section>
    </Layout>
  );
}
