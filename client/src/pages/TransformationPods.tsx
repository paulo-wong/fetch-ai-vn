/* =============================================================
   FETCH TECHNOLOGY — Transformation Pods Page
   Design: Kinetic Authority
   ============================================================= */

import { useEffect } from "react";
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

const podRoles = [
  { title: "AI Workflow Strategist", desc: "Leads the engagement. Maps workflows, identifies AI opportunities, and designs the transformation approach." },
  { title: "Business Process Analyst", desc: "Documents current-state processes, interviews stakeholders, and builds the workflow maps and redesign specifications." },
  { title: "Implementation Specialist", desc: "Configures and deploys AI tools, manages integrations, and ensures technical go-live." },
  { title: "Training & Change Lead", desc: "Designs and delivers the team upskilling programme and manages change adoption throughout the engagement." },
  { title: "Specialist Support (Optional)", desc: "Domain experts added for specific needs — industry specialists, data engineers, or sector-specific AI tool experts." },
];

const podTypes = [
  {
    name: "Operations AI Pod",
    icon: Zap,
    focus: "Logistics, dispatch, inventory, reporting, and operational workflows",
    roles: ["AI Workflow Strategist", "Process Analyst", "Implementation Specialist", "Training Lead"],
    duration: "4–8 weeks",
    bestFor: "Logistics, distribution, manufacturing, and multi-site operations",
  },
  {
    name: "Customer Service AI Pod",
    icon: Users,
    focus: "Response automation, ticket routing, knowledge retrieval, and customer-facing workflows",
    roles: ["AI Workflow Strategist", "Process Analyst", "Implementation Specialist", "Training Lead"],
    duration: "4–6 weeks",
    bestFor: "Customer operations, service businesses, and support-heavy teams",
  },
  {
    name: "Back Office Productivity Pod",
    icon: BarChart3,
    focus: "Document processing, admin automation, reporting, and internal workflow efficiency",
    roles: ["AI Workflow Strategist", "Process Analyst", "Implementation Specialist"],
    duration: "3–6 weeks",
    bestFor: "Finance, HR, professional services, and admin-heavy operations",
  },
  {
    name: "Leadership AI Enablement Pod",
    icon: Target,
    focus: "Executive AI literacy, strategic AI adoption planning, and leadership team upskilling",
    roles: ["AI Workflow Strategist", "Training & Change Lead"],
    duration: "2–4 weeks",
    bestFor: "Leadership teams preparing for organisation-wide AI adoption",
  },
];

const comparisons = [
  { aspect: "Approach", pod: "Embedded execution inside your operations", consulting: "External strategy and recommendations", staffing: "Headcount supply without transformation mandate" },
  { aspect: "Outcome", pod: "Deployed AI workflows and trained teams", consulting: "Strategy documents and roadmaps", staffing: "Additional capacity, no guaranteed outcomes" },
  { aspect: "Speed", pod: "Results in 30–60 days", consulting: "3–6 month strategy cycles", staffing: "Ramp-up time with no transformation timeline" },
  { aspect: "Team upskilling", pod: "Built into every engagement", consulting: "Rarely included", staffing: "Not included" },
  { aspect: "Risk", pod: "Low — outcome-driven with clear deliverables", consulting: "Medium — strategy without execution support", staffing: "High — no accountability for transformation results" },
  { aspect: "ROI measurement", pod: "Measured and reported", consulting: "Projected but rarely measured", staffing: "Not measured" },
];

export default function TransformationPods() {
  useScrollReveal();

  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#FFBE16]" />
              <span className="section-label" style={{ color: "#FFBE16" }}>Transformation Pods</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              The execution model that makes AI adoption work
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              A transformation pod is a compact, multi-role execution team that embeds directly into your business to deliver AI adoption — not advise on it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 animate-on-scroll">What Is a Pod</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
                Not consultants. Not contractors. An execution team.
              </h2>
              <div className="space-y-5 animate-on-scroll">
                <p className="text-gray-600 leading-relaxed font-body">
                  A Fetch transformation pod is a small, focused team assembled specifically for your engagement. Each pod includes the roles required to deliver your transformation — strategy, analysis, implementation, and change management.
                </p>
                <p className="text-gray-600 leading-relaxed font-body">
                  Pods work inside your operations, not from a distance. They interview your team, map your workflows, deploy tools in your environment, and train your people. When the engagement ends, the results stay.
                </p>
              </div>
              <div className="mt-8 space-y-3 animate-on-scroll">
                {[
                  "Assembled specifically for your engagement",
                  "Embedded inside your operations",
                  "Multi-role: strategy, analysis, implementation, training",
                  "Outcome-driven with clear deliverables",
                  "Engagements from 30 days to 18 months",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBE16] flex-shrink-0" />
                    <span className="text-gray-700 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "#091738" }}>
                <div className="section-label mb-6" style={{ color: "#FFBE16" }}>Standard Pod Composition</div>
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
            <div className="section-label mb-4 animate-on-scroll">Pod Types</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Example pod compositions for different business needs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {podTypes.map(({ name, icon: Icon, focus, roles, duration, bestFor }) => (
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
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">Pod Roles</div>
                    <div className="flex flex-wrap gap-1.5">
                      {roles.map((r) => (
                        <span key={r} className="px-2 py-0.5 rounded-sm text-xs font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>{r}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 font-body">Duration</div>
                      <div className="text-[#17264E] font-semibold text-sm font-body">{duration}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 font-body">Best For</div>
                      <div className="text-gray-600 text-sm font-body">{bestFor}</div>
                    </div>
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
            <div className="section-label mb-4 animate-on-scroll">Why Pods</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Pods vs consulting-only vs staffing-only
            </h2>
          </div>
          <div className="overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "2px solid #E8EDF5" }}>
                  <th className="text-left py-3 px-4 font-body text-gray-400 text-xs uppercase tracking-widest font-semibold">Aspect</th>
                  <th className="text-left py-3 px-4 font-body text-xs uppercase tracking-widest font-semibold" style={{ color: "#17264E" }}>Fetch Pod</th>
                  <th className="text-left py-3 px-4 font-body text-gray-400 text-xs uppercase tracking-widest font-semibold">Consulting Only</th>
                  <th className="text-left py-3 px-4 font-body text-gray-400 text-xs uppercase tracking-widest font-semibold">Staffing Only</th>
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
            Ready to deploy a transformation pod?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            Start with a strategy call. We'll recommend the right pod composition and engagement model for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Link href="/contact">
              <span className="btn-amber px-8 py-4 text-base">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/solutions">
              <span className="btn-navy-outline px-8 py-4 text-base">See All Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
