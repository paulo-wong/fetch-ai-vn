/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Home Page
   Design: Kinetic Authority × Vietnam
   Palette: Navy #17264E | Dark Navy #091738 | Amber #FFBE16 | Vietnam Red #DA251D
   Key hook: Government funds up to 70% of AI transformation costs
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2, Zap, Workflow, Brain, Users, BarChart3, Shield, TrendingUp, ChevronRight, DollarSign } from "lucide-react";

/* ── Scroll reveal ── */
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

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const solutions = [
  { icon: Zap, title: "30-Day AI Adoption Sprint", desc: "We embed for 30 days, map your workflows, deploy 1–2 AI-powered processes, train your team, and hand over a full adoption roadmap. Grant-eligible under the National AI Fund.", href: "/ai-adoption-sprint", tag: "Most popular" },
  { icon: Workflow, title: "Workflow Redesign", desc: "Before you automate anything, we document how your operations actually run — then redesign them for AI. Most businesses skip this step. That's why their AI fails.", href: "/solutions", tag: null },
  { icon: Brain, title: "AI Implementation", desc: "We handle tool selection, configuration, integration with your existing systems, and go-live. We don't hand over a manual and leave.", href: "/solutions", tag: null },
  { icon: Users, title: "Team Upskilling", desc: "Structured sessions that take your team from AI-sceptical to AI-confident. Includes role-specific playbooks they can use the next day.", href: "/solutions", tag: null },
  { icon: BarChart3, title: "Department Rollout", desc: "One business unit, fully transformed. We prove the model works before you scale it across the organisation.", href: "/solutions", tag: null },
  { icon: Shield, title: "Managed Transformation", desc: "An embedded partner for 6–12 months. We run the transformation programme so your leadership team doesn't have to.", href: "/solutions", tag: null },
];

const steps = [
  { num: "01", title: "Strategy call", desc: "45 minutes. We assess your workflows, identify the highest-impact AI opportunities, and tell you honestly whether we're the right fit — and which grants you qualify for." },
  { num: "02", title: "Workflow mapping", desc: "We spend the first week documenting how your operations actually work — not how you think they work. The gap is usually significant." },
  { num: "03", title: "Deploy and train", desc: "We configure and deploy AI tools into your real workflows, then run structured training sessions until your team is using them independently." },
  { num: "04", title: "Measure and hand over", desc: "We track adoption rates and time savings, produce an ROI summary, and hand over a roadmap for what to do next." },
];

const industries = [
  { name: "Manufacturing & Production", desc: "Quality control automation, production scheduling, supplier communication" },
  { name: "Logistics & Supply Chain", desc: "Route optimisation, freight documentation, warehouse management" },
  { name: "Professional Services", desc: "Proposal generation, billing, client reporting, research workflows" },
  { name: "Financial Services", desc: "Compliance documentation, client onboarding, reporting automation" },
  { name: "Retail & E-commerce", desc: "Inventory management, customer service, merchandising workflows" },
  { name: "Agriculture & Food", desc: "Crop monitoring, supply chain traceability, export documentation" },
];

const testimonials = [
  {
    quote: "We'd been talking about AI for 18 months. Fetch came in, mapped our operations in a week, and had two workflows running in production by week four. The team actually uses them.",
    name: "Nguyễn Minh Tuấn",
    title: "COO",
    company: "Mid-market logistics company, Hồ Chí Minh City",
  },
  {
    quote: "Our consultants were spending 40% of their time on admin. After the sprint, that's down to about 15%. The ROI calculation was straightforward — we saw payback in the first month.",
    name: "Trần Thị Lan",
    title: "Managing Director",
    company: "Professional services firm, Hà Nội",
  },
  {
    quote: "What I appreciated was that they pushed back when we wanted to automate the wrong things. They redesigned the process first. That's the reason it worked.",
    name: "Phạm Văn Đức",
    title: "Head of Operations",
    company: "Manufacturing company, Bình Dương",
  },
];

