/* =============================================================
   FETCH TECHNOLOGY — Terms of Service Page
   Design: Kinetic Authority
   ============================================================= */
import { useEffect } from "react";
import Layout from "@/components/Layout";

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

const sections = [
  {
    title: "1. Acceptance of terms",
    content: `By accessing or using the Fetch Technology website (fetch.tech) or engaging Fetch Technology Pte. Ltd. ("Fetch", "we", "us", or "our") for services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.\n\nThese Terms apply to all visitors, users, and clients. They should be read alongside our Privacy Policy, which is incorporated by reference.`,
  },
  {
    title: "2. Services",
    content: `Fetch Technology provides AI transformation and workflow implementation services to businesses, including but not limited to:\n\n— Workflow mapping and AI opportunity assessment\n— AI tool selection, configuration, and deployment\n— Team upskilling and training programmes\n— Ongoing support and optimisation\n— The 30-Day AI Adoption Sprint and other packaged engagements\n\nThe specific scope, deliverables, timelines, and fees for any engagement are set out in a separate Statement of Work or Service Agreement signed by both parties. These Terms govern the general relationship between Fetch and its clients and website users.`,
  },
  {
    title: "3. Website use",
    content: `You may use our website for lawful purposes only. You agree not to:\n\n— Use the website in any way that violates applicable laws or regulations\n— Attempt to gain unauthorised access to any part of the website or its underlying systems\n— Transmit any unsolicited or unauthorised advertising or promotional material\n— Introduce any malicious code, viruses, or other harmful material\n— Scrape, copy, or reproduce website content without our prior written consent\n— Use the website to impersonate any person or entity\n\nWe reserve the right to restrict or terminate access to the website for any user who violates these Terms.`,
  },
  {
    title: "4. Intellectual property",
    content: `All content on this website — including text, graphics, logos, images, and software — is the property of Fetch Technology Vietnam or its content suppliers and is protected by applicable intellectual property laws.\n\nYou may view and print pages from the website for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content from this website without our prior written consent.\n\nAny methodologies, frameworks, tools, templates, or processes developed by Fetch in the course of delivering services remain the intellectual property of Fetch, unless otherwise agreed in writing. Clients receive a licence to use deliverables for their internal business purposes.`,
  },
  {
    title: "5. Client engagements",
    content: `When you engage Fetch for services, the following general terms apply unless superseded by a signed Service Agreement:\n\n— **Payment:** Fees are as set out in the relevant Statement of Work. Invoices are payable within 14 days of issue unless otherwise agreed.\n— **Confidentiality:** Both parties agree to keep confidential any proprietary information disclosed during the engagement. This obligation survives termination of the engagement.\n— **Client responsibilities:** Clients are responsible for providing timely access to relevant systems, data, and personnel. Delays caused by the client may affect timelines and deliverables.\n— **Warranties:** Fetch warrants that services will be performed with reasonable skill and care. We do not warrant specific business outcomes, as these depend on factors outside our control including client team adoption and organisational change.\n— **Termination:** Either party may terminate an engagement with 14 days' written notice. Fees for work completed up to the termination date remain payable.`,
  },
  {
    title: "6. Limitation of liability",
    content: `To the maximum extent permitted by applicable law:\n\n— Fetch's total liability to you for any claim arising out of or in connection with these Terms or our services shall not exceed the total fees paid by you to Fetch in the three months preceding the claim.\n— Fetch shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, or loss of business opportunity, even if we have been advised of the possibility of such damages.\n— Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "7. Indemnification",
    content: `You agree to indemnify and hold harmless Fetch Technology Vietnam and its directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:\n\n— Your use of our website or services in violation of these Terms\n— Your violation of any applicable law or regulation\n— Any content or information you provide to us that is inaccurate, misleading, or infringes the rights of any third party`,
  },
  {
    title: "8. Third-party links and tools",
    content: `Our website may contain links to third-party websites or references to third-party tools and services. These links are provided for your convenience only. We do not endorse, control, or take responsibility for the content, privacy practices, or terms of any third-party website or service.\n\nIn the course of delivering services, we may recommend or deploy third-party AI tools and software. The use of such tools is subject to the terms and conditions of the respective third-party providers. Fetch is not responsible for the performance, availability, or terms of third-party tools.`,
  },
  {
    title: "9. Disclaimers",
    content: `Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.\n\nWe do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to modify, suspend, or discontinue the website at any time without notice.`,
  },
  {
    title: "10. Governing law and dispute resolution",
    content: `These Terms are governed by and construed in accordance with the laws of Vietnam, without regard to its conflict of law provisions.\n\nAny dispute arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall first be referred to mediation in accordance with Vietnamese law. If the dispute is not resolved through mediation within 60 days, it shall be referred to and finally resolved by the competent courts of Vietnam.`,
  },
  {
    title: "11. Changes to these terms",
    content: `We reserve the right to update these Terms at any time. We will post the revised Terms on this page with an updated effective date. Your continued use of our website or services after any changes constitutes your acceptance of the revised Terms.\n\nFor material changes that affect ongoing client engagements, we will provide reasonable notice.`,
  },
  {
    title: "12. Contact",
    content: `If you have any questions about these Terms, please contact us:\n\n**Fetch Technology Vietnam**\nEmail: legal@fetch.tech\nHo Chi Minh City, Vietnam`,
  },
];

export default function Terms() {
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
              <span className="section-label" style={{ color: "#FFBE16" }}>Legal</span>
            </div>
            <h1
              className="font-display text-white mb-4 animate-on-scroll"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              Terms of Service
            </h1>
            <p className="text-white/50 text-sm font-body animate-on-scroll">
              Effective date: 1 April 2025 &nbsp;·&nbsp; Fetch Technology Vietnam
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-gray-500 text-sm leading-relaxed font-body mb-12 pb-8 border-b border-gray-100">
              These Terms of Service govern your use of the Fetch Technology website and your engagement with Fetch Technology Pte. Ltd. for services. Please read them carefully. If you have questions, contact us at legal@fetch.tech before proceeding.
            </p>
            <div className="space-y-12">
              {sections.map(({ title, content }) => (
                <div key={title} className="animate-on-scroll">
                  <h2
                    className="font-display font-bold text-[#17264E] mb-4"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {title}
                  </h2>
                  <div className="space-y-3">
                    {content.split("\n\n").map((para, i) => {
                      if (para.startsWith("—")) {
                        const lines = para.split("\n");
                        return (
                          <ul key={i} className="space-y-2 mt-2">
                            {lines.map((line, j) => {
                              const boldMatch = line.match(/^— \*\*(.*?)\*\*:(.*)/);
                              const plain = line.replace(/^— /, "");
                              return (
                                <li key={j} className="flex items-start gap-2 text-gray-600 text-sm font-body leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FFBE16" }} />
                                  {boldMatch ? (
                                    <span><strong className="text-[#17264E]">{boldMatch[1]}:</strong>{boldMatch[2]}</span>
                                  ) : (
                                    <span>{plain}</span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }
                      return (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed font-body">
                          {para.replace(/\*\*(.*?)\*\*/g, "$1")}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
