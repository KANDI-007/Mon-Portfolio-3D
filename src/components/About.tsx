import { Sparkles, Lightbulb, Users, Award, Globe, Handshake, Calendar, MapPin, Car, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '../config/site';
import { portraitPhotos } from '../utils/imagePaths';
import { usePreferences } from '../context/PreferencesContext';

const About = () => {
  const { t } = usePreferences();

  const highlights = [
    { icon: Sparkles, title: t.about.h1Title, description: t.about.h1Desc },
    { icon: Lightbulb, title: t.about.h2Title, description: t.about.h2Desc },
    { icon: Users, title: t.about.h3Title, description: t.about.h3Desc },
    { icon: Award, title: t.about.h4Title, description: t.about.h4Desc },
  ];

  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.about.eyebrow}</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">{t.about.title}</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
        </motion.div>

        <div className="mb-14 grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/40 to-primary-600/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold-400/70 shadow-2xl shadow-gold-500/20">
                <img
                  src={portraitPhotos.desk}
                  alt={`${site.name} — ${t.about.deskCaption}`}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <p className="mt-3 text-center text-xs text-slate-400">{t.about.deskCaption}</p>
            </div>
          </motion.div>

          <div className="space-y-5">
            <h3 className="font-display text-2xl text-gold-300">{t.about.personalInfo}</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: t.about.birth, value: site.birthDate },
                { icon: MapPin, label: t.about.location, value: site.location },
                { icon: Car, label: t.about.license, value: site.license },
                { icon: Ruler, label: t.about.height, value: site.height },
              ].map((info) => (
                <div key={info.label} className="glass-card rounded-2xl p-4">
                  <info.icon size={20} className="mb-2 text-gold-300" />
                  <p className="text-xs text-slate-400">{info.label}</p>
                  <p className="font-semibold text-white">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6 transition hover:border-gold-400/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-primary-600 text-white">
                <Users size={22} />
              </div>
              <h3 className="font-display text-2xl text-gold-300">{t.about.myProfile}</h3>
            </div>

            <p className="mb-8 max-w-4xl text-base leading-relaxed text-slate-200">{t.about.bio}</p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Globe className="text-gold-300" size={20} />
                  <h4 className="font-semibold text-white">{t.about.languages}</h4>
                </div>
                {[
                  { name: t.about.french, level: t.about.fluent, percentage: 95 },
                  { name: t.about.english, level: t.about.goodLevel, percentage: 75 },
                ].map((langItem) => (
                  <div key={langItem.name} className="mb-4 last:mb-0">
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-slate-200">{langItem.name}</span>
                      <span className="text-slate-400">{langItem.level}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-500 to-primary-500"
                        style={{ width: `${langItem.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40">
                <img
                  src={portraitPhotos.leadership}
                  alt={t.about.leadership}
                  className="aspect-[16/10] w-full bg-slate-950 object-contain sm:aspect-[16/9]"
                />
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Handshake className="text-gold-300" size={20} />
                    <h4 className="font-semibold text-white">{t.about.leadership}</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li>▸ {t.about.lead1}</li>
                    <li>▸ {t.about.lead2}</li>
                    <li>▸ {t.about.lead3}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
