/* =============================================================
   FETCH TECHNOLOGY — About Page
   Design: Kinetic Authority
   Copy: Direct, honest, no consultant-speak
   ============================================================= */
import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

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

const team = [
  {
    name: "Adrian Lim",
    title: "Founder & CEO",
    bio: "Founded Fetch after spending over a decade working inside Singapore enterprises and watching the same AI failure pattern repeat itself — good strategy, broken execution. Built Fetch to be the execution partner he never had: embedded, accountable, and measured on outcomes.",
    photo: "/images/adrian-lim-ceo.jpeg",
  },
  {
    name: "Tung Tran",
    title: "Chief Delivery Officer",
    bio: "One of Fetch's earliest hires and the backbone of every client engagement. Over 8 years at Fetch, Tung has led delivery across more than 60 transformation projects spanning logistics, professional services, and financial services. He built the pod model from the ground up and personally oversees every sprint to ensure the work lands — not just gets deployed.",
    photo: "/images/tung-tran-headshot.jpeg",
  },
  {
    name: "Luck",
    title: "Chief Transformation Officer",
    bio: "Drives Fetch's transformation methodology and client strategy. With a background spanning enterprise technology, distributed team building, and operational change, Luck bridges the gap between what AI can do and what businesses actually need. He works directly with leadership teams to align transformation programmes with business outcomes — not just technology deliverables.",
    photo: "/images/img-lk7r2m.png",
  },
  {
    name: "Hillary",
    title: "Project Manager",
    bio: "Keeps every Fetch engagement on track, on scope, and on time. Hillary manages the operational rhythm of client sprints — stakeholder coordination, milestone tracking, risk escalation, and delivery reporting. Her background in cross-functional project delivery means nothing falls through the cracks between strategy and execution.",
    photo: "/images/img-hl3p9q.png",
  },
  {
    name: "Mia",
    title: "Project Manager",
    bio: "Manages the day-to-day delivery of Fetch client engagements with precision and care. Mia coordinates across client stakeholders, tracks sprint milestones, and ensures every moving part of a transformation programme stays aligned. Her calm, structured approach keeps projects on course even when the unexpected happens.",
    photo: "/images/mia-headshot.jpg",
  },
  {
    name: "Curtis",
    title: "Lead AI Implementation",
    bio: "Specialises in the hands-on deployment of AI tools into live enterprise environments. From API integrations to prompt engineering and staff training, Curtis is the person who makes the AI actually work inside your systems — not just in a demo.",
    photo: "/images/curtis-professional.png",
  },
];

