import { Smartphone, Brain, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      color: 'from-primary-800 to-accent-800',
      skills: [
        { name: 'Flutter & Dart', level: 90 },
        { name: 'Android/iOS', level: 85 },
        { name: 'UI/UX Design', level: 80 },
      ],
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'TensorFlow/Keras', level: 75 },
        { name: 'Machine Learning', level: 80 },
      ],
    },
    {
      icon: Code,
      title: 'Développement Web',
      color: 'from-primary-800 to-accent-800',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'React', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Base de Données',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Data Processing', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary-950/30 to-transparent relative">
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
              Compétences Techniques
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-lg shadow-primary-500/50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-300 font-semibold" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)' }}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Flutter', 'Python', 'JavaScript', 'Firebase', 'TensorFlow', 'React', 'SQL', 'Java'].map((tech, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-600 rounded-xl p-4 text-center hover:border-primary-800 hover:bg-primary-50 transition-all duration-300"
            >
              <span className="text-gray-300 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
