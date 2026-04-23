/* =============================================================
   FETCH TECHNOLOGY — Case Studies Page
   Design: Kinetic Authority
   Copy: Specific, narrative-driven, real numbers
   ============================================================= */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

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

const caseStudies = [
  {
    id: "fleet",
    tag: "Logistics & Fleet Management",
    headline: "A commercial fleet operator cut route planning time by 70% and reduced fuel costs by S$190K annually.",
    subheadline: "30-Day AI Adoption Sprint · Singapore · 120 vehicles, 18 operations staff",
    situation: `The operations team at a Singapore-based commercial vehicle fleet company was managing 120 vehicles across multiple client contracts. Route planning was done manually each morning by three senior dispatchers, each spending two to three hours building daily schedules in spreadsheets and cross-referencing against driver availability, vehicle maintenance windows, and client delivery windows.\n\nBeyond planning, the team was drowning in administrative overhead: driver briefing documents, client delivery reports, fuel reconciliation, and compliance paperwork for LTA requirements. The operations manager estimated that 60% of her team's day was spent on tasks that required no judgement — just data entry, formatting, and distribution.\n\nThe company had explored off-the-shelf fleet management software but found the implementation costs prohibitive and the tools too rigid for their mix of contract types. They needed AI that worked within their existing systems, not a platform replacement.`,
    whatWeDid: [
      "Spent the first week embedded with the dispatch team, riding along on the morning planning process and documenting every step. Identified that route planning alone was consuming 63 dispatcher-hours per week — the single largest time sink in the operation.",
      "Redesigned the route planning workflow to use AI-assisted optimisation within the team's existing tools, eliminating the manual spreadsheet process while preserving dispatcher control over final decisions. Dispatchers went from building routes from scratch to reviewing and approving AI-generated schedules.",
      "Automated the generation of driver briefing documents, client delivery reports, and fuel reconciliation summaries — three high-volume, low-judgement tasks that were consuming an estimated 20 hours per week across the team.",
      "Ran two structured training sessions with all 18 operations staff, including a dispatcher-specific playbook. Tracked adoption and time savings daily for the first three weeks post-deployment, with weekly check-ins for the following month.",
    ],
    results: [
      { metric: "70%", label: "reduction in daily route planning time" },
      { metric: "S$190K", label: "annual fuel cost reduction from optimised routes" },
      { metric: "63 hrs/wk", label: "dispatcher time recovered" },
      { metric: "4 weeks", label: "to full deployment across all contracts" },
    ],
    quote: "Our dispatchers were spending half their morning building routes that AI can now draft in minutes. They still make the final call — but they're making it in 20 minutes instead of two hours.",
    quoteName: "Raymond Ong",
    quoteTitle: "Operations Manager",
    quotePhoto: "/images/img-d2n5w9.jpg",
    engagement: "30-Day AI Adoption Sprint",
    duration: "4 weeks",
    teamSize: "18 operations staff",
  },
  {
    id: "freight",
    tag: "Logistics & Supply Chain",
    headline: "A freight forwarder recovered 14 hours per operations manager per week.",
    subheadline: "30-Day AI Adoption Sprint · Singapore · 45 staff",
    situation: `The operations team at a mid-sized Singapore freight forwarder was spending the majority of their working day on tasks that required no judgement: pulling shipment status updates from carrier portals, copying data into customer emails, chasing vendors for ETAs, and compiling weekly performance reports from five different spreadsheets.\n\nEach operations manager was spending an estimated 3.2 hours per day on these tasks. With seven managers, that was 22 hours of senior operational capacity lost every day to copy-paste work.\n\nThe company had purchased a ChatGPT Enterprise licence six months earlier. Nobody was using it in a structured way.`,
    whatWeDid: [
      "Spent week one embedded with the operations team, documenting every workflow step-by-step. We found 23 distinct manual touchpoints across the shipment lifecycle.",
      "Scored each touchpoint against our AI opportunity framework: impact, feasibility, and implementation speed. Identified four high-priority workflows for immediate redesign.",
      "Redesigned and deployed two workflows in weeks three and four: (1) automated shipment status aggregation and customer email generation, (2) AI-assisted vendor communication and ETA tracking.",
      "Ran three training sessions with the operations team, including a role-specific playbook for each manager. Tracked adoption daily for the first two weeks post-deployment.",
    ],
    results: [
      { metric: "14 hrs/week", label: "recovered per operations manager" },
      { metric: "S$280K", label: "annualised admin cost eliminated" },
      { metric: "91%", label: "team adoption rate at 30 days" },
      { metric: "4 weeks", label: "to first workflow in production" },
    ],
    quote: "We'd been talking about AI for 18 months. Fetch came in, mapped our operations in a week, and had two workflows running in production by week four. The team actually uses them.",
    quoteName: "David Lim",
    quoteTitle: "COO",
    quotePhoto: "/images/img-d2n5w9.jpg",
    engagement: "30-Day AI Adoption Sprint",
    duration: "4 weeks",
    teamSize: "45 staff",
  },
  {
    id: "consulting",
    tag: "Professional Services",
    headline: "A boutique consulting firm eliminated S$180K in annual admin cost.",
    subheadline: "AI Implementation + Team Upskilling · Singapore · 28 consultants",
    situation: `The firm's 28 consultants were collectively spending an estimated 40% of their billable hours on non-billable administrative work: writing proposals from scratch for similar engagements, reconciling billing across multiple clients, compiling client reports from raw data, and drafting status updates.\n\nThe managing director had calculated that if she could recover half of that time and redirect it to billable work, the firm would generate an additional S$360K in annual revenue without hiring a single additional person.\n\nThe challenge was that every consultant worked slightly differently. There was no standardised process for proposals, no template library, and no shared knowledge base. Any AI solution had to work across the existing diversity of working styles.`,
    whatWeDid: [
      "Conducted a workflow audit across all 28 consultants over two weeks, identifying the five highest-volume administrative tasks and documenting the variation in how each was performed.",
      "Built a shared prompt library and template system covering proposal generation, billing reconciliation, client reporting, and status updates — standardised enough to work at scale, flexible enough to accommodate individual styles.",
      "Integrated the AI tooling with the firm's existing project management and billing systems, eliminating the need for manual data transfer.",
      "Ran four structured upskilling sessions over two weeks, with role-specific playbooks. Followed up with a 30-day adoption check-in and additional coaching for the three consultants who were slowest to adopt.",
    ],
    results: [
      { metric: "S$180K", label: "annual admin cost eliminated" },
      { metric: "40% → 15%", label: "time spent on non-billable admin" },
      { metric: "S$360K", label: "additional billable capacity unlocked" },
      { metric: "6 weeks", label: "to full team adoption" },
    ],
    quote: "Our consultants were spending 40% of their time on admin. After the sprint, that's down to about 15%. The ROI calculation was straightforward — we saw payback in the first month.",
    quoteName: "Priya Menon",
    quoteTitle: "Managing Director",
    quotePhoto: "/images/img-e6q0j3.jpg",
    engagement: "AI Implementation + Team Upskilling",
    duration: "6 weeks",
    teamSize: "28 consultants",
  },
  {
    id: "finance",
    tag: "Financial Services",
    headline: "A regional financial services firm cut compliance documentation time by 58%.",
    subheadline: "Workflow Redesign + AI Implementation · Singapore · 3 business units",
    situation: `The firm's compliance and operations teams were producing a high volume of documentation: client onboarding packs, KYC summaries, regulatory filing narratives, and internal audit reports. Each document required significant manual effort — pulling data from multiple systems, writing structured narratives, and formatting outputs to meet regulatory standards.\n\nThe head of operations estimated that compliance documentation was consuming 35% of the operations team's capacity. During peak regulatory periods, the team was regularly working evenings and weekends to meet deadlines.\n\nThe firm had previously attempted to implement an AI tool. The project stalled after three months because the tool had been deployed without redesigning the underlying workflows, and the team had reverted to their manual processes.`,
    whatWeDid: [
      "Started with a workflow redesign engagement before any AI was deployed. Documented the existing documentation processes in detail, identified the bottlenecks, and redesigned the workflows to be AI-ready.",
      "Identified that the previous AI implementation had failed because it had been layered on top of broken processes. The new design eliminated three redundant steps before automation was introduced.",
      "Deployed AI-assisted document generation across three workflows: client onboarding packs, KYC summaries, and regulatory filing narratives. Each workflow was integrated with the firm's existing data systems.",
      "Worked closely with the compliance team to ensure all AI-generated outputs met regulatory standards. Built a review and sign-off process that maintained human oversight while eliminating the manual drafting work.",
    ],
    results: [
      { metric: "58%", label: "reduction in compliance documentation time" },
      { metric: "Zero", label: "regulatory deadlines missed post-deployment" },
      { metric: "S$240K", label: "estimated annual staff time recovered" },
      { metric: "8 weeks", label: "full deployment across 3 business units" },
    ],
    quote: "What I appreciated was that they pushed back when we wanted to automate the wrong things. They redesigned the process first. That's the reason it worked.",
    quoteName: "Marcus Tan",
    quoteTitle: "Head of Operations",
    quotePhoto: "/images/img-f1s7v8.jpg",
    engagement: "Workflow Redesign + AI Implementation",
    duration: "8 weeks",
    teamSize: "3 business units",
  },
];

