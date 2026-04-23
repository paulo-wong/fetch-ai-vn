/* =============================================================
   FETCH TECHNOLOGY VIETNAM — Careers Page
   Design: Kinetic Authority (Vietnam edition)
   Palette: Navy #17264E | Dark Navy #091738 | Amber #FFBE16 | Vietnam Red #DA251D
   ============================================================= */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { MapPin, Clock, DollarSign, ChevronDown, ChevronUp, ArrowRight, Briefcase, Users, TrendingUp, Heart } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Business Analyst",
    location: "Ho Chi Minh City",
    locTag: "HCM",
    type: "Full time",
    salary: "Up to 1,500 USD",
    tag: "New",
    remote: false,
    requirements: [
      "Bachelor's degree in Game Design, Computer Science, Business Administration, or related field; Master's degree is a big plus.",
      "1–2 years of experience as a business analyst in the software industry, with a focus on game development projects.",
      "Strong understanding of game design principles, including 2D and 3D design concepts, animation, and visual effects.",
      "Experience with game development tools and platforms, such as Cocos, Spine, etc.",
      "Excellent communication and interpersonal skills, with the ability to collaborate effectively with cross-functional teams.",
      "Passion for gaming and a creative mindset with the ability to think outside the box.",
      "Fluency in Chinese (Mandarin) and English.",
    ],
  },
  {
    id: 2,
    title: "Project Manager",
    location: "Ho Chi Minh City",
    locTag: "HCM",
    type: "Full time",
    salary: "Up to 2,200 USD",
    tag: "New",
    remote: false,
    requirements: [
      "Bachelor's degree in Project Management, Information System, Business Administration or a related field.",
      "4+ years of project management experience, preferably in the gaming industry or a related creative field.",
      "Strong understanding of project management methodologies, tools, and techniques.",
      "Ability to identify and resolve issues efficiently and effectively.",
      "Excellent communication, translation, and interpersonal skills to bridge multicultural teams.",
      "Strong sense of ownership, adaptability, and ability to multitask in a dynamic work environment.",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Engineer (React.js & React Native & Node.js)",
    location: "Remote (HN / HCM / DN)",
    locTag: "Remote",
    type: "Full time",
    salary: "Up to 4,500 USD",
    tag: "New",
    remote: true,
    requirements: [
      "7+ years of professional experience in full-stack development.",
      "Strong proficiency in React.js, React Native and Node.js with 4 years of full-time experience or equivalent.",
      "Solid understanding of RESTful APIs and asynchronous programming.",
      "Experience with version control systems (e.g., Git).",
      "Familiarity with CI/CD pipelines and cloud platforms (AWS, GCP, or Azure).",
      "Excellent problem-solving skills and attention to detail.",
      "Strong communication and collaboration abilities.",
      "Good English both verbal and written.",
    ],
  },
  {
    id: 4,
    title: "Project Manager",
    location: "Hà Nội",
    locTag: "HN",
    type: "Full time",
    salary: "Up to 2,500 USD",
    tag: "New",
    remote: false,
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or a related field.",
      "8+ years of experience in project management, with a proven track record of successfully managing projects.",
      "Strong understanding of project management methodologies (Agile, Scrum) and tools (Jira, Trello).",
      "Excellent leadership, problem-solving, and decision-making skills.",
      "Proficiency in project management software and tools.",
      "Strong organisational skills with the ability to handle multiple projects simultaneously.",
      "Fluency in English (both written and spoken) is required.",
      "Experience in the blockchain industry or blockchain-related products is a big plus.",
      "PMP or other project management certifications are a plus.",
    ],
  },
  {
    id: 5,
    title: "UI Designer",
    location: "Hà Nội",
    locTag: "HN",
    type: "Full time",
    salary: "Up to 1,500 USD",
    tag: "New",
    remote: false,
    requirements: [
      "3+ years of interactive experience design for App and PC/Mobile, with solid visual expression and rich UI/UX experience.",
      "Experience with animation and motion graphics.",
      "Experience in social network, e-commerce, or game industries.",
      "UX thinking applied to UI design, with general knowledge and personal ideas about UX.",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects), Figma, and other design software.",
      "Experience with HTML5 is a plus.",
      "Independent in design, with innovation ability and clear design plan expression.",
      "Hand-drawing ability is a plus.",
    ],
  },
  {
    id: 6,
    title: "Office Administrator",
    location: "Hà Nội",
    locTag: "HN",
    type: "Full time",
    salary: "Up to 15,000,000 VND",
    tag: "New",
    remote: false,
    requirements: [
      "2+ years of work experience as an office administrator, office assistant or relevant role.",
      "Driven, organised, proactive and detail-oriented.",
      "Familiarity with office management procedures.",
      "Experience in event planning and organising.",
      "Experience in Employer Branding and marketing.",
      "Good command of English.",
      "Proven experience as an office administrator in an IT company is a plus.",
    ],
  },
  {
    id: 7,
    title: "Senior Fullstack Engineer",
    location: "Remote (HN / HCM)",
    locTag: "Remote",
    type: "Full time",
    salary: "Up to 2,800 USD",
    tag: null,
    remote: true,
    requirements: [
      "5+ years developing production-grade applications with Node.js and modern frontend frameworks (preferably Vue.js) in TypeScript.",
      "Strong expertise in designing, implementing, and maintaining microservices architectures.",
      "Solid hands-on experience with Kafka, gRPC, and event-driven systems.",
      "Proficiency in MySQL, Elasticsearch, and Redis.",
      "Familiarity with MS Azure and infrastructure orchestration tools like Kubernetes and Helm.",
      "Deep understanding of data structures, distributed systems, and system design principles.",
      "Excellent communication and collaboration skills, with a track record of technical leadership and mentoring engineers.",
      "Strong adherence to Agile methodologies and software development best practices.",
    ],
  },
  {
    id: 8,
    title: "Associate Finance Consultant",
    location: "Ho Chi Minh City (Onsite)",
    locTag: "HCM",
    type: "Full time",
    salary: "Up to 25,000,000 VND",
    tag: null,
    remote: false,
    requirements: [
      "Hold professional qualifications such as CA/CFA/CPA/ACA/ACCA.",
      "1 to 3 years of pertinent experience.",
      "Demonstrate fluency in Vietnamese and English (reading, writing, and speaking).",
      "Showcase robust financial acumen, business analytical skills, and adeptness in report writing.",
      "Display willingness to travel whenever required.",
    ],
  },
];