const grants = [
  {
    name: "National AI Development Fund",
    amount: "Up to 70% of project cost",
    total: "VND 30 trillion (~$1.18B)",
    body: "Ministry of Science & Technology",
    desc: "Vietnam's flagship AI investment fund. Covers AI deployment, workflow automation, and team training for qualifying enterprises.",
  },
  {
    name: "SME Digital Transformation Program",
    amount: "Free consulting + deployment support",
    total: "500,000 SMEs targeted by 2030",
    body: "Decision 433/QD-TTg",
    desc: "Free digital readiness assessments, AI consulting, and deployment assistance for small and medium enterprises.",
  },
  {
    name: "Technology Investment Tax Incentive",
    amount: "CIT reduction or exemption",
    total: "Decree 20/2026",
    body: "Ministry of Finance",
    desc: "Corporate income tax reduction or full exemption for SMEs investing in technology and AI innovation.",
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#091738" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/fetch-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(9,23,56,0.97) 0%, rgba(9,23,56,0.75) 55%, rgba(9,23,56,0.4) 100%)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none hidden xl:block" style={{ fontSize: "30rem", lineHeight: 1, color: "rgba(218,37,29,0.04)" }}>AI</div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Vietnam grant banner */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold font-body"
              style={{ backgroundColor: "rgba(218,37,29,0.15)", border: "1px solid rgba(218,37,29,0.35)", color: "#ff6b6b" }}
            >
              <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} />
              Chính phủ tài trợ đến 70% chi phí chuyển đổi AI của bạn
            </div>

            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="section-label" style={{ color: "#FFBE16" }}>Vietnam AI Transformation</span>
            </div>

            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.02em" }}
            >
              Your team should be doing less admin and more work that matters.
            </h1>

            <p className="text-white/65 text-xl leading-relaxed font-body mb-10 max-w-2xl">
              Fetch embeds a transformation pod into your business. We map your workflows, deploy AI that your team actually uses, and measure the results. Vietnam government grants cover up to 70% of the cost.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4 text-base">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/grants">
                <span className="btn-red px-8 py-4 text-base">
                  Check Grant Eligibility
                  <DollarSign className="w-5 h-5" />
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                "Vietnam-based execution team",
                "Results measured from day one",
                "Grant application support included",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#FFBE16" }} />
                  <span className="text-white/55 text-sm font-body">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, #091738)" }} />
      </section>

      {/* ── GRANTS BANNER ── */}
      <section style={{ backgroundColor: "#DA251D" }}>
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-white flex-shrink-0" />
              <p className="text-white font-semibold font-body text-sm md:text-base">
                <strong>Vietnam National AI Fund:</strong> VND 30 trillion available. Government covers up to 70% of qualifying AI projects.
              </p>
            </div>
            <Link href="/grants">
              <span
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded font-bold text-sm font-body transition-all cursor-pointer"
                style={{ backgroundColor: "white", color: "#DA251D" }}
              >
                See If You Qualify
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-14 section-navy">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 30, suffix: " days", label: "to first deployed AI workflow" },
              { value: 70, suffix: "%", label: "of costs covered by government grants" },
              { value: 82, suffix: "%", label: "of Vietnamese businesses haven't adopted AI yet" },
              { value: 94, suffix: "%", label: "team adoption rate at 60 days" },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="animate-on-scroll">
                <div className="font-display font-bold text-white mb-1" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="text-white/45 text-sm font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 animate-on-scroll">The Problem</div>
              <h2 className="font-display text-[#17264E] mb-6 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
                Most AI projects fail before they start.
              </h2>
              <div className="space-y-5 animate-on-scroll">
                <p className="text-gray-600 text-lg leading-relaxed font-body">
                  Vietnam's digital transformation funding is the most generous in Southeast Asia right now. But 82% of businesses still haven't adopted AI — not because the tools don't exist, but because nobody has redesigned the workflows those tools are supposed to improve.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-body">
                  Consultants deliver a roadmap and leave. Vendors deliver software and leave. Your team gets a login and a manual, and within three months the tool is abandoned.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-body font-semibold" style={{ color: "#17264E" }}>
                  Fetch stays until the AI is embedded in how your team actually works — and until you can measure the difference.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  border: "3px solid #FFBE16",
                  padding: "6px",
                  boxShadow: "0 24px 64px rgba(9,23,56,0.12)",
                  backgroundColor: "#FFBE16",
                }}
              >
                <img
                  src="/images/fetch-team-beach.jpg"
                  alt="The Fetch team at our annual team retreat"
                  className="w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVERNMENT GRANTS SECTION ── */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll" style={{ color: "#DA251D" }}>Vietnam Government Grants</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              The government is paying for your AI transformation.
            </h2>
            <p className="text-gray-500 text-lg font-body animate-on-scroll">
              Three active programs. Up to 70% of costs covered. Fetch helps you qualify, apply, and execute.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {grants.map((g) => (
              <div key={g.name} className="fetch-card animate-on-scroll">
                <div
                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 font-body"
                  style={{ backgroundColor: "#DA251D12", color: "#DA251D" }}
                >
                  {g.body}
                </div>
                <h3 className="font-display text-[#17264E] font-bold text-lg mb-2">{g.name}</h3>
                <div className="text-2xl font-bold font-display mb-1" style={{ color: "#DA251D" }}>{g.amount}</div>
                <div className="text-xs text-gray-400 font-body mb-3">{g.total}</div>
                <p className="text-gray-600 text-sm leading-relaxed font-body">{g.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/grants">
              <span className="btn-red px-8 py-4 text-base">
                Check Your Eligibility
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll">What We Do</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Six ways we transform your operations.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link href={s.href} key={s.title}>
                <div className="fetch-card group cursor-pointer relative">
                  {s.tag && (
                    <div
                      className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full font-body"
                      style={{ backgroundColor: "#FFBE16", color: "#091738" }}
                    >
                      {s.tag}
                    </div>
                  )}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#17264E0D" }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: "#17264E" }} />
                  </div>
                  <h3 className="font-display text-[#17264E] font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold font-body" style={{ color: "#17264E" }}>
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 section-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll" style={{ color: "#FFBE16" }}>How It Works</div>
            <h2 className="font-display text-white mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Four steps. Thirty days. Working AI.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="animate-on-scroll">
                <div className="font-display font-bold mb-3" style={{ fontSize: "3rem", color: "rgba(255,190,22,0.2)", lineHeight: 1 }}>{step.num}</div>
                <h3 className="font-display text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-4 animate-on-scroll">Industries</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
              We work across Vietnam's key sectors.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="fetch-card animate-on-scroll">
                <div className="vn-red-border-left">
                  <h3 className="font-display text-[#17264E] font-bold mb-1">{ind.name}</h3>
                  <p className="text-gray-500 text-sm font-body">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll">Client Results</div>
            <h2 className="font-display text-[#17264E] mb-4 animate-on-scroll" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              What clients say after 30 days.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="fetch-card animate-on-scroll flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#FFBE16" }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-body mb-6 flex-1 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-[#17264E] font-body text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs font-body">{t.title}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: "#091738" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold font-body" style={{ backgroundColor: "rgba(218,37,29,0.15)", border: "1px solid rgba(218,37,29,0.35)", color: "#ff6b6b" }}>
              <DollarSign className="w-4 h-4" style={{ color: "#DA251D" }} />
              Government grants available — limited intake per quarter
            </div>
            <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Ready to transform your operations?
            </h2>
            <p className="text-white/60 text-lg font-body mb-10 leading-relaxed">
              Book a 45-minute strategy call. We'll assess your workflows, identify the highest-impact AI opportunities, and tell you exactly which government grants you qualify for.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <span className="btn-amber px-8 py-4 text-base">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link href="/grants">
                <span className="btn-red px-8 py-4 text-base">
                  Check Grant Eligibility
                  <TrendingUp className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
