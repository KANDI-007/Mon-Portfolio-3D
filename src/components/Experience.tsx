import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { liveLinks } from '../config/site';

const Experience = () => {
  const experiences = [
    {
      period: '25/08/2025 – 10/03/2026',
      title: 'Développeur Web et Mobile',
      company: 'EDIBA INTER',
      location: 'Lomé, Togo',
      link: liveLinks.ediba,
      linkLabel: 'eip.edibainter.com',
      description:
        'Stage pratique : conception et déploiement d’une application web de facturation en React, consommée via API REST sécurisées, sous la direction de Mme Abidé Alayi. Solution aujourd’hui utilisée en production.',
      achievements: [
        'Application web de facturation en production',
        'Version mobile associée en Flutter / Dart',
        'Sélectionné et parrainé par l’ANPE (09/2025)',
        'Supports de communication visuelle et activités terrain',
      ],
    },
    {
      period: '2025 – 2026',
      title: 'Co-développeur',
      company: 'AC Barracuda',
      location: 'Lomé, Togo',
      description:
        'Co-développement du site vitrine du club : actualités, calendrier et résultats, effectif — intégration des contenus et mise en page des sections.',
      achievements: [
        'Site vitrine officiel du club',
        'Actualités, calendrier et résultats',
        'Présentation de l’effectif',
      ],
    },
    {
      period: '2025 – 2026',
      title: 'Développeur',
      company: 'UCAO-UUT — MaCité+',
      location: 'Lomé, Togo',
      link: liveLinks.macite,
      linkLabel: 'macite.edibainter.com',
      description:
        'Conception et développement en React de MaCité+, en autonomie totale, pour la gestion des résidences de la cité universitaire.',
      achievements: [
        'Interface utilisateur complète',
        'Consommation d’API REST',
        'Mise en production',
      ],
    },
    {
      period: '11/2025 – 12/2025',
      title: 'Développeur Full Stack',
      company: 'UCAO-UUT — RadApp',
      location: 'Lomé, Togo',
      description:
        'Application de gestion de restaurant développée seul : backend Java Spring Boot (Gradle) et frontend Angular, avec documentation technique.',
      achievements: [
        'Modélisation et création de la base de données',
        'Endpoints REST documentés',
        'Connexion complète Angular ↔ API',
      ],
    },
  ];

  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Parcours</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Expériences professionnelles</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-gold-500 via-primary-500 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <article className="glass-card ml-12 rounded-3xl p-6 md:ml-0">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-primary-700 text-white">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="font-semibold text-gold-300">{exp.company}</p>
                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={14} /> {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={14} /> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-300">{exp.description}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200"
                      >
                        <ExternalLink size={16} />
                        {exp.linkLabel}
                      </a>
                    )}
                    <div className="space-y-2">
                      {exp.achievements.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle size={16} className="mt-0.5 shrink-0 text-gold-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
                <div className="absolute left-6 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gold-400 ring-4 ring-slate-950 md:left-1/2" />
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