const perks = [
  { icon: DollarSign, title: "Competitive Pay", desc: "Market-rate salaries in USD or VND, reviewed annually with performance bonuses." },
  { icon: TrendingUp, title: "Fast Growth", desc: "Work directly with clients across Vietnam and Southeast Asia. Promotions based on merit, not tenure." },
  { icon: Users, title: "Great Team", desc: "A small, high-trust team where your work is visible and your ideas are heard from day one." },
  { icon: Heart, title: "Flexibility", desc: "Hybrid and remote options for most roles. We care about output, not office hours." },
];

const locTagColors: Record<string, string> = {
  HCM: "bg-amber-100 text-amber-800",
  HN: "bg-blue-100 text-blue-800",
  Remote: "bg-green-100 text-green-800",
};

function JobCard({ job }: { job: typeof jobs[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-lg"
      style={{ boxShadow: "0 2px 12px rgba(9,23,56,0.06)" }}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Left */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {job.tag && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: "#DA251D" }}
                >
                  {job.tag}
                </span>
              )}
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${locTagColors[job.locTag] ?? "bg-gray-100 text-gray-700"}`}>
                {job.locTag}
              </span>
              {job.remote && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Remote</span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl text-[#17264E] mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-1.5 font-semibold" style={{ color: "#FFBE16" }}>
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="mailto:careers@fetch.tech"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#091738] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FFBE16" }}
            >
              Apply Now
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

        {/* Expandable requirements */}
        {expanded && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="font-semibold text-[#17264E] mb-3 text-sm uppercase tracking-wide">Requirements</h4>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#FFBE16" }} />
                  {req}
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

  const locations = ["All", "HCM", "HN", "Remote"];

  const filtered = jobs.filter((j) => {
    const matchLoc = locationFilter === "All" || j.locTag === locationFilter;
    const matchSearch = search === "" || j.title.toLowerCase().includes(search.toLowerCase());
    return matchLoc && matchSearch;
  });

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#091738" }}
      >
        {/* Vietnam flag stripe accent */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#DA251D" }} />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "#FFBE16" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFBE16" }}>
                Careers at Fetch Vietnam
              </span>
            </div>
            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.06 }}
            >
              Build the future of AI adoption in Vietnam.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed font-body mb-8 max-w-2xl">
              We're a small team doing high-impact work — embedding AI into real businesses across Vietnam and Southeast Asia. If you want your work to matter from day one, you're in the right place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#091738] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FFBE16" }}
              >
                See Open Roles
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:careers@fetch.tech"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-white/20 hover:border-white/40 transition-colors"
              >
                Send Speculative CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFBE16" }}
                >
                  <Icon className="w-5 h-5 text-[#091738]" />
                </div>
                <h3 className="font-display font-bold text-[#17264E] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-20" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="section-label mb-3">Open Positions</div>
              <h2
                className="font-display text-[#17264E]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}
              >
                {filtered.length} role{filtered.length !== 1 ? "s" : ""} available
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                placeholder="Search roles..."
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
                      locationFilter === loc
                        ? "text-[#091738] border-transparent"
                        : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                    }`}
                    style={locationFilter === loc ? { backgroundColor: "#FFBE16", borderColor: "#FFBE16" } : {}}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No roles match your filter. Try a different location or search term.</p>
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

      {/* ── SPECULATIVE CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#091738" }}>
        <div className="container text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#DA251D" }}>
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Don't see the right role?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            We hire for attitude and aptitude. If you're sharp, driven, and want to work on AI transformation in Vietnam, send us your CV and tell us what you'd bring.
          </p>
          <a
            href="mailto:careers@fetch.tech"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#091738] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFBE16" }}
          >
            Send Speculative Application
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-sm mt-4">careers@fetch.tech · We read every application.</p>
        </div>
      </section>
    </Layout>
  );
}
