import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Target, Zap, Users, BarChart3, Shield, Globe } from "lucide-react";

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

const pillars = [
  { icon: Globe, title: "Vietnam business understanding", desc: "We know how Vietnamese enterprises operate — the operational complexity, the workforce dynamics, the regulatory environment, and the pace of decision-making. Our engagements are designed for this context, not adapted from overseas playbooks." },
  { icon: Zap, title: "Execution-oriented, not theoretical", desc: "Every Fetch engagement ends with deployed AI workflows and trained teams — not strategy documents. We measure success by operational results, not deliverable volume." },
  { icon: Target, title: "Workflow-first approach", desc: "We redesign workflows before we deploy AI. This means the tools we implement fit your actual operations, not a generic process template. The result is AI that gets used, not AI that sits idle." },
  { icon: Users, title: "Team upskilling built in", desc: "AI adoption fails when teams aren't trained. Every Fetch engagement includes a structured upskilling programme. Your team doesn't just get new tools — they get the confidence and capability to use them." },
  { icon: BarChart3, title: "Measurable outcomes", desc: "We agree on success metrics before the engagement starts and measure against them throughout. You get a clear ROI summary at the end of every engagement, not vague claims about transformation." },
  { icon: Shield, title: "Lower risk than going alone", desc: "Random AI experimentation is expensive and slow. Fetch provides a structured, proven approach that reduces the risk of failed implementations and accelerates the path to measurable results." },
];

export default function WhyFetch() {
  useScrollReveal();
  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6"><div className="w-8 h-px bg-[#FFBE16]" /><span className="section-label" style={{ color: "#FFBE16" }}>Why Fetch</span></div>
            <h1 className="font-display text-white mb-6 animate-on-scroll" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05 }}>Most AI projects fail because nobody stays to make them work.</h1>
            <p className="text-white/60 text-xl leading-relaxed font-body max-w-2xl animate-on-scroll">Fetch is not a software vendor. Not a management consultancy. We are an embedded execution team — we map your workflows, deploy AI, train your people, and measure the results. We don't leave until it's working.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 animate-on-scroll">Our Differentiation</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>Six things that make the difference in practice</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="fetch-card animate-on-scroll">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#FFBE16" }}><Icon className="w-6 h-6 text-[#091738]" /></div>
                <h3 className="font-display font-bold text-[#17264E] text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 section-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 animate-on-scroll">The honest position</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>We'll tell you if we're not the right fit.</h2>
              <div className="space-y-4 animate-on-scroll">
                <p className="text-gray-600 leading-relaxed font-body">Fetch works best with businesses that have real operational workflows to redesign, leadership committed to AI adoption, and teams willing to engage with the change process. That's a specific kind of client.</p>
                <p className="text-gray-600 leading-relaxed font-body">If you want a vendor to install a tool and leave, or a consultant to write a strategy and disappear, we're not the right partner. We'll tell you that in the first call. If you want an execution team that stays until the AI is working, we are.</p>
                <div className="mt-6 p-5 rounded-xl border-l-4 animate-on-scroll" style={{ borderColor: "#FFBE16", backgroundColor: "#F9FAFB" }}>
                  <p className="text-gray-700 text-sm italic font-body leading-relaxed">"What I appreciated was that they pushed back when we wanted to automate the wrong things. They redesigned the process first. That's the reason it worked."</p>
                  <div className="flex items-center gap-3 mt-4">
                    <img src="/images/img-f1s7v8.jpg" alt="Marcus Tan" className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-[#17264E] font-body">Marcus Tan, Head of Operations</div>
                      <div className="text-xs text-gray-400 font-body">Regional financial services firm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "#091738" }}>
                <div className="section-label mb-6" style={{ color: "#FFBE16" }}>Fetch is right for you if...</div>
                <div className="space-y-3">
                  {["You have operational workflows that are manual, slow, or error-prone", "You want AI deployed and working, not just recommended", "You're willing to commit internal team time to the engagement", "You want your team trained and capable, not dependent on external support", "You want measurable ROI, not vague transformation claims"].map((item) => (
                    <div key={item} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#FFBE16] flex-shrink-0 mt-0.5" /><span className="text-white/70 text-sm font-body">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#FFBE16]">
        <div className="container text-center">
          <h2 className="font-display text-[#091738] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>Ready to work with an execution partner?</h2>
          <p className="text-[#091738]/70 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">Book a strategy call. We'll assess your situation honestly and tell you whether Fetch is the right fit.</p>
          <Link href="/contact"><span className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-base bg-[#091738] text-white hover:bg-[#17264E] transition-colors animate-on-scroll">Book a Strategy Call<ArrowRight className="w-5 h-5" /></span></Link>
        </div>
      </section>
    </Layout>
  );
}
