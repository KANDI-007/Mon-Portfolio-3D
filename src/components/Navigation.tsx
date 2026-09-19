import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks, mailto, scrollToSection as smoothScroll } from '../config/site';
import { usePreferences } from '../context/PreferencesContext';

const Logo = () => (
  <button
    type="button"
    onClick={() => smoothScroll('hero')}
    className="group flex items-center justify-center transition-all duration-300 hover:opacity-80"
  >
    <img
      src={new URL('../image/imagelogo/logo.png', import.meta.url).href}
      alt="Kandi Salman LARE Logo"
      className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = target.parentElement?.querySelector('.logo-fallback');
        if (fallback) (fallback as HTMLElement).style.display = 'block';
      }}
    />
    <span className="logo-fallback hidden bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-2xl font-bold text-transparent">
      KS
    </span>
  </button>
);

const LangToggle = ({ compact = false }: { compact?: boolean }) => {
  const { lang, setLang, t } = usePreferences();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex items-center rounded-xl border border-white/10 bg-slate-900/80 p-1 ${
        compact ? 'gap-0.5' : 'gap-1'
      }`}
    >
      {(['en', 'fr'] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`relative rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
              active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId={compact ? 'lang-pill-compact' : 'lang-pill'}
                className="absolute inset-0 rounded-lg bg-gradient-to-b from-sky-400 to-cyan-500 shadow-md shadow-cyan-500/30"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10">{code.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme, t } = usePreferences();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? t.nav.dark : t.nav.light}
      title={isLight ? t.nav.dark : t.nav.light}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-gold-400/40 hover:text-gold-300"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = usePreferences();

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToSection = (id: string) => {
    smoothScroll(id);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="site-nav fixed left-0 right-0 top-0 z-50 border-b border-gold-500/15 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-baseline space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-md px-2.5 py-2 text-sm font-medium transition-all duration-300 lg:px-3 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 shadow-md'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-gold-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LangToggle />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangToggle compact />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-gray-300 transition-all duration-300 hover:bg-slate-800/50 hover:text-primary-400"
              aria-label={t.nav.open}
              aria-expanded={isOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
          >
            {/* Fond 100 % opaque — plus de débordement du contenu */}
            <div className="absolute inset-0 bg-[#050b18]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.12),transparent_42%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.1),transparent_40%)]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 shadow-lg shadow-primary-500/40">
                    <img
                      src={new URL('../image/imagelogo/logo.png', import.meta.url).href}
                      alt=""
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-lg font-bold text-transparent">
                    {t.nav.menu}
                  </span>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.06, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-lg shadow-black/40 transition hover:border-red-400/50 hover:bg-red-500/80"
                  aria-label={t.nav.close}
                >
                  <X size={22} strokeWidth={2.5} />
                </motion.button>
              </div>

              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                <LangToggle />
                <ThemeToggle />
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative w-full overflow-hidden rounded-2xl px-4 py-3.5 text-left text-base font-medium transition ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/40'
                        : 'bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-2.5 w-2.5 rounded-full ${
                          activeSection === item.id
                            ? 'bg-white'
                            : 'border border-primary-400 bg-transparent'
                        }`}
                      />
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="border-t border-white/10 px-6 py-5">
                <p className="mb-4 text-center text-xs text-slate-400">{t.nav.follow}</p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-primary-600 hover:text-white"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={mailto}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-accent-600 hover:text-white"
                    aria-label="Email"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
