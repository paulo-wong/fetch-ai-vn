import { useEffect, useState } from "react";
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

const categories = ["All", "AI Adoption", "Workflow Redesign", "Team Upskilling", "Enterprise AI", "Operations", "Leadership"];

type Article = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  featured: boolean;
  body: string;
};

const articles: Article[] = [
  {
    category: "AI Adoption",
    title: "How Vietnamese SMEs should adopt AI without breaking operations",
    excerpt: "Most AI adoption advice is written for large enterprises with dedicated transformation teams. This guide is for Vietnamese SMEs that need to adopt AI while keeping the business running.",
    readTime: "8 min read",
    featured: true,
    body: `Most AI adoption advice assumes you have a dedicated transformation team, a six-figure implementation budget, and the luxury of running a pilot that doesn't affect day-to-day operations. Vietnamese SMEs rarely have any of those things.

**The core challenge for SMEs**

The challenge isn't access to AI tools — ChatGPT is free, Copilot is built into Office, and there are hundreds of AI-powered SaaS products targeting every business function. The challenge is that adopting AI while running a business requires you to change how work gets done without stopping the work.

**Start with one workflow, not a strategy**

The most common mistake SMEs make is trying to develop an "AI strategy" before they've deployed anything. Strategy is useful once you have evidence. Before that, it's speculation. Pick one workflow that is repetitive, time-consuming, and well-documented. Map how it currently works. Then redesign it with AI in the loop.

**The three-week rule**

If an AI tool isn't embedded in your team's daily workflow within three weeks of deployment, it won't be. The window for adoption is short. This means the tool needs to be configured for your specific context, your team needs structured training (not just a login), and someone needs to be accountable for adoption metrics.

**Measure from day one**

Before you deploy anything, agree on what you're measuring. Time saved per task. Error rate reduction. Volume handled without additional headcount. These numbers are what justify the next investment and what tell you whether the first one worked.`,
  },
  {
    category: "Workflow Redesign",
    title: "What an AI transformation pod actually does",
    excerpt: "The pod model is different from consulting and different from staffing. This article explains exactly how a transformation pod works inside a business and why the model produces better outcomes.",
    readTime: "6 min read",
    featured: true,
    body: `The transformation pod model sits between two things that don't work: strategy consulting (which produces recommendations but doesn't implement them) and software vendors (which implement tools but don't change how work gets done).

**What a pod is**

A transformation pod is a small, embedded team — typically two to four people — that works inside your business for a defined period. They're not there to advise. They're there to do: map workflows, configure tools, train teams, and measure outcomes.

**The four-week cycle**

Week one is workflow mapping. Not how you think your operations work — how they actually work. The gap between the two is almost always significant, and it's the reason most AI implementations fail. You can't automate a process you don't understand.

Week two and three are configuration and deployment. The pod selects and configures tools against the mapped workflow, integrates them with existing systems, and runs structured training sessions with the team that will use them.

Week four is measurement and handover. The pod tracks adoption rates and time savings, produces an ROI summary, and hands over a roadmap for what to do next.

**Why it works**

The pod model works because it combines the things that consulting and software vendors each do well, while eliminating the handover problem. There's no point at which the pod says "here's your strategy" or "here's your software" and leaves. They stay until the AI is working in your operations and your team is using it independently.`,
  },
  {
    category: "Workflow Redesign",
    title: "AI workflow redesign vs buying more software",
    excerpt: "Buying AI software without redesigning workflows is one of the most common and expensive mistakes in enterprise AI adoption. Here's why workflow redesign must come first.",
    readTime: "7 min read",
    featured: false,
    body: `There's a pattern that plays out repeatedly in enterprise AI adoption: a business identifies a pain point, buys an AI tool that promises to solve it, deploys the tool into the existing workflow, and gets poor results. Then they conclude that AI doesn't work for their business.

The problem isn't the tool. The problem is that the workflow was designed for humans doing manual work, and layering AI on top of a broken process produces a faster broken process.

**What workflow redesign actually means**

Workflow redesign means documenting how a process currently works — every step, every handoff, every decision point — and then asking: if we were designing this from scratch with AI capabilities available, how would we design it differently?

The answer is almost always different from "add AI to step four." It usually involves eliminating steps that only existed because humans needed them, restructuring handoffs to take advantage of AI's ability to process information in parallel, and redefining what human judgment is actually required for.

**The cost of skipping redesign**

Businesses that buy AI software without redesigning workflows typically see 10–20% efficiency gains. Businesses that redesign workflows before deploying AI typically see 40–60% efficiency gains. The difference is not the software. It's the process it's running on.

**How to start**

Pick one workflow. Document it completely — not from memory, but by watching it happen. Identify every step that exists only because of human limitations (manual data entry, sequential approval chains, periodic batch processing). Then redesign the workflow assuming those limitations don't exist. Then find the AI tools that enable the redesigned workflow.`,
  },
  {
    category: "Team Upskilling",
    title: "How to upskill teams while implementing AI",
    excerpt: "Team upskilling and AI implementation are often treated as separate workstreams. The businesses that get the best adoption results run them simultaneously. Here's how.",
    readTime: "9 min read",
    featured: false,
    body: `The standard approach to AI upskilling is to run training before deployment: get the team comfortable with AI concepts, then deploy the tools. This approach consistently underperforms because the training isn't connected to anything the team is actually doing.

**The simultaneous model**

The better approach is to run upskilling and implementation simultaneously. Train the team on the specific tools they're about to use, in the context of the specific workflows they're about to change, at the point when they need the knowledge to do their jobs.

This sounds obvious. It's surprisingly rare.

**Role-specific training**

Generic AI training — "here's what large language models are, here's how to write a prompt" — produces generic results. The training that drives adoption is role-specific: here's how you, in your role, will use this tool to do this specific task differently.

For a logistics coordinator, that means training on how to use AI to process freight documentation, not a general introduction to AI. For a finance analyst, it means training on how to use AI to automate reporting workflows, not a conceptual overview of machine learning.

**The 30-day adoption window**

Research on enterprise software adoption consistently shows that if a tool isn't embedded in daily workflow within 30 days of deployment, adoption rates drop sharply. This means upskilling needs to happen fast and needs to be practical. Four structured sessions over two weeks, each focused on a specific task the team does every day, consistently outperforms longer training programmes delivered before deployment.

**Measuring upskilling outcomes**

The metric for upskilling is not "did the team complete the training." It's "is the team using the tool independently 30 days after deployment." Track this. It's the only metric that matters.`,
  },
  {
    category: "Operations",
    title: "5 enterprise workflows that should be redesigned first",
    excerpt: "Not all workflows are equal AI opportunities. These five workflow types consistently deliver the highest ROI when redesigned for AI integration.",
    readTime: "10 min read",
    featured: false,
    body: `When a business starts an AI adoption programme, one of the first questions is: where do we start? The answer matters because early wins build momentum and justify further investment, while early failures create resistance that can set back the entire programme.

These five workflow types consistently deliver the highest ROI when redesigned for AI, based on implementations across Vietnamese enterprises in logistics, professional services, financial services, healthcare, and retail.

**1. Document processing and data extraction**

Any workflow that involves humans reading documents and extracting information — invoices, contracts, reports, forms — is a high-priority AI opportunity. The volume is typically high, the error rate is significant, and the time cost is substantial. AI can process these documents faster, more accurately, and at scale.

**2. Client and customer communication**

Workflows that involve drafting, reviewing, or routing communications — client emails, customer service responses, internal reports — are strong AI candidates. The combination of language models and workflow automation can handle the majority of routine communications while routing exceptions to humans.

**3. Reporting and analytics**

Workflows that involve pulling data from multiple sources, formatting it, and producing reports are almost entirely automatable with current AI tools. The time savings are typically significant — often 60–80% reduction in time spent on reporting — and the output quality is frequently higher than manual reporting.

**4. Scheduling and resource allocation**

Workflows that involve matching resources to demand — scheduling, route planning, inventory management — benefit significantly from AI's ability to optimise across multiple variables simultaneously. The ROI is typically measurable in days rather than weeks.

**5. Compliance and quality checking**

Workflows that involve checking work against rules, standards, or requirements — compliance review, quality assurance, contract review — are strong AI candidates because the rules are usually well-defined and the volume is high. AI can handle the routine checks while flagging exceptions for human review.`,
  },
  {
    category: "Enterprise AI",
    title: "Why most enterprise AI projects fail in the first 90 days",
    excerpt: "The failure rate for enterprise AI projects is high. This article analyses the most common failure modes and how to avoid them.",
    readTime: "8 min read",
    featured: false,
    body: `Enterprise AI projects have a high failure rate. Estimates vary, but most research puts the proportion of AI projects that fail to deliver expected value at 60–80%. Understanding why they fail is the first step to avoiding the same mistakes.

**Failure mode 1: Starting with technology, not problems**

The most common failure mode is selecting an AI tool before defining the problem it's supposed to solve. A business hears about a new AI capability, decides to implement it, and then looks for use cases. This produces implementations that are technically functional but operationally irrelevant.

**Failure mode 2: Underestimating the change management requirement**

AI adoption is not a technology project. It's an operational change programme that happens to involve technology. Businesses that treat it as an IT project — focused on deployment and integration — consistently underperform businesses that treat it as a change management programme focused on adoption and behaviour change.

**Failure mode 3: No clear ownership**

Successful AI implementations have a named individual who is accountable for adoption outcomes — not just deployment. This person tracks usage metrics, identifies adoption blockers, and has the authority to make changes to how the tool is configured or how training is delivered.

**Failure mode 4: Measuring the wrong things**

Businesses that measure AI success by deployment milestones ("we went live on schedule") rather than adoption outcomes ("X% of the team is using the tool for Y tasks daily") consistently report lower ROI. The deployment is not the outcome. The behaviour change is the outcome.

**Failure mode 5: No feedback loop**

AI tools need to be configured and refined based on how they're actually being used. Businesses that deploy and move on — without a structured process for collecting feedback and improving the configuration — see adoption rates decline over time as the tool fails to keep up with changing operational needs.`,
  },
  {
    category: "Leadership",
    title: "What Vietnamese business leaders need to understand about AI adoption",
    excerpt: "AI adoption is not a technology project. It's an operational change programme. This guide is for Vietnamese business leaders who need to lead AI adoption without becoming AI experts.",
    readTime: "7 min read",
    featured: false,
    body: `Business leaders in Vietnam are under significant pressure to adopt AI. The pressure comes from multiple directions: competitive pressure from businesses that are already using AI to reduce costs and improve service, talent pressure from employees who expect to work with modern tools, and investor pressure from shareholders who see AI as a value driver.

The challenge is that most business leaders are not AI experts and don't need to be. What they need to understand is how to lead an AI adoption programme effectively — which is a leadership and change management challenge, not a technology challenge.

**What you need to decide, not delegate**

There are three decisions that business leaders need to make personally, not delegate to IT or consultants. First: which workflows are the highest priority for AI adoption? This is a business strategy decision that requires understanding of where the business creates value and where operational friction is highest. Second: what does success look like, and how will you measure it? This is an accountability decision that sets the standard for the programme. Third: who is accountable for adoption outcomes? This is a people decision that determines whether the programme has the internal ownership it needs to succeed.

**What you can delegate**

Tool selection, technical implementation, and training delivery can all be delegated to people with the relevant expertise — internal teams, external partners, or a combination. What cannot be delegated is the business context that makes these decisions meaningful.

**The leadership behaviour that drives adoption**

The single most powerful driver of AI adoption is visible leadership engagement. When business leaders use the tools themselves, ask about adoption metrics in operational reviews, and celebrate adoption milestones, adoption rates are significantly higher than in businesses where AI is treated as an IT project that leadership monitors from a distance.`,
  },
  {
    category: "AI Adoption",
    title: "The AI readiness checklist for Vietnamese enterprises",
    excerpt: "Before you start an AI adoption programme, there are six things you need to have in place. This checklist helps you assess your readiness and identify the gaps.",
    readTime: "5 min read",
    featured: false,
    body: `Starting an AI adoption programme without assessing your readiness is one of the most common reasons programmes fail. This checklist covers the six areas that consistently determine whether an AI adoption programme succeeds or fails.

**1. Workflow documentation**

Do you have documented, current descriptions of the workflows you want to improve with AI? Not high-level process maps — detailed workflow documentation that captures every step, every handoff, and every decision point. If not, this is the first thing to fix. You cannot redesign a workflow you haven't documented.

**2. Data quality and accessibility**

AI tools are only as good as the data they work with. Do you have clean, accessible data for the workflows you want to improve? Are the relevant data sources integrated, or are they siloed across multiple systems? Data quality issues are the most common technical blocker for AI adoption.

**3. Change management capacity**

Do you have the internal capacity to manage the change that AI adoption requires? This means someone who can own adoption outcomes, run training, collect feedback, and make adjustments. If this capacity doesn't exist internally, it needs to come from somewhere.

**4. Leadership alignment**

Are the relevant business leaders aligned on the priority workflows, the success metrics, and the investment required? Misalignment at the leadership level is a programme-killer. It's better to surface and resolve misalignment before starting than to discover it mid-programme.

**5. Team readiness**

How does your team currently feel about AI? Resistance is normal and manageable if it's acknowledged and addressed. Ignored resistance becomes the adoption blocker that derails programmes in their third or fourth week.

**6. Measurement infrastructure**

Do you have the ability to measure the outcomes you're targeting? Time savings, error rate reduction, volume handled — these need to be measurable before you start, so you can demonstrate ROI after you finish.`,
  },
  {
    category: "Operations",
    title: "Measuring AI ROI in operations: what to track and when",
    excerpt: "ROI measurement for AI adoption is often done wrong — too late, with the wrong metrics, or not at all. This guide explains how to measure AI ROI from day one.",
    readTime: "9 min read",
    featured: false,
    body: `ROI measurement for AI adoption is consistently done wrong. The most common mistakes are measuring too late (after the programme ends rather than throughout), measuring the wrong things (deployment milestones rather than adoption outcomes), and not measuring at all (relying on qualitative feedback instead of quantitative data).

**Establish baselines before you start**

The most important step in AI ROI measurement happens before deployment: establishing baselines. How long does the target workflow currently take? What is the current error rate? What volume can the current team handle? Without these baselines, you cannot demonstrate ROI — you can only claim it.

**What to measure during deployment**

During the deployment phase, track adoption metrics: what percentage of the team is using the tool, for which tasks, and how frequently. Low adoption during deployment is an early warning sign that the tool isn't configured correctly or the training isn't working. It's much easier to fix this during deployment than after.

**What to measure at 30 days**

At 30 days, measure the outcomes you established baselines for: time per task, error rate, volume handled. Calculate the ROI based on these numbers. A well-executed AI implementation should show 30–60% improvement in the target metrics within 30 days.

**What to measure at 90 days**

At 90 days, measure sustainability: are adoption rates holding, or are they declining? Are the efficiency gains from day 30 maintained, or has the team reverted to old habits? Declining metrics at 90 days indicate that the change management work wasn't sufficient and needs to be revisited.

**The ROI calculation**

The basic ROI calculation for operational AI is: (time saved per task × volume × cost per hour) − (implementation cost + ongoing tool cost). For most operational AI implementations, this calculation produces payback periods of one to three months. If your calculation produces a longer payback period, either the implementation cost is too high or the efficiency gains are too low — both of which are fixable.`,
  },
  {
    category: "Enterprise AI",
    title: "Building an AI governance framework for Vietnamese enterprises",
    excerpt: "As AI becomes embedded in operations, governance becomes critical. This guide covers the key elements of an AI governance framework that balances innovation with risk management.",
    readTime: "11 min read",
    featured: false,
    body: `AI governance is not a compliance exercise. It's the operational infrastructure that allows businesses to adopt AI at scale without creating unacceptable risks. Businesses that build governance frameworks early move faster — not slower — because they have clear decision-making processes for new AI initiatives.

**What AI governance covers**

An AI governance framework covers four areas: decision rights (who can approve AI deployments and under what conditions), data governance (what data can be used to train or inform AI systems), risk management (how AI-related risks are identified, assessed, and mitigated), and accountability (who is responsible for AI outcomes and how that responsibility is exercised).

**The minimum viable governance framework**

For most Vietnamese enterprises, the minimum viable governance framework has three components. First, an AI use policy that defines what AI tools can be used for, what data can be shared with AI systems, and what decisions require human review. Second, a deployment approval process that ensures new AI deployments are reviewed against the use policy before going live. Third, an incident response process that defines how AI-related incidents are identified, reported, and resolved.

**Governance for generative AI**

Generative AI — tools that produce text, images, or other content — requires specific governance attention because the outputs are less predictable than traditional AI systems. The key governance questions for generative AI are: what content can be generated using company data, who reviews AI-generated content before it's used externally, and how are errors and hallucinations identified and corrected.

**Building governance without slowing adoption**

The risk with governance frameworks is that they become barriers to adoption rather than enablers. The way to avoid this is to design governance processes that are fast for low-risk deployments and thorough for high-risk ones. A tiered approval process — where routine deployments of approved tools in approved contexts require minimal review, while novel deployments or high-risk use cases require more thorough review — allows governance to scale with adoption.`,
  },
  {
    category: "Leadership",
    title: "How to build an internal AI champion programme",
    excerpt: "Internal AI champions are the most effective driver of sustained AI adoption. This guide explains how to identify, develop, and support AI champions across your organisation.",
    readTime: "8 min read",
    featured: false,
    body: `External partners can deploy AI and train teams. What they can't do is sustain adoption after they leave. That requires internal champions — people inside your organisation who understand the tools, believe in the outcomes, and have the credibility to bring their colleagues along.

**What an AI champion is**

An AI champion is not necessarily the most technically sophisticated person in the team. They're the person who combines reasonable technical comfort with strong peer relationships and genuine enthusiasm for the outcomes AI enables. They're the person their colleagues ask when they have a question about the tool, and the person who notices when adoption is slipping and does something about it.

**How to identify champions**

The best AI champions are usually already visible: they're the people who adopted new tools quickly in previous technology rollouts, who ask good questions during training, and who start experimenting with tools before they're asked to. Look for them in the teams where you're deploying AI, and invest in them early.

**How to develop champions**

Champion development has two components: technical depth and change management skills. Champions need enough technical depth to answer their colleagues' questions and troubleshoot common issues. They also need enough change management skill to identify adoption blockers, have productive conversations with resistant colleagues, and escalate issues that need leadership attention.

**How to support champions**

Champions need three things to be effective: time (they need protected time to support their colleagues, not just their own work), recognition (their contribution to adoption outcomes needs to be visible and valued), and connection (champions across different teams need to be connected to each other so they can share what's working and what isn't).`,
  },
  {
    category: "AI Adoption",
    title: "Selecting AI tools for Vietnamese SMEs: a practical framework",
    excerpt: "With hundreds of AI tools available, selection is a major challenge. This framework cuts through the noise and helps Vietnamese SMEs choose tools that will actually get used.",
    readTime: "6 min read",
    featured: false,
    body: `There are hundreds of AI tools available for every business function. Most of them will not get used by your team. The selection challenge is not finding tools that are technically capable — it's finding tools that will be adopted by your specific team in your specific operational context.

**Start with the workflow, not the tool**

The most common selection mistake is starting with a tool and looking for a use case. The right approach is to start with a documented workflow, identify the specific steps where AI can add value, and then find tools that address those specific steps. This produces a much shorter list of relevant candidates.

**The five-question evaluation framework**

For each candidate tool, answer five questions. First: does it integrate with the systems your team already uses? Tools that require manual data transfer between systems rarely get adopted. Second: how long does it take to configure for your specific context? Tools that require weeks of configuration before they're useful have a high abandonment rate. Third: what does the training requirement look like? Tools that require significant training investment before they produce value are high-risk for SMEs. Fourth: what does the pricing model look like at your volume? Some tools are cost-effective at low volume but become expensive as usage scales. Fifth: what does the vendor's support look like? For SMEs without internal technical resources, vendor support quality is a critical selection criterion.

**The pilot approach**

Before committing to a tool, run a two-week pilot with a small group of users in the target workflow. Measure adoption (are they using it?), efficiency (is it saving time?), and satisfaction (do they want to keep using it?). These three metrics predict long-term adoption better than any feature comparison.`,
  },
];

