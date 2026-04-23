/* =============================================================
   FETCH TECHNOLOGY — Solutions Page
   Design: Kinetic Authority
   ============================================================= */

import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Workflow, Brain, Users, BarChart3, Shield, CheckCircle2 } from "lucide-react";

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

const solutions = [
  {
    icon: Zap,
    tag: "Most Popular",
    title: "AI Adoption Sprint",
    tagline: "30 days from ambition to deployed AI workflows.",
    problem: "You know AI matters but don't know where to start — or you've been exploring it for months without concrete progress.",
    whatWeDo: "We embed a transformation pod for 30 days. We map your workflows, identify AI opportunities, deploy 1–2 redesigned processes, train your team, and deliver a complete adoption roadmap.",
    whoFor: "Vietnamese SMEs and mid-market businesses that want to prove AI value quickly before committing to a larger engagement.",
    outcomes: ["1–2 deployed AI workflows", "Team trained and confident", "AI opportunity matrix across all operations", "6–12 month adoption roadmap", "ROI impact summary"],
    deliverables: ["Workflow assessment report", "AI opportunity matrix", "Deployed AI workflows", "Training programme (3–4 sessions)", "AI adoption roadmap", "ROI impact summary"],
    href: "/ai-adoption-sprint",
  },
  {
    icon: Workflow,
    tag: null,
    title: "Workflow Redesign",
    tagline: "Map and redesign your operations before you automate the wrong things.",
    problem: "Most AI failures happen because businesses automate broken workflows. The result is faster bad processes, not better operations.",
    whatWeDo: "We conduct a structured workflow mapping exercise across your target business units, identify bottlenecks and AI opportunities, and redesign the workflows for AI integration before any tools are deployed.",
    whoFor: "Businesses that want to understand their operations deeply before investing in AI tooling.",
    outcomes: ["Clear workflow documentation", "Bottleneck and inefficiency identification", "AI-ready process designs", "Prioritised implementation roadmap"],
    deliverables: ["Current-state workflow maps", "Future-state process designs", "AI opportunity assessment", "Implementation priority matrix"],
    href: "/contact",
  },
  {
    icon: Brain,
    tag: null,
    title: "AI Implementation Support",
    tagline: "Deploy AI tools that integrate with your systems and that your team will actually use.",
    problem: "Buying AI software is easy. Getting it to work inside your specific operations — with your data, your systems, and your team — is where most implementations fail.",
    whatWeDo: "We take responsibility for the full implementation: tool selection, configuration, integration with existing systems, and go-live support. We don't hand over a manual and leave.",
    whoFor: "Businesses that have identified AI opportunities but need expert support to deploy and integrate tools properly.",
    outcomes: ["AI tools deployed and integrated", "Workflows operational within agreed timeline", "Team onboarded and using the tools", "Ongoing support during stabilisation"],
    deliverables: ["Tool selection recommendation", "Configuration and integration", "Go-live support", "Stabilisation period (2–4 weeks)", "Handover documentation"],
    href: "/contact",
  },
  {
    icon: Users,
    tag: null,
    title: "Team Upskilling & Enablement",
    tagline: "Build AI capability that stays in your organisation long after we leave.",
    problem: "AI adoption fails when teams don't understand or trust the tools. Without structured upskilling, adoption stalls regardless of how good the technology is.",
    whatWeDo: "We design and deliver a structured AI upskilling programme tailored to your team's roles and the specific tools being deployed. Training is practical, not theoretical — your team learns by doing.",
    whoFor: "Businesses deploying AI tools who need their teams to adopt and use them confidently.",
    outcomes: ["Team confident using AI tools", "Adoption rate above 85% at 60 days", "Internal champions identified and developed", "Sustainable AI capability built"],
    deliverables: ["Role-specific training curriculum", "Practical training sessions (3–6 sessions)", "Team AI readiness assessment", "Post-training support (4 weeks)", "Internal champion programme"],
    href: "/contact",
  },
  {
    icon: BarChart3,
    tag: null,
    title: "Department-Specific AI Rollout",
    tagline: "Targeted AI deployment for one business unit — prove value before scaling.",
    problem: "Organisation-wide AI transformation is complex and expensive. Many businesses need to prove value in one department before committing to a broader rollout.",
    whatWeDo: "We focus entirely on one department or business unit — operations, customer service, finance, HR — and deliver a complete AI transformation for that unit. The result becomes the proof of concept for the rest of the organisation.",
    whoFor: "Mid-market and enterprise businesses that want to pilot AI in one area before scaling.",
    outcomes: ["One department fully AI-transformed", "Clear ROI demonstrated", "Replicable model for other departments", "Internal playbook for future rollouts"],
    deliverables: ["Department workflow assessment", "AI tool deployment", "Team training", "ROI measurement", "Replication playbook"],
    href: "/contact",
  },
  {
    icon: Shield,
    tag: null,
    title: "Managed AI Transformation",
    tagline: "An embedded partner for sustained, organisation-wide AI transformation.",
    problem: "Large-scale AI adoption requires sustained effort over months. Most businesses don't have the internal capacity to drive this while running their operations.",
    whatWeDo: "We act as your embedded AI transformation partner — providing ongoing pod support, managing the transformation programme, and ensuring adoption and results are sustained over time.",
    whoFor: "Enterprise businesses committed to organisation-wide AI transformation over 6–18 months.",
    outcomes: ["Organisation-wide AI adoption", "Sustained transformation programme", "Internal AI capability built", "Measurable ROI across all departments"],
    deliverables: ["Transformation programme management", "Ongoing pod support", "Quarterly progress reviews", "Organisation-wide adoption tracking", "Executive reporting"],
    href: "/contact",
  },
];

export default function Solutions() {
  useScrollReveal();

  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#FFBE16]" />
              <span className="section-label" style={{ color: "#FFBE16" }}>Solutions</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Practical AI transformation, packaged for execution
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              Every Fetch engagement is outcome-driven. We don't deliver strategy decks — we deliver deployed AI workflows, trained teams, and measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-16">
            {solutions.map(({ icon: Icon, tag, title, tagline, problem, whatWeDo, whoFor, outcomes, deliverables, href }, i) => (
              <div key={title} className="grid lg:grid-cols-2 gap-12 items-start animate-on-scroll">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FFBE16" }}>
                      <Icon className="w-5 h-5 text-[#091738]" />
                    </div>
                    {tag && (
                      <span className="px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-widest font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>
                        {tag}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display font-bold text-[#17264E] mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{title}</h2>
                  <p className="font-semibold text-sm mb-6 font-body" style={{ color: "#FFBE16" }}>{tagline}</p>
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">The Problem</div>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">{problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">What We Do</div>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">{whatWeDo}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 font-body">Who It's For</div>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">{whoFor}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href={href}>
                      <span className="btn-navy text-sm px-6 py-3">
                        {title === "AI Adoption Sprint" ? "Learn About the Sprint" : "Enquire About This Solution"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: "#F3F5F7" }}>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-body">Outcomes</div>
                    <div className="space-y-2.5">
                      {outcomes.map((o) => (
                        <div key={o} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#FFBE16] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-body">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-[#E8EDF5]">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-body">Deliverables</div>
                    <div className="space-y-2">
                      {deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0" />
                          <span className="text-gray-600 text-sm font-body">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFBE16]">
        <div className="container text-center">
          <h2 className="font-display text-[#091738] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            Not sure which solution is right for you?
          </h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            Book a 45-minute strategy call. We'll assess your situation and recommend the right starting point.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors animate-on-scroll">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
