import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../config/socialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Préparer le message pour WhatsApp
      const whatsappMessage = `*Nouveau message du portfolio*\n\n` +
        `*Nom:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Sujet:* ${formData.subject}\n\n` +
        `*Message:*\n${formData.message}`;
      
      // Encoder le message pour l'URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = '22871037803'; // Numéro WhatsApp sans le +
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, '_blank');
      
      // Simuler un délai pour l'animation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary-950/30 via-accent-950/20 to-transparent relative">
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
              Restons en Contact
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-lg shadow-primary-500/50"></div>
          <p className="text-gray-200 mt-4 text-lg drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
            N'hésitez pas à me contacter pour tout projet ou collaboration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/60 via-blue-900/30 to-slate-800/60 border border-primary-700/30 rounded-2xl p-8 shadow-xl shadow-primary-900/20 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Effets de fond */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-50"></div>
              
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-100 mb-6 relative z-10"
              >
                Informations de Contact
              </motion.h3>
              <div className="space-y-6 relative z-10">
                {[
                  { icon: Mail, label: 'Email', value: 'kandilare20@gmail.com', link: 'mailto:kandilare20@gmail.com', gradient: 'from-primary-600 to-accent-600', delay: 0.1 },
                  { icon: Phone, label: 'Téléphone', value: '+228 91 67 61 67', link: 'tel:+22891676167', gradient: 'from-primary-500 to-accent-500', delay: 0.2 },
                  { icon: MapPin, label: 'Localisation', value: 'Lomé, Togo', link: null, gradient: 'from-primary-400 to-accent-400', delay: 0.3 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        className="flex items-start gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group border border-slate-600 hover:border-primary-500/50 relative overflow-hidden"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                          className={`bg-gradient-to-br ${item.gradient} p-3 rounded-lg transition-transform duration-300 relative z-10`}
                        >
                          <item.icon className="text-white" size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                          <p className="text-gray-100 font-semibold group-hover:text-primary-200 transition-colors">{item.value}</p>
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-700/30 border border-slate-600">
                        <div className={`bg-gradient-to-br ${item.gradient} p-3 rounded-lg`}>
                          <item.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                          <p className="text-gray-100 font-semibold">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 relative z-10"
              >
                <h4 className="text-gray-100 font-semibold mb-4">Réseaux Sociaux</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: socialLinks.github, label: 'GitHub', hoverColor: 'hover:bg-primary-600 hover:border-primary-600', delay: 0.5 },
                    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn', hoverColor: 'hover:bg-blue-500 hover:border-blue-500', delay: 0.6 },
                    { icon: Instagram, href: socialLinks.instagram, label: 'Instagram', hoverColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:border-purple-500', delay: 0.7 },
                    ...(socialLinks.twitter ? [{ icon: Twitter, href: socialLinks.twitter, label: 'Twitter', hoverColor: 'hover:bg-accent-800 hover:border-accent-800', delay: 0.8 }] : []),
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: social.delay }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-br from-slate-800/60 to-blue-900/30 border border-primary-700/30 rounded-lg flex items-center justify-center ${social.hoverColor} transition-all duration-300 group backdrop-blur-sm relative overflow-hidden`}
                      aria-label={social.label}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <social.icon className="text-gray-300 group-hover:text-white relative z-10" size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-100 mb-4">Disponibilité</h3>
              <p className="text-gray-300 leading-relaxed">
                Je suis actuellement <strong className="text-primary-400">disponible</strong> pour des opportunités de stage,
                projets freelance, ou collaboration sur des projets innovants en développement mobile et intelligence artificielle.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/60 via-primary-900/30 to-slate-800/60 border border-primary-700/30 rounded-2xl p-8 shadow-xl shadow-primary-900/20 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Effets de fond animés */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-50"
              style={{ backgroundSize: '200% 200%' }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            />
            
            {/* Particules animées */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center"
                >
                  <Send className="text-primary-300" size={20} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-100">Envoyez-moi un Message</h3>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Nom complet', placeholder: 'Votre nom', type: 'text', delay: 0.1 },
                { id: 'email', label: 'Email', placeholder: 'votre.email@exemple.com', type: 'email', delay: 0.2 },
                { id: 'subject', label: 'Sujet', placeholder: 'Sujet du message', type: 'text', delay: 0.3 },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: field.delay }}
                  className="relative"
                >
                  <label htmlFor={field.id} className="block text-gray-300 mb-2 font-medium">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 transition-all duration-300 relative z-10"
                    placeholder={field.placeholder}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <motion.div className="relative">
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 transition-all duration-300 resize-none relative z-10"
                    placeholder="Votre message..."
                    required
                  />
                  {/* Ligne animée sous le textarea au focus */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    initial={{ width: 0 }}
                    whileFocus={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-xl font-semibold text-white shadow-xl shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 30px rgba(59, 130, 246, 0.8)',
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full relative z-10"
                    />
                    <span className="relative z-10">Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Envoyer le Message</span>
                    <motion.div
                      whileHover={{ x: 5, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Send size={20} />
                    </motion.div>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <p className="text-green-400 text-sm">Message préparé ! WhatsApp va s'ouvrir pour finaliser l'envoi.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3 animate-fade-in">
                  <XCircle className="text-red-400" size={20} />
                  <p className="text-red-400 text-sm">Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email.</p>
                </div>
              )}
            </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4">
            <p className="text-gray-400">
              Conçu avec <span className="text-red-500">♥</span> par{' '}
              <span className="text-primary-700 font-semibold">Salman LARE Kandi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