export default function About() {
  useScrollReveal();

  return (
    <Layout>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 section-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="section-label" style={{ color: "#FFBE16" }}>About Fetch</span>
            </div>
            <h1
              className="font-display text-white mb-5 animate-on-scroll"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              We do the work that makes AI actually stick.
            </h1>
            <p className="text-white/60 text-xl font-body animate-on-scroll leading-relaxed">
              Fetch Technology is a Singapore-based AI transformation execution firm. We embed inside your operations, redesign your workflows, deploy AI, and train your team — until the change is permanent.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4 animate-on-scroll">Our Story</div>
              <h2
                className="font-display text-[#17264E] mb-6 animate-on-scroll"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}
              >
                We saw the same failure repeat itself too many times.
              </h2>
              <div className="space-y-5 animate-on-scroll">
                <p className="text-gray-600 leading-relaxed font-body">
                  Fetch Technology has spent years working inside Singapore enterprises — understanding how they operate, where their friction points are, and what makes operational change succeed or fail.
                </p>
                <p className="text-gray-600 leading-relaxed font-body">
                  When AI tools became practical, we watched the same pattern play out across dozens of businesses: a consultant delivers a strategy deck, a vendor sells a licence, the team gets a login and a manual, and within three months the tool is abandoned. The AI was fine. The execution was broken.
                </p>
                <p className="text-gray-600 leading-relaxed font-body">
                  We built the transformation pod model to fix that. An embedded team that maps your workflows, redesigns them for AI, deploys the tools, trains the people, and measures the results. We don't leave until the AI is working.
                </p>
                <p className="text-gray-600 leading-relaxed font-body font-semibold" style={{ color: "#17264E" }}>
                  That's the only way this works. And it's the only thing we do.
                </p>
              </div>
            </div>
            <div className="space-y-5 animate-on-scroll">
              <div className="rounded-2xl overflow-hidden" style={{ border: "3px solid #FFBE16", boxShadow: "0 20px 60px rgba(9,23,56,0.18)", background: "#091738", padding: "6px" }}>
                <img
                  src="/images/fetch-team-beach.jpg"
                  alt="The Fetch team at our annual team retreat"
                  className="w-full rounded-xl"
                  style={{ display: "block" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="p-6 rounded-xl" style={{ backgroundColor: "#091738" }}>
                  <div className="section-label mb-3" style={{ color: "#FFBE16" }}>Our Focus</div>
                  <p className="text-white/75 text-sm leading-relaxed font-body">
                    AI adoption that is practical, measurable, and embedded in how your team actually works — not just deployed and forgotten.
                  </p>
                </div>
                <div className="p-6 rounded-xl" style={{ backgroundColor: "#17264E" }}>
                  <div className="section-label mb-3" style={{ color: "#FFBE16" }}>Our Market</div>
                  <p className="text-white/75 text-sm leading-relaxed font-body">
                    Singapore enterprises with 30–500 staff, operationally complex, and serious about AI adoption — not just experimenting with it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="section-label mb-4 animate-on-scroll">The Team</div>
            <h2
              className="font-display text-[#17264E] mb-4 animate-on-scroll"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
            >
              People who've done this before.
            </h2>
            <p className="text-gray-500 animate-on-scroll font-body">
              Every Fetch team member has worked inside Singapore enterprises, not just advised them. That operational background is what makes the difference.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map(({ name, title, bio, photo }) => (
              <div key={name} className="animate-on-scroll text-center">
                <div className="relative inline-block mb-5">
                  <img
                    src={photo}
                    alt={name}
                    className="w-28 h-28 rounded-2xl object-cover mx-auto"
                    style={{ boxShadow: "0 12px 40px rgba(9,23,56,0.15)" }}
                  />
                  <div
                    className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full"
                    style={{ backgroundColor: "#FFBE16" }}
                  />
                </div>
                <h3 className="font-display font-bold text-[#17264E] text-xl mb-1">{name}</h3>
                <div className="text-sm font-semibold font-body mb-3" style={{ color: "#FFBE16" }}>{title}</div>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOW ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4 animate-on-scroll text-center">Why now</div>
            <h2
              className="font-display text-[#17264E] mb-10 animate-on-scroll text-center"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}
            >
              The timing isn't a coincidence.
            </h2>
            <div className="space-y-5">
              {[
                {
                  num: "01",
                  title: "AI is now practical, not experimental",
                  body: "The tools that were experimental two years ago are now reliable, affordable, and deployable inside real business operations. The barrier is no longer the technology — it's the execution. That's exactly where Fetch operates.",
                },
                {
                  num: "02",
                  title: "Singapore enterprises are ready but stuck",
                  body: "Singapore businesses have the operational complexity, the digital infrastructure, and the leadership intent to adopt AI. What they lack is an execution partner who will stay until the AI is embedded — not just deployed.",
                },
                {
                  num: "03",
                  title: "The execution gap is the only gap that matters",
                  body: "The gap between AI ambition and AI adoption is not a strategy gap. It's an execution gap. Fetch is built specifically to close that gap — not with advice, but with embedded execution and measurable outcomes.",
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
          <h2
            className="font-display text-white mb-4 animate-on-scroll"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}
          >
            Ready to work with us?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto animate-on-scroll font-body">
            Start with a strategy call. We'll assess your situation and tell you honestly whether Fetch is the right fit.
          </p>
          <Link href="/contact">
            <span className="btn-amber px-8 py-4 text-base animate-on-scroll">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