const tools = [
  { icon: FileText, title: "AI Readiness Assessment", desc: "A structured self-assessment covering workflow documentation, data quality, change management capacity, and leadership alignment. Identify your gaps before you start.", tag: "Template", color: "#17264E" },
  { icon: Download, title: "Workflow Mapping Template", desc: "A step-by-step template for documenting operational workflows in the format required for AI redesign. Includes worked examples from logistics, professional services, and financial services.", tag: "Template", color: "#17264E" },
  { icon: BookOpen, title: "AI Adoption Sprint Playbook", desc: "The complete 30-day playbook used by Fetch transformation pods. Covers workflow mapping, tool configuration, team training, and ROI measurement.", tag: "Playbook", color: "#FFBE16" },
  { icon: Video, title: "Team Upskilling Framework", desc: "A four-session training framework for upskilling teams during AI implementation. Includes session outlines, exercises, and adoption measurement tools.", tag: "Framework", color: "#17264E" },
  { icon: Wrench, title: "AI ROI Calculator", desc: "A spreadsheet model for calculating the ROI of operational AI implementations. Input your baseline metrics and implementation costs to project payback period and three-year ROI.", tag: "Calculator", color: "#FFBE16" },
  { icon: FileText, title: "AI Governance Policy Template", desc: "A customisable policy template covering AI use, data governance, and accountability. Designed for Vietnamese enterprises and aligned with local regulatory requirements.", tag: "Template", color: "#17264E" },
];

