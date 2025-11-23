import { Sparkles, Lightbulb, Users, Award, Globe, Handshake, Calendar, MapPin, Car, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Dynamique & Créatif',
      description: 'Passionné par le développement mobile et l\'intelligence artificielle',
    },
    {
      icon: Lightbulb,
      title: 'Orienté Résultats',
      description: 'Conception d\'applications innovantes pour automatiser les processus',
    },
    {
      icon: Users,
      title: 'Leader Communicatif',
      description: 'Président d\'association et délégué d\'institut',
    },
    {
      icon: Award,
      title: 'Engagé',
      description: 'Valorisation du travail d\'équipe et coordination efficace',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent relative">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-2xl"
            style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}
          >
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent bg-[length:200%_auto]"
              style={{ 
                textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 4px 8px rgba(0, 0, 0, 0.9)',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8))'
              }}
            >
              À Propos de Moi
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-lg shadow-primary-500/50"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center md:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 group"
            >
              {/* Effet de lueur animé électrique */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300 animate-pulse glow-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-primary-400/30 to-accent-500/30 rounded-full blur-xl"></div>
              
              {/* Effets électriques animés */}
              <div className="electric-particles">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="electric-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Cadre avec bordure électrique */}
              <div className="relative w-full h-full rounded-full electric-border overflow-hidden group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 via-primary-500/50 to-accent-600/50 rounded-full blur-sm"></div>
                <div className="relative w-full h-full rounded-full border-4 border-primary-500/80 shadow-2xl shadow-primary-500/50 overflow-hidden group-hover:border-primary-400 transition-all duration-300">
                  <img
                    src={new URL('../image/imageprofil/LARE.jpg', import.meta.url).href}
                    alt="Kandi Salman LARE"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                    onError={(e) => {
                      console.error('Error loading profile image');
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Overlay avec effet électrique */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-20"></div>
                  {/* Lignes électriques animées */}
                  <div className="absolute inset-0 z-30 opacity-30">
                    <svg className="w-full h-full">
                      <defs>
                        <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8">
                            <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6">
                            <animate attributeName="stop-opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#991b1b" stopOpacity="0.8">
                            <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                      </defs>
                      <circle cx="50%" cy="50%" r="45%" fill="none" stroke="url(#electricGradient)" strokeWidth="2" opacity="0.6">
                        <animate attributeName="r" values="45%;50%;45%" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="50%" cy="50%" r="40%" fill="none" stroke="url(#electricGradient)" strokeWidth="1.5" opacity="0.4">
                        <animate attributeName="r" values="40%;45%;40%" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Badge de statut avec glow */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-3 shadow-lg border-4 border-slate-900 glow-pulse z-40"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Badges d'informations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center"
              >
                <Users className="text-primary-300" size={20} />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary-300 drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.4), 0 1px 3px rgba(0, 0, 0, 0.8)' }}>
                Informations Personnelles
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: 'Date de naissance', value: '07/03/2006', color: 'primary', delay: 0.5 },
                { icon: MapPin, label: 'Localisation', value: 'Lomé, Togo', color: 'primary', delay: 0.6 },
                { icon: Car, label: 'Permis', value: 'Permis B', color: 'accent', delay: 0.7 },
                { icon: Ruler, label: 'Taille', value: '1,78m', color: 'accent', delay: 0.8 },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: info.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-slate-800/70 via-blue-900/30 to-slate-800/70 border border-primary-700/30 rounded-xl p-5 hover:border-primary-500/60 transition-all duration-300 backdrop-blur-sm overflow-hidden relative">
                    {/* Effet de brillance au hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Effet de lueur au hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-accent-500/10 transition-all duration-300 rounded-xl"></div>
                    
                    {/* Contenu */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                          info.color === 'primary' 
                            ? 'from-primary-500/20 to-primary-400/20 group-hover:from-primary-500/40 group-hover:to-primary-400/40' 
                            : 'from-accent-500/20 to-accent-400/20 group-hover:from-accent-500/40 group-hover:to-accent-400/40'
                        } flex items-center justify-center mb-3 transition-all duration-300`}
                      >
                        <info.icon 
                          size={24} 
                          className={info.color === 'primary' ? 'text-primary-300 group-hover:text-primary-200' : 'text-accent-300 group-hover:text-accent-200'} 
                        />
                      </motion.div>
                      
                      <p className="text-gray-300 text-sm mb-2 font-medium" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                        {info.label}
                      </p>
                      <motion.p
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className={`text-gray-100 font-bold text-lg ${
                          info.color === 'primary' 
                            ? 'group-hover:text-primary-200' 
                            : 'group-hover:text-accent-200'
                        } transition-colors duration-300`}
                        style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.9)' }}
                      >
                        {info.value}
                      </motion.p>
                    </div>
                    
                    {/* Particules animées */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 rounded-full ${
                            info.color === 'primary' ? 'bg-primary-400' : 'bg-accent-400'
                          } opacity-0 group-hover:opacity-100`}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 30}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800/60 via-blue-900/20 to-slate-800/60 border border-slate-700/50 rounded-xl p-6 hover:border-primary-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 group relative overflow-hidden"
            >
              {/* Effet de brillance au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Effet de lueur au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-accent-500/10 transition-all duration-300 rounded-xl"></div>
              
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300 relative z-10"
              >
                <item.icon className="text-primary-300 group-hover:text-primary-200" size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100 drop-shadow-lg relative z-10 group-hover:text-primary-200 transition-colors duration-300" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed relative z-10" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/60 via-blue-900/30 to-slate-900/60 border border-primary-700/30 rounded-2xl p-8 md:p-12 shadow-xl shadow-primary-900/20 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Effet de fond animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            {/* Titre avec animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/50"
              >
                <Users className="text-white" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary-300 drop-shadow-lg" style={{ textShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)' }}>
                Mon Profil
              </h3>
            </motion.div>

            {/* Points de profil avec animations */}
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Dynamique',
                  text: "jeune étudiant en informatique à l'UCAO-UUT, passionné par le développement mobile et l'intelligence artificielle.",
                  delay: 0.1,
                },
                {
                  icon: Lightbulb,
                  title: 'Créatif et orienté résultats',
                  text: "j'ai conçu une application pour EDIBA INTER afin d'automatiser la gestion interne lors du programme ANPE.",
                  delay: 0.2,
                },
                {
                  icon: Handshake,
                  title: 'Leader et communicatif',
                  text: "je valorise le travail d'équipe et excelle dans la coordination entre étudiants et administration.",
                  delay: 0.3,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-primary-700/20 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300"
                  >
                    <item.icon className="text-primary-300 group-hover:text-primary-200" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <strong className="text-gray-100 text-lg block mb-1" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.9)' }}>
                      {item.title}
                    </strong>
                    <p className="text-gray-200 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
                  </div>

            {/* Langues et Leadership */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {/* Section Langues */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 p-6 rounded-xl bg-slate-800/30 border border-primary-700/20 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center"
                  >
                    <Globe className="text-primary-300" size={20} />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-primary-300 drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.4), 0 1px 3px rgba(0, 0, 0, 0.8)' }}>
                    Langues
                  </h4>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Français', level: 'Courant', percentage: 95 },
                    { name: 'Anglais', level: 'Bon niveau', percentage: 75 },
                  ].map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-200 font-medium" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                          {lang.name}
                        </span>
                        <span className="text-gray-300 text-sm" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                          {lang.level}
                        </span>
                  </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                          className="bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 h-full rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                  </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Section Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 p-6 rounded-xl bg-slate-800/30 border border-primary-700/20 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/30 to-primary-500/30 flex items-center justify-center"
                  >
                    <Handshake className="text-accent-300" size={20} />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-primary-300 drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.4), 0 1px 3px rgba(0, 0, 0, 0.8)' }}>
                    Leadership
                  </h4>
              </div>
                <ul className="space-y-3">
                  {[
                    "Président de l'association des étudiants – UCAO-UUT (2024-2025)",
                    "Délégué d'institut - Coordination étudiants/administration",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.span
                        animate={index === 0 ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="text-primary-400 mt-1 text-lg group-hover:text-primary-300 transition-colors"
                        style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}
                      >
                        ▸
                      </motion.span>
                      <span className="text-gray-200 flex-1 leading-relaxed group-hover:text-gray-100 transition-colors" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
              </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
