/* =============================================================
   FETCH TECHNOLOGY — Privacy Policy Page
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
    title: "1. Who we are",
    content: `Fetch Technology Pte. Ltd. ("Fetch", "we", "us", or "our") is a company incorporated in Singapore. We provide AI transformation and workflow implementation services to businesses. Our registered address is in Singapore.\n\nThis Privacy Policy explains how we collect, use, disclose, and protect personal data when you visit our website (fetch.tech), enquire about our services, or engage us as a client.`,
  },
  {
    title: "2. What personal data we collect",
    content: `We collect personal data that you provide directly to us and data collected automatically when you use our website.\n\n**Data you provide directly:**\n— Name, job title, and company name when you submit an enquiry or book a call\n— Email address and phone number when you contact us\n— Information you share during discovery calls, strategy sessions, or client engagements\n— Any other information you choose to provide in correspondence with us\n\n**Data collected automatically:**\n— IP address and approximate location\n— Browser type, operating system, and device information\n— Pages visited, time spent on pages, and referring URLs\n— Anonymised analytics data collected via our website analytics provider`,
  },
  {
    title: "3. How we use your personal data",
    content: `We use your personal data for the following purposes:\n\n— To respond to your enquiries and schedule calls or meetings\n— To provide our services to you as a client\n— To send you information about our services that you have requested\n— To improve our website and understand how visitors use it\n— To comply with our legal and regulatory obligations\n— To protect our legitimate business interests\n\nWe do not sell your personal data to third parties. We do not use your personal data for automated decision-making or profiling.`,
  },
  {
    title: "4. Legal basis for processing",
    content: `We process your personal data on the following legal bases under Vietnam's Law on Cybersecurity 2018, Decree 13/2023/ND-CP on Personal Data Protection, and, where applicable, the EU General Data Protection Regulation (GDPR):\n\n— **Consent:** Where you have given us explicit consent to process your data (e.g., by submitting an enquiry form)\n— **Contractual necessity:** Where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract\n— **Legitimate interests:** Where processing is necessary for our legitimate business interests, provided those interests are not overridden by your rights\n— **Legal obligation:** Where we are required to process your data to comply with applicable law`,
  },
  {
    title: "5. How we share your personal data",
    content: `We may share your personal data with the following categories of third parties:\n\n— **Service providers:** Third-party vendors who help us operate our website and deliver our services (e.g., cloud hosting providers, email platforms, scheduling tools). These providers are contractually bound to process your data only on our instructions.\n— **Professional advisers:** Lawyers, accountants, and auditors where necessary for our legal and compliance obligations.\n— **Regulatory authorities:** Government bodies, law enforcement agencies, or courts where we are required to disclose information by law.\n\nWe do not share your personal data with any other third parties without your explicit consent.`,
  },
  {
    title: "6. Data retention",
    content: `We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.\n\n— Enquiry and contact data: up to 2 years from the date of last contact\n— Client engagement data: up to 5 years from the end of the engagement, in accordance with Vietnamese business record-keeping requirements\n— Website analytics data: up to 13 months on a rolling basis\n\nWhen personal data is no longer required, we securely delete or anonymise it.`,
  },
  {
    title: "7. Your rights",
    content: `Under Vietnam's Decree 13/2023/ND-CP and, where applicable, the GDPR, you have the following rights regarding your personal data:\n\n— **Access:** You may request a copy of the personal data we hold about you.\n— **Correction:** You may request that we correct any inaccurate or incomplete personal data.\n— **Withdrawal of consent:** Where processing is based on consent, you may withdraw your consent at any time.\n— **Erasure:** In certain circumstances, you may request that we delete your personal data.\n— **Data portability:** Where applicable, you may request that we provide your data in a structured, machine-readable format.\n\nTo exercise any of these rights, please contact us at the address below. We will respond within 30 days.`,
  },
  {
    title: "8. Cookies and tracking",
    content: `Our website uses cookies and similar tracking technologies to improve your experience and collect anonymised analytics data. Cookies are small text files stored on your device.\n\nWe use the following types of cookies:\n— **Essential cookies:** Required for the website to function correctly. These cannot be disabled.\n— **Analytics cookies:** Used to understand how visitors interact with our website. All data collected is anonymised.\n\nYou can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.`,
  },
  {
    title: "9. Data security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These measures include encrypted data transmission (HTTPS), access controls, and regular security reviews.\n\nHowever, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee absolute security.`,
  },
  {
    title: "10. International transfers",
    content: `Our primary operations are based in Vietnam. If we transfer your personal data outside Vietnam, we will ensure that appropriate safeguards are in place in accordance with Vietnam's data protection requirements, including ensuring that the recipient country provides a comparable level of data protection.`,
  },
  {
    title: "11. Changes to this policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "12. Contact us",
    content: `If you have any questions about this Privacy Policy, wish to exercise your rights, or wish to make a complaint, please contact us:\n\n**Fetch Technology Vietnam**\nEmail: privacy@fetch.tech\nHo Chi Minh City, Vietnam\n\nIf you are not satisfied with our response, you may contact the Ministry of Public Security of Vietnam (A05 Department) regarding personal data protection matters.`,
  },
];

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              Fetch Technology Vietnam is committed to protecting your personal data. This policy describes what data we collect, why we collect it, and how we use and protect it — in plain language, without unnecessary legal jargon.
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
                      if (para.startsWith("—") || para.startsWith("**")) {
                        const lines = para.split("\n");
                        return (
                          <ul key={i} className="space-y-2 mt-2">
                            {lines.map((line, j) => {
                              const cleaned = line.replace(/^— /, "").replace(/\*\*(.*?)\*\*/g, "$1");
                              const boldMatch = line.match(/^\*\*(.*?)\*\*:(.*)/);
                              return (
                                <li key={j} className="flex items-start gap-2 text-gray-600 text-sm font-body leading-relaxed">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FFBE16" }} />
                                  {boldMatch ? (
                                    <span><strong className="text-[#17264E]">{boldMatch[1]}:</strong>{boldMatch[2]}</span>
                                  ) : (
                                    <span>{cleaned}</span>
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
