import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { socialLinks, site, mailto, telLink, scrollToSection } from '../config/site';
import { usePreferences } from '../context/PreferencesContext';

const Logo = () => (
  <img
    src={new URL('../image/imagelogo/logo.png', import.meta.url).href}
    alt="Kandi Salman LARE Logo"
    className="h-12 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      target.style.display = 'none';
    }}
  />
);

const Footer = () => {
  const { t } = usePreferences();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-gold-500/15 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <h3 className="mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-xl font-bold text-transparent">
              Kandi Salman LARE
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">{t.footer.blurb}</p>
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300"
                aria-label="GitHub"
              >
                <Github className="text-gray-300 group-hover:text-white" size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-300 group-hover:text-white" size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300"
                aria-label="Instagram"
              >
                <Instagram className="text-gray-300 group-hover:text-white" size={20} />
              </a>
              <a
                href={mailto}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300"
                aria-label="Email"
              >
                <Mail className="text-gray-300 group-hover:text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-100">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-300 transition-colors duration-300 hover:text-primary-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-100">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-primary-400" />
                <a href={mailto} className="transition-colors hover:text-gold-300">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-primary-400" />
                <a href={telLink} className="transition-colors hover:text-gold-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-primary-400" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-gray-300">
            Copyright © {currentYear}{' '}
            <span className="font-semibold text-primary-400">Kandi Salman LARE</span>. {t.footer.rights}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            {t.footer.made} <span className="text-red-500">❤️</span> {t.footer.inLome}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
