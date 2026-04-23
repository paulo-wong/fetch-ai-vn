/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Government Grants Page
   Vietnam-specific grants — not on Singapore site
   ============================================================= */
import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, DollarSign, FileText, Clock, Users, ChevronRight, AlertCircle } from "lucide-react";

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

const grants = [
  {
    id: "national-ai-fund",
    name: "National AI Development Fund",
    nameVi: "Quy Phat trien AI Quoc gia",
    badge: "FLAGSHIP PROGRAM",
    badgeColor: "#DA251D",
    amount: "Up to 70% of project cost",
    totalFund: "VND 30 trillion (~$1.18B)",
    authority: "Ministry of Science & Technology (MOST)",
    decree: "Draft decree under finalisation — 2025",
    timeline: "Applications open Q3 2025",
    eligibility: [
      "Registered Vietnamese enterprise",
      "Minimum 2 years of operation",
      "Annual revenue under VND 300 billion (SME threshold)",
      "Project involves AI deployment, automation, or digital workflow redesign",
      "Minimum project value VND 500 million",
    ],
    covered: [
      "AI software licensing and deployment",
      "Workflow analysis and redesign consulting",
      "Staff training and upskilling",
      "Integration with existing systems",
      "Post-deployment support (up to 12 months)",
    ],
    process: [
      "Submit digital readiness assessment",
      "Prepare project proposal with ROI projections",
      "MOST technical review (30-45 days)",
      "Approval and disbursement schedule",
      "Quarterly reporting on outcomes",
    ],
    note: "Fetch assists with the full application process as part of our engagement. Most clients qualify within the first strategy call.",
  },
  {
    id: "sme-digital",
    name: "SME Digital Transformation Program",
    nameVi: "Chuong trinh Chuyen doi so cho DNNVV",
    badge: "SME PROGRAM",
    badgeColor: "#17264E",
    amount: "Free consulting + deployment support",
    totalFund: "500,000 SMEs targeted by 2030",
    authority: "Ministry of Planning & Investment (MPI)",
    decree: "Decision 433/QD-TTg (2026-2030 Plan)",
    timeline: "Rolling applications — open now",
    eligibility: [
      "Registered Vietnamese SME",
      "Fewer than 300 employees OR revenue under VND 300 billion",
      "Has not previously received equivalent digital transformation support",
      "Willing to participate in outcome reporting",
    ],
    covered: [
      "Free digital readiness assessment (valued VND 50-100 million)",
      "AI consulting and workflow mapping",
      "Subsidised software deployment",
      "Staff training sessions",
      "Access to national digital transformation platform",
    ],
    process: [
      "Register on the national SME portal",
      "Complete digital readiness questionnaire",
      "Assigned to approved consulting partner",
      "Implementation over 3-6 months",
      "Outcome reporting at 6 and 12 months",
    ],
    note: "Fetch is an approved consulting partner under this programme. We can register you directly and begin the assessment as part of our onboarding.",
  },
  {
    id: "tax-incentive",
    name: "Technology Investment Tax Incentive",
    nameVi: "Uu dai thue dau tu cong nghe",
    badge: "TAX INCENTIVE",
    badgeColor: "#FFBE16",
    badgeTextColor: "#091738",
    amount: "CIT reduction or full exemption",
    totalFund: "Decree 20/2026",
    authority: "Ministry of Finance (MOF)",
    decree: "Decree 20/2026 — effective January 2026",
    timeline: "Applicable to FY2026 onwards",
    eligibility: [
      "SME investing in technology or AI innovation",
      "Investment documented and auditable",
      "Filed through standard CIT return",
      "Project aligns with national digital transformation priorities",
    ],
    covered: [
      "Full CIT exemption for first 2 years of qualifying investment",
      "50% CIT reduction for following 4 years",
      "Accelerated depreciation on technology assets",
      "R&D expense deduction at 150% of actual cost",
    ],
    process: [
      "Document technology investment with receipts and contracts",
      "Classify investment under qualifying categories",
      "File CIT return with supporting schedules",
      "MOF review and confirmation",
      "Incentive applied to current and future tax years",
    ],
    note: "We work with your accountant or tax advisor to ensure all AI transformation costs are correctly classified to maximise your tax benefit.",
  },
];

const faqs = [
  {
    q: "Can a foreign-owned company operating in Vietnam access these grants?",
    a: "Yes — foreign-invested enterprises (FIEs) registered in Vietnam are eligible for most programs, including the SME Digital Transformation Program and the tax incentives. The National AI Fund has some additional requirements for FIEs; we assess this on a case-by-case basis.",
  },
  {
    q: "How long does the grant application process take?",
    a: "The SME Digital Transformation Program can be initiated within 1-2 weeks. The National AI Fund review takes 30-45 days from submission. Tax incentives are applied at year-end filing. We handle the paperwork — you focus on running your business.",
  },
  {
    q: "Do we need to apply for grants before starting the AI transformation?",
    a: "For the National AI Fund, yes — approval must precede expenditure. For the SME program and tax incentives, costs can often be backdated to the start of the financial year. We advise on timing during the strategy call.",
  },
  {
    q: "What if we don't qualify for any grants?",
    a: "Our 30-Day AI Sprint typically delivers ROI within the first month regardless of grant support. The grants reduce your cost, but the business case stands without them. We'll tell you honestly in the first call.",
  },
  {
    q: "Does Fetch charge extra for grant application support?",
    a: "No. Grant application support is included in all our engagements at no additional cost. We've done this enough times that it's part of our standard process.",
  },
];

