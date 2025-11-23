import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: '2025',
      title: 'Développeur Web et Mobile',
      company: 'EDIBA INTER',
      location: 'Lomé, Togo',
      description: 'Conception et développement d\'une application de gestion de facturation opérationnelle sous la direction de Mme Abide Alayi (Directrice d\'EDIBA INTER).',
      achievements: [
        'Développement avec Flutter/Dart',
        'Automatisation des processus internes',
        'Interface utilisateur intuitive',
        'Gestion complète de la facturation',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      period: 'Septembre 2025',
      title: 'Programme d\'Insertion Professionnelle (ANPE)',
      company: 'Parrainé par le Président du Conseil',
      location: 'Lomé, Togo',
      description: 'Participant sélectionné pour le programme d\'insertion professionnelle.',
      achievements: [
        'Sélection sur candidature',
        'Conception d\'application pour EDIBA INTER',
        'Automatisation des processus',
        'Collaboration avec l\'équipe',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent-950/20 to-transparent relative">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-2xl" style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}>
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent" style={{ 
              textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 4px 8px rgba(0, 0, 0, 0.9)',
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8))'
            }}>
              Expériences Professionnelles
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-lg shadow-primary-500/50"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-accent-500 shadow-lg shadow-primary-500/50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 flex justify-end">
                  <div
                    className={`w-full bg-gradient-to-br from-slate-800/60 via-blue-900/20 to-slate-800/60 border border-primary-700/30 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-[1.02] backdrop-blur-sm ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${exp.color} p-3 rounded-lg`}>
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-primary-400 font-semibold mb-1">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-400 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 transform -translate-x-1.5 ring-4 ring-slate-900 shadow-lg shadow-primary-500/50 glow-pulse"></div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
