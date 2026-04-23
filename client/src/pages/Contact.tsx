import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { ArrowRight, Mail, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const WHATSAPP_NUMBER = "84901234567";

function buildWhatsAppUrl(form: {
  name: string; company: string; role: string;
  email: string; phone: string; size: string;
  challenge: string; timeline: string;
}): string {
  const lines = [
    `*New Enquiry from vn.fetch.tech*`,
    ``,
    `*Name:* ${form.name}`,
    `*Company:* ${form.company}`,
    form.role ? `*Role:* ${form.role}` : null,
    `*Email:* ${form.email}`,
    form.phone ? `*Phone:* ${form.phone}` : null,
    form.size ? `*Company Size:* ${form.size}` : null,
    form.timeline ? `*Timeline:* ${form.timeline}` : null,
    ``,
    `*AI Challenge / Goal:*`,
    form.challenge,
  ].filter(Boolean).join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

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

export default function Contact() {
  const { t } = useTranslation();
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", role: "", email: "", phone: "", size: "", challenge: "", timeline: "" });

  const submitEnquiry = trpc.contact.submitEnquiry.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
    },
    onError: () => {
      window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
      setSubmitted(true);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEnquiry.mutate({
      name: form.name, company: form.company, role: form.role || undefined,
      email: form.email, phone: form.phone || undefined, size: form.size || undefined,
      challenge: form.challenge, timeline: form.timeline || undefined,
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFBE16 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6"><div className="w-8 h-px bg-[#FFBE16]" /><span className="section-label" style={{ color: "#FFBE16" }}>{t("contact.heroLabel")}</span></div>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}>{t("contact.heroTitle")}</h1>
            <p className="text-white/70 text-xl leading-relaxed font-body max-w-2xl">{t("contact.heroDesc")}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="p-12 rounded-2xl text-center" style={{ backgroundColor: "#F3F5F7" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#FFBE16" }}>
                    <ArrowRight className="w-8 h-8 text-[#091738]" />
                  </div>
                  <h2 className="font-display font-bold text-[#17264E] text-2xl mb-4">{t("contact.successTitle")}</h2>
                  <p className="text-gray-600 font-body mb-6">{t("contact.successDesc")}</p>
                  <a href={buildWhatsAppUrl(form)} target="_blank" rel="noopener noreferrer"
                    className="btn-amber px-6 py-3 text-sm inline-flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t("contact.whatsappAgain")}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll">
                  <div className="section-label mb-2">{t("contact.formTitle")}</div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.nameLabel")} *</label><input required type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E]" placeholder={t("contact.namePlaceholder")} /></div>
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.companyLabel")} *</label><input required type="text" value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E]" placeholder={t("contact.companyPlaceholder")} /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.roleLabel")} *</label><input required type="text" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E]" placeholder={t("contact.rolePlaceholder")} /></div>
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.emailLabel")} *</label><input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E]" placeholder={t("contact.emailPlaceholder")} /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.phoneLabel")}</label><input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E]" placeholder="+84 XXX XXX XXXX" /></div>
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.sizeLabel")}</label>
                      <select value={form.size} onChange={(e) => setForm({...form, size: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E] bg-white">
                        <option value="">{t("contact.sizeSelect")}</option>
                        <option value="1-50">1–50 {t("contact.employees")}</option>
                        <option value="51-200">51–200 {t("contact.employees")}</option>
                        <option value="201-500">201–500 {t("contact.employees")}</option>
                        <option value="500+">500+ {t("contact.employees")}</option>
                      </select>
                    </div>
                  </div>
                  <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.challengeLabel")} *</label><textarea required value={form.challenge} onChange={(e) => setForm({...form, challenge: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E] resize-none" placeholder={t("contact.challengePlaceholder")} /></div>
                  <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 font-body">{t("contact.timelineLabel")}</label>
                    <select value={form.timeline} onChange={(e) => setForm({...form, timeline: e.target.value})} className="w-full px-4 py-3 rounded-sm border border-[#E8EDF5] text-sm font-body focus:outline-none focus:border-[#17264E] bg-white">
                      <option value="">{t("contact.timelineSelect")}</option>
                      <option value="asap">{t("contact.timelineAsap")}</option>
                      <option value="1-3months">{t("contact.timeline1to3")}</option>
                      <option value="3-6months">{t("contact.timeline3to6")}</option>
                      <option value="exploring">{t("contact.timelineExploring")}</option>
                    </select>
                  </div>
                  <button type="submit" disabled={submitEnquiry.isPending}
                    className="btn-amber px-8 py-4 text-base w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitEnquiry.isPending ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> {t("contact.submitting")}</>
                    ) : (
                      <>{t("contact.submitBtn")}<ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                  <p className="text-gray-400 text-xs text-center font-body">{t("contact.whatsappNote")}</p>
                </form>
              )}
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="p-6 rounded-xl" style={{ backgroundColor: "#091738" }}>
                <div className="section-label mb-4" style={{ color: "#FFBE16" }}>{t("contact.expectTitle")}</div>
                <div className="space-y-4">
                  {[
                    { num: "01", key: "expect1" },
                    { num: "02", key: "expect2" },
                    { num: "03", key: "expect3" },
                    { num: "04", key: "expect4" },
                  ].map(({ num, key }) => (
                    <div key={num} className="flex gap-3">
                      <div className="text-[#FFBE16] font-display font-bold text-sm flex-shrink-0">{num}</div>
                      <div className="text-white/70 text-sm font-body">{t(`contact.${key}`)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border border-[#E8EDF5]">
                <div className="section-label mb-4">{t("contact.detailsTitle")}</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#FFBE16] flex-shrink-0" /><a href="mailto:hello@fetch.tech" className="text-gray-600 text-sm font-body hover:text-[#17264E]">hello@fetch.tech</a></div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current" style={{ color: "#FFBE16" }} xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm font-body hover:text-[#17264E]">WhatsApp: +84 90 123 4567</a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-[#E8EDF5]">
                <div className="section-label mb-4">{t("contact.officesTitle")}</div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-[#17264E] text-sm font-body mb-1">{t("contact.hcmOffice")}</div>
                    <div className="text-gray-500 text-sm font-body">{t("contact.hcmAddress")}</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#17264E] text-sm font-body mb-1">{t("contact.hnOffice")}</div>
                    <div className="text-gray-500 text-sm font-body">{t("contact.hnAddress")}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-[#E8EDF5]">
                <div className="section-label mb-2">{t("contact.hoursTitle")}</div>
                <div className="text-gray-600 text-sm font-body">{t("contact.hours")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
