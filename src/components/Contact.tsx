import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { site, socialLinks, mailto, telLink, whatsappLink } from '../config/site';
import { usePreferences } from '../context/PreferencesContext';

const handshake = new URL('../image/decor/handshake-globe.jpg', import.meta.url).href;

const Contact = () => {
  const { t, lang } = usePreferences();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const whatsappMessage =
        lang === 'en'
          ? `*New portfolio message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`
          : `*Nouveau message du portfolio*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Sujet:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
      window.open(`${whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.contact.eyebrow}</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">{t.contact.title}</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
          <p className="mt-4 text-slate-300">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="glass-card overflow-hidden rounded-3xl">
              <img src={handshake} alt="" className="h-48 w-full object-cover" />
              <div className="space-y-4 p-6">
                {[
                  { icon: Mail, label: t.contact.email, value: site.email, href: mailto },
                  { icon: Phone, label: t.contact.phone, value: site.phone, href: telLink },
                  { icon: MapPin, label: t.contact.location, value: site.location, href: site.mapsUrl },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-4 transition hover:border-gold-400/40"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-primary-700 text-white">
                      <item.icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </span>
                  </a>
                ))}

                <div className="flex gap-3 pt-2">
                  {[
                    { icon: Github, href: socialLinks.github, label: 'GitHub' },
                    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                    { icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 hover:border-gold-400 hover:text-gold-300"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{t.contact.availability}</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {t.contact.availabilityText.split(t.contact.available)[0]}
                <strong className="text-gold-300">{t.contact.available}</strong>
                {t.contact.availabilityText.split(t.contact.available)[1]}
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                <Send size={18} />
              </div>
              <h3 className="text-xl font-bold text-white">{t.contact.sendTitle}</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: t.contact.fullName, type: 'text', placeholder: t.contact.namePh },
                { id: 'email', label: t.contact.email, type: 'email', placeholder: t.contact.emailPh },
                { id: 'subject', label: t.contact.subject, type: 'text', placeholder: t.contact.subjectPh },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-sm text-slate-300">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none ring-gold-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePh}
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none ring-gold-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 py-3.5 font-semibold text-slate-950 disabled:opacity-60"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
                <Send size={18} />
              </button>
              {submitStatus === 'success' && (
                <p className="flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle size={16} /> {t.contact.success}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-300">
                  <XCircle size={16} />
                  {t.contact.error}{' '}
                  <a href={mailto} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
