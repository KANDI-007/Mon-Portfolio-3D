import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappLink, site } from '../config/site';
import { usePreferences } from '../context/PreferencesContext';

const WhatsAppFloat = () => {
  const { t } = usePreferences();

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.whatsapp} — ${site.name}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 md:bottom-8 md:right-8"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">{t.whatsapp}</span>
    </motion.a>
  );
};

export default WhatsAppFloat;
