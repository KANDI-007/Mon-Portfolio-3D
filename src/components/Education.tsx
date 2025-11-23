import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Licence 3 en Informatique',
      status: 'En cours',
      institution: 'UCAO-UUT',
      location: 'Lomé, Togo',
      period: '2023 – 2025',
      description: 'Formation approfondie en développement logiciel, intelligence artificielle, et gestion de projets informatiques.',
      highlights: [
        'Développement mobile et web',
        'Intelligence artificielle et machine learning',
        'Gestion de bases de données',
        'Architecture logicielle',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'Baccalauréat 2 – Série Scientifique',
      status: 'Obtenu',
      institution: 'LPL Le Salut',
      location: 'Agoè-Atchanvé',
      period: '2022 – 2023',
      description: 'Formation scientifique complète avec spécialisation en mathématiques et sciences physiques.',
      highlights: [
        'Mathématiques avancées',
        'Sciences physiques',
        'Sciences naturelles',
        'Informatique',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-red-950/20 to-transparent relative">
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
              Formation Académique
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-lg shadow-primary-500/50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/60 via-red-900/20 to-slate-800/60 border border-primary-700/30 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/40 group hover:scale-[1.02] backdrop-blur-sm"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>

              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${edu.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-100">{edu.degree}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'En cours'
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                          : 'bg-green-500/20 text-green-400 border border-green-500/50'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-primary-700 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{edu.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-100 font-semibold">
                    <Award size={20} className="text-primary-700" />
                    <span>Points Clés :</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-slate-700/30 rounded-lg p-3"
                      >
                        <span className="text-primary-400 text-sm">▸</span>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-slate-800/60 via-red-900/30 to-slate-900/60 border border-primary-700/30 rounded-2xl p-8 shadow-xl shadow-primary-900/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
            <Award className="text-primary-400" size={28} />
            Informations Complémentaires
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800/60 via-red-900/20 to-slate-800/60 rounded-xl p-6 border border-primary-700/30 backdrop-blur-sm">
              <p className="text-gray-300 mb-1" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>Date de naissance</p>
              <p className="text-gray-100 font-semibold" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.9)' }}>07/03/2006</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 via-red-900/20 to-slate-800/60 rounded-xl p-6 border border-primary-700/30 backdrop-blur-sm">
              <p className="text-gray-300 mb-1" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>Permis de conduire</p>
              <p className="text-gray-100 font-semibold" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.9)' }}>Permis B</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 via-red-900/20 to-slate-800/60 rounded-xl p-6 border border-primary-700/30 backdrop-blur-sm">
              <p className="text-gray-300 mb-1" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>Taille</p>
              <p className="text-gray-100 font-semibold" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.9)' }}>1,78m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
