import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

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

const industries = [
  { emoji: "🚚", name: "Logistics", tagline: "From manual dispatch to AI-assisted operations", painPoints: ["Manual dispatch and route planning consuming hours daily", "Exception handling done through WhatsApp and spreadsheets", "Reporting built manually from multiple disconnected systems"], howAIHelps: ["AI-assisted dispatch and route optimisation", "Automated exception detection and escalation", "Real-time reporting dashboards replacing manual builds"], podApproach: "An Operations AI Pod maps your dispatch and reporting workflows, identifies the highest-impact automation opportunities, and deploys AI tools that integrate with your existing systems.", outcomes: ["40-60% reduction in manual dispatch time", "Real-time operational visibility", "Faster exception resolution"] },
  { emoji: "💬", name: "Customer Operations", tagline: "Faster responses, less manual handling", painPoints: ["High volume of repetitive customer enquiries handled manually", "Slow first-response times due to manual ticket triage", "Knowledge scattered across documents and email"], howAIHelps: ["AI-assisted response drafting for common enquiry types", "Automated ticket categorisation and routing", "Centralised AI knowledge base for instant agent retrieval"], podApproach: "A Customer Service AI Pod analyses your enquiry patterns, redesigns your response workflows, and deploys AI tools that reduce manual handling while keeping your team in control.", outcomes: ["50% reduction in first-response time", "30% reduction in manual handling per ticket", "Higher agent satisfaction"] },
  { emoji: "⚖️", name: "Professional Services", tagline: "Less admin, more billable work", painPoints: ["Significant non-billable time on document drafting and admin", "Proposal and report creation taking days instead of hours", "Knowledge management fragmented across email and shared drives"], howAIHelps: ["AI-assisted document drafting, summarisation, and review", "Automated proposal and report generation from templates", "AI-powered knowledge retrieval across firm documents"], podApproach: "A Back Office Productivity Pod maps your highest-cost admin workflows, identifies where AI can reduce non-billable time, and deploys tools that let your team focus on client work.", outcomes: ["25-35% reduction in non-billable admin time", "Faster proposal and report turnaround", "Senior staff freed for higher-value work"] },
  { emoji: "🏥", name: "Healthcare Administration", tagline: "Streamlined admin so clinical teams can focus on care", painPoints: ["Appointment scheduling consuming admin staff time", "Clinical documentation requiring manual transcription", "Claims processing and insurance coordination done manually"], howAIHelps: ["Automated appointment scheduling and reminder workflows", "AI-assisted clinical documentation and note summarisation", "Automated claims preparation and status tracking"], podApproach: "A specialised healthcare admin pod maps your administrative workflows with full attention to compliance requirements, then deploys AI tools that reduce admin burden without compromising data governance.", outcomes: ["Reduced admin burden on clinical staff", "Faster claims processing", "Improved appointment adherence"] },
  { emoji: "📊", name: "Finance & Back Office", tagline: "Automate the repetitive, focus on the analytical", painPoints: ["Invoice processing and reconciliation done manually", "Financial reporting built from scratch each period", "Approval workflows managed through email chains"], howAIHelps: ["Automated invoice capture, matching, and processing", "AI-assisted reconciliation and exception flagging", "Automated report generation from connected data sources"], podApproach: "A Back Office Productivity Pod focuses on your highest-volume finance workflows and deploys AI tools that reduce manual effort and error rates.", outcomes: ["60-70% reduction in manual invoice processing time", "Faster month-end close", "Fewer data entry errors"] },
  { emoji: "🏭", name: "Distribution & Multi-site", tagline: "Coordination and visibility across complex operations", painPoints: ["Inventory management across multiple locations done manually", "Cross-site coordination relying on phone calls and spreadsheets", "Performance reporting aggregated manually from site-level data"], howAIHelps: ["AI-assisted inventory monitoring and reorder triggering", "Automated cross-site coordination and status workflows", "Automated performance reporting across all sites"], podApproach: "An Operations AI Pod maps your multi-site coordination workflows and deploys AI tools that give you visibility and coordination capability without adding headcount.", outcomes: ["Reduced inventory errors and stockouts", "Faster cross-site coordination", "Real-time performance visibility across all sites"] },
];

export default function Industries() {
  useScrollReveal();
  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6"><div className="w-8 h-px bg-[#FFBE16]" /><span className="section-label" style={{ color: "#FFBE16" }}>Industries</span></div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>Built for operationally complex businesses</h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">Fetch works with Singapore enterprises across six industries where operational complexity makes AI adoption both challenging and high-value.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-20">
            {industries.map(({ emoji, name, tagline, painPoints, howAIHelps, podApproach, outcomes }) => (
              <div key={name} className="animate-on-scroll">
                <div className="flex items-center gap-4 mb-8"><div className="text-4xl">{emoji}</div><div><h2 className="font-display font-bold text-[#17264E]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{name}</h2><p className="text-gray-500 font-body">{tagline}</p></div></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#F3F5F7" }}><div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-body">Pain Points</div><div className="space-y-2">{painPoints.map((p) => (<div key={p} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" /><span className="text-gray-600 text-xs font-body">{p}</span></div>))}</div></div>
                  <div className="p-5 rounded-xl border border-[#E8EDF5]"><div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-body">How AI Helps</div><div className="space-y-2">{howAIHelps.map((h) => (<div key={h} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0 mt-1.5" /><span className="text-gray-600 text-xs font-body">{h}</span></div>))}</div></div>
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#17264E" }}><div className="text-xs font-bold uppercase tracking-widest mb-3 font-body" style={{ color: "#FFBE16" }}>Fetch Approach</div><p className="text-white/70 text-xs leading-relaxed font-body">{podApproach}</p></div>
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#091738" }}><div className="text-xs font-bold uppercase tracking-widest mb-3 font-body" style={{ color: "#FFBE16" }}>Outcomes</div><div className="space-y-2">{outcomes.map((o) => (<div key={o} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FFBE16] flex-shrink-0 mt-1.5" /><span className="text-white/70 text-xs font-body">{o}</span></div>))}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#FFBE16]">
        <div className="container text-center">
          <h2 className="font-display text-[#091738] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>Don't see your industry?</h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">Fetch works with any operationally complex Singapore business. Book a strategy call to discuss your specific situation.</p>
          <Link href="/contact"><span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors animate-on-scroll">Book a Strategy Call<ArrowRight className="w-5 h-5" /></span></Link>
        </div>
      </section>
    </Layout>
  );
}
