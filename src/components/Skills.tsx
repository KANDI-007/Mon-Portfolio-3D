import { Smartphone, Brain, Code, Database, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePreferences } from '../context/PreferencesContext';

const Skills = () => {
  const { t, lang } = usePreferences();

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Angular', level: 80 },
        { name: 'UI / UX & responsive', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Java Spring Boot', level: 82 },
        { name: 'API REST', level: 88 },
        { name: lang === 'en' ? 'OOP & design patterns' : 'POO & design patterns', level: 80 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: [
        { name: 'Flutter & Dart', level: 88 },
        { name: 'Android / iOS', level: 82 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      icon: Database,
      title: lang === 'en' ? 'Data & languages' : 'Données & langages',
      skills: [
        { name: 'JavaScript / HTML / CSS', level: 90 },
        { name: 'Java & SQL', level: 84 },
        { name: 'Python', level: 78 },
      ],
    },
  ];

  const tools = ['React', 'Angular', 'Vue.js', 'Spring Boot', 'Flutter', 'Firebase', 'Git', 'WordPress', 'Java', 'Python', 'SQL', 'Agile'];

  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.skills.eyebrow}</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">{t.skills.title}</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-3xl p-7"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-primary-700 text-white">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="font-semibold text-gold-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-primary-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tech) => (
            <div key={tech} className="glass-card rounded-2xl px-3 py-3 text-center text-sm font-medium text-slate-200">
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
          <Wrench size={16} className="text-gold-400" />
          {t.skills.footer}
          <Brain size={16} className="text-primary-300" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