export default function Resources() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);

  function handleChecklistSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("Checklist sent! Check your inbox shortly.");
  }

  function handleToolDownload(title: string) {
    toast.success(`"${title}" — we'll email this to you. Book a call to get access.`);
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-[#FFBE16]" />
              <span className="section-label" style={{ color: "#FFBE16" }}>Resources & Insights</span>
            </div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
              Practical guides for AI adoption
            </h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">
              No hype. No theory. Practical insights for Vietnamese enterprises navigating AI adoption, workflow redesign, and operational transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-white">
        <div className="container">
          {/* Category filter */}
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

          {/* Article count */}
          <p className="text-sm text-gray-400 mb-6 font-body animate-on-scroll">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <div
                key={article.title}
                onClick={() => setSelectedArticle(article)}
                className="fetch-card animate-on-scroll cursor-pointer group"
              >
                {article.featured && (
                  <div className="inline-flex px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-widest mb-3 font-body" style={{ backgroundColor: "rgba(255,190,22,0.15)", color: "#17264E" }}>
                    Featured
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
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="mb-12 animate-on-scroll">
            <div className="section-label mb-3">Tools & Templates</div>
            <h2 className="font-display text-[#17264E] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
              Practical tools for your AI programme
            </h2>
            <p className="text-gray-600 font-body max-w-2xl">
              Templates, frameworks, and calculators used by Fetch transformation pods. Available to Vietnamese enterprises on request.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(({ icon: Icon, title, desc, tag, color }) => (
              <div key={title} className="fetch-card animate-on-scroll group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm font-body" style={{ backgroundColor: tag === "Playbook" ? "rgba(255,190,22,0.15)" : "#F3F5F7", color: "#17264E" }}>
                    {tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[#17264E] text-base mb-2 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 font-body">{desc}</p>
                <button
                  onClick={() => handleToolDownload(title)}
                  className="flex items-center gap-1.5 text-[#17264E] text-sm font-semibold group-hover:gap-2.5 transition-all focus:outline-none"
                >
                  <Download className="w-3.5 h-3.5" /> Request access <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist CTA */}
      <section className="py-20 section-navy">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-white mb-4 animate-on-scroll" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800 }}>
              Get the AI Readiness Checklist
            </h2>
            <p className="text-white/65 mb-8 animate-on-scroll font-body">
              A practical checklist for Vietnamese enterprises assessing their readiness for AI adoption. Free to download — no spam, no follow-up calls.
            </p>
            {submitted ? (
              <div className="inline-flex items-center gap-2 px-6 py-4 rounded-sm animate-on-scroll" style={{ backgroundColor: "rgba(255,190,22,0.15)", border: "1px solid rgba(255,190,22,0.3)" }}>
                <span className="text-[#FFBE16] font-semibold font-body">Checklist on its way — check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleChecklistSubmit} className="flex gap-3 max-w-md mx-auto animate-on-scroll">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-sm border border-white/20 bg-white/10 text-white placeholder:text-white/40 text-sm font-body focus:outline-none focus:border-[#FFBE16]"
                />
                <button type="submit" className="btn-amber px-6 py-3 text-sm whitespace-nowrap">
                  Get Checklist
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Article Modal */}
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
                  // Handle inline bold
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
                <p className="text-sm text-gray-500 font-body mb-4">Want to discuss how this applies to your business?</p>
                <a href="/contact" className="btn-navy inline-flex items-center gap-2 px-6 py-3 text-sm">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
