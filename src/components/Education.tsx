import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '../config/site';
import { usePreferences } from '../context/PreferencesContext';
import { getEducation } from '../i18n/content';

const Education = () => {
  const { t, lang } = usePreferences();
  const education = getEducation(lang);

  return (
    <section id="education" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.education.eyebrow}</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">{t.education.title}</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <article key={edu.degree} className="glass-card overflow-hidden rounded-3xl">
              <div className="h-1.5 bg-gradient-to-r from-gold-500 to-primary-600" />
              <div className="space-y-5 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-primary-700 text-white">
                    <GraduationCap size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                        {edu.status}
                      </span>
                    </div>
                    <p className="font-semibold text-gold-300">{edu.institution}</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} /> {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} /> {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{edu.description}</p>
                <div>
                  <div className="mb-3 flex items-center gap-2 font-semibold text-white">
                    <Award size={18} className="text-gold-400" />
                    {t.education.keyPoints}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.highlights.map((item) => (
                      <div key={item} className="rounded-xl bg-slate-900/60 px-3 py-2 text-xs text-slate-300">
                        ▸ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="glass-card mt-10 rounded-3xl p-7">
          <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-white">
            <Award className="text-gold-400" /> {t.education.extra}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [t.education.birth, site.birthDate],
              [t.education.license, site.license],
              [t.education.height, site.height],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/5 bg-slate-950/40 p-4">
                <p className="text-xs text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