export default function Grants() {
  useScrollReveal();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: "#091738" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(218,37,29,0.08) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold font-body"
              style={{ backgroundColor: "rgba(218,37,29,0.15)", border: "1px solid rgba(218,37,29,0.35)", color: "#ff6b6b" }}
            >
              <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} />
              Vietnam Government AI Grants
            </div>
            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.02em" }}
            >
              The government is paying for your AI transformation.
            </h1>
            <p className="text-white/65 text-xl leading-relaxed font-body mb-10 max-w-2xl">
              Vietnam has committed VND 30 trillion to AI adoption. Three active programs cover up to 70% of qualifying project costs. Fetch helps you access them.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold font-body text-base cursor-pointer transition-all"
                  style={{ backgroundColor: "#DA251D", color: "white" }}
                >
                  Check My Eligibility
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <a href="#grants">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold font-body text-base cursor-pointer transition-all"
                  style={{ border: "2px solid rgba(255,255,255,0.3)", color: "white" }}
                >
                  See All Programs
                  <ChevronRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="py-16 bg-white" id="grants">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: DollarSign, label: "Total fund size", value: "VND 30T", sub: "~$1.18 billion USD" },
              { icon: Users, label: "SMEs targeted", value: "500,000", sub: "by 2030 under Decision 433" },
              { icon: Clock, label: "Max cost coverage", value: "70%", sub: "of qualifying project cost" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="fetch-card text-center animate-on-scroll">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#DA251D12" }}>
                  <Icon className="w-6 h-6" style={{ color: "#DA251D" }} />
                </div>
                <div className="text-3xl font-bold font-display mb-1" style={{ color: "#17264E" }}>{value}</div>
                <div className="text-xs text-gray-400 font-body mb-1">{sub}</div>
                <div className="text-sm font-semibold text-gray-600 font-body">{label}</div>
              </div>
            ))}
          </div>

          {/* GRANT DETAIL CARDS */}
          <div className="space-y-12">
            {grants.map((g) => (
              <div key={g.id} id={g.id} className="fetch-card animate-on-scroll" style={{ borderTop: `4px solid ${g.badgeColor}` }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 font-body"
                      style={{ backgroundColor: g.badgeColor, color: (g as any).badgeTextColor ?? "white" }}
                    >
                      {g.badge}
                    </div>
                    <h2 className="font-display text-[#17264E] font-bold text-2xl mb-1">{g.name}</h2>
                    <p className="text-gray-400 text-sm font-body italic">{g.nameVi}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-display" style={{ color: g.badgeColor === "#FFBE16" ? "#17264E" : g.badgeColor }}>{g.amount}</div>
                    <div className="text-xs text-gray-400 font-body">{g.totalFund}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 font-body">Authority</div>
                    <div className="text-[#17264E] font-semibold font-body">{g.authority}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 font-body">Legal basis</div>
                    <div className="text-[#17264E] font-semibold font-body">{g.decree}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 font-body">Timeline</div>
                    <div className="text-[#17264E] font-semibold font-body">{g.timeline}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold text-[#17264E] text-sm mb-3 font-body flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: "#DA251D" }} /> Eligibility
                    </h4>
                    <ul className="space-y-2">
                      {g.eligibility.map((item) => (
                        <li key={item} className="text-gray-600 text-xs font-body flex items-start gap-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17264E] text-sm mb-3 font-body flex items-center gap-2">
                      <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} /> What's covered
                    </h4>
                    <ul className="space-y-2">
                      {g.covered.map((item) => (
                        <li key={item} className="text-gray-600 text-xs font-body flex items-start gap-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17264E] text-sm mb-3 font-body flex items-center gap-2">
                      <FileText className="w-4 h-4" style={{ color: "#DA251D" }} /> Application process
                    </h4>
                    <ol className="space-y-2">
                      {g.process.map((item, i) => (
                        <li key={item} className="text-gray-600 text-xs font-body flex items-start gap-2">
                          <span
                            className="flex-shrink-0 w-4 h-4 rounded-full text-white flex items-center justify-center font-bold mt-0.5"
                            style={{ backgroundColor: "#DA251D", fontSize: "9px" }}
                          >
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 p-4 rounded-lg text-sm font-body"
                  style={{ backgroundColor: "#FFBE1610", border: "1px solid #FFBE1640" }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#FFBE16" }} />
                  <p className="text-gray-700">{g.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-label mb-4 animate-on-scroll">Common Questions</div>
              <h2
                className="font-display text-[#17264E] mb-4 animate-on-scroll"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
              >
                Grant FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="fetch-card animate-on-scroll">
                  <h3 className="font-display text-[#17264E] font-bold mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#DA251D" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              Find out which grants you qualify for.
            </h2>
            <p className="text-white/80 text-lg font-body mb-10 leading-relaxed">
              Book a 45-minute strategy call. We'll review your business, identify the right programs, and tell you exactly what to prepare.
            </p>
            <Link href="/contact">
              <span
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold font-body text-base transition-all cursor-pointer"
                style={{ backgroundColor: "white", color: "#DA251D" }}
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