function CaseStudyCard({ cs }: { cs: typeof caseStudies[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="animate-on-scroll"
      style={{ borderBottom: "1px solid #E8EDF5", paddingBottom: "3rem", marginBottom: "3rem" }}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span
          className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm font-body"
          style={{ backgroundColor: "#EEF2F8", color: "#17264E" }}
        >
          {cs.tag}
        </span>
        <span className="text-gray-300 text-xs">·</span>
        <span className="text-gray-400 text-xs font-body">{cs.subheadline}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-6">
        {/* Left: headline + metrics */}
        <div className="lg:col-span-2">
          <h2
            className="font-display font-bold text-[#17264E] mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.15 }}
          >
            {cs.headline}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cs.results.map(({ metric, label }) => (
              <div key={label} className="py-3 px-4 rounded-lg" style={{ backgroundColor: "#F3F5F7" }}>
                <div className="font-display font-bold text-[#17264E] text-lg leading-tight">{metric}</div>
                <div className="text-gray-400 text-xs font-body mt-0.5 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: quote card */}
        <div className="rounded-xl p-6 flex flex-col justify-between" style={{ backgroundColor: "#17264E" }}>
          <div className="amber-border-left mb-5">
            <p className="text-white/80 text-sm leading-relaxed font-body italic">"{cs.quote}"</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={cs.quotePhoto}
              alt={cs.quoteName}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <div className="text-white text-sm font-semibold font-body">{cs.quoteName}</div>
              <div className="text-white/40 text-xs font-body">{cs.quoteTitle}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-semibold font-body transition-colors hover:opacity-70"
        style={{ color: "#17264E" }}
      >
        {expanded ? "Hide" : "Read"} the full story
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {expanded && (
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display font-bold text-[#17264E] text-lg mb-4">The situation</h3>
            {cs.situation.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed font-body mb-4">{para}</p>
            ))}
          </div>
          <div>
            <h3 className="font-display font-bold text-[#17264E] text-lg mb-4">What we did</h3>
            <ul className="space-y-4 mb-6">
              {cs.whatWeDid.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold font-body"
                    style={{ backgroundColor: "#FFBE16", color: "#091738" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{item}</p>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-lg" style={{ backgroundColor: "#F3F5F7" }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">Engagement</div>
                  <div className="text-sm font-semibold text-[#17264E] font-body">{cs.engagement}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">Duration</div>
                  <div className="text-sm font-semibold text-[#17264E] font-body">{cs.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">Scope</div>
                  <div className="text-sm font-semibold text-[#17264E] font-body">{cs.teamSize}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function CaseStudies() {
  useScrollReveal();

  return (
    <Layout>
      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-16 section-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="section-label" style={{ color: "#FFBE16" }}>Case Studies</span>
            </div>
            <h1
              className="font-display text-white mb-5 animate-on-scroll"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              Results from real engagements.
            </h1>
            <p className="text-white/60 text-xl font-body animate-on-scroll leading-relaxed">
              These are anonymised accounts of actual Fetch engagements. The numbers are real. The situations are real. Names and identifying details have been changed.
            </p>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section className="py-20 bg-white">
        <div className="container">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </section>

      {/* ── WHAT THEY HAVE IN COMMON ── */}
      <section className="py-20 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4 animate-on-scroll text-center">The pattern</div>
            <h2
              className="font-display text-[#17264E] mb-10 animate-on-scroll text-center"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}
            >
              The same three things show up in every engagement.
            </h2>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "The problem was never the AI tool",
                  body: "In every case, the client already had access to AI tools. ChatGPT was free. Copilot was built into their Office subscription. The problem was that nobody had redesigned the workflows those tools were supposed to improve. We always start with workflow mapping, not tool deployment.",
                },
                {
                  num: "02",
                  title: "The first failure point is always adoption",
                  body: "Every client who had previously attempted an AI implementation had failed at adoption. The tool was deployed, the team was given a login, and within weeks they'd reverted to their manual processes. We treat adoption as the primary deliverable, not an afterthought.",
                },
                {
                  num: "03",
                  title: "The ROI is measurable within 60 days",
                  body: "In every engagement, we establish a baseline measurement before we start and track time savings weekly post-deployment. The ROI is never theoretical — it's measured in hours recovered and costs eliminated.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="fetch-card animate-on-scroll flex gap-6">
                  <div
                    className="font-display font-bold text-4xl flex-shrink-0"
                    style={{ color: "rgba(255,190,22,0.3)", lineHeight: 1 }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#17264E] text-xl mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-body">{body}</p>
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
          <div className="max-w-xl mx-auto">
            <h2
              className="font-display text-white mb-4 animate-on-scroll"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              Want to see what this looks like for your business?
            </h2>
            <p className="text-white/55 mb-8 animate-on-scroll font-body">
              Book a 45-minute strategy call. We'll assess your workflows and tell you honestly what a Fetch engagement would look like.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/ai-adoption-sprint">
                <span className="btn-navy-outline px-8 py-4">
                  See the 30-Day Sprint
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
