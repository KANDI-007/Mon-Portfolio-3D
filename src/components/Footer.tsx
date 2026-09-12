import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { socialLinks, site, mailto, telLink, scrollToSection } from '../config/site';

const Logo = () => {
  return (
    <img
      src={new URL('../image/imagelogo/logo.png', import.meta.url).href}
      alt="Kandi Salman LARE Logo"
      className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
      onError={(e) => {
        console.error('Error loading logo');
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const navLinks = [
    { id: 'about', label: 'Profil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expériences' },
    { id: 'projects', label: 'Projets' },
    { id: 'education', label: 'Formation' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-gold-500/15 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              Kandi Salman LARE
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Développeur Full Stack diplômé, créateur d’applications web et mobiles mises en production.
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300 group"
                aria-label="GitHub"
              >
                <Github className="text-gray-300 group-hover:text-white" size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-300 group-hover:text-white" size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300 group"
                aria-label="Instagram"
              >
                <Instagram className="text-gray-300 group-hover:text-white" size={20} />
              </a>
              <a
                href={mailto}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900 transition hover:border-gold-400 hover:text-gold-300 group"
                aria-label="Email"
              >
                <Mail className="text-gray-300 group-hover:text-white" size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-primary-400" />
                <a href={mailto} className="hover:text-gold-300 transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-primary-400" />
                <a href={telLink} className="hover:text-gold-300 transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-primary-400" />
                <span>Lomé, Togo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            Copyright © {currentYear} <span className="text-primary-400 font-semibold">Kandi Salman LARE</span>. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Fait avec <span className="text-red-500">❤️</span> à Lomé
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

