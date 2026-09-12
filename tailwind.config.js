/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette harmonisée basée sur le logo UCAO CUWA
        // Bleu foncé (dark blue) - couleur principale du logo
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Blue-500
          600: '#2563eb', // Blue-600
          700: '#1d4ed8', // Blue-700
          800: '#1e40af', // Blue-800 - Couleur principale du logo
          900: '#1e3a8a', // Blue-900 - Bleu foncé du logo
          950: '#172554', // Blue-950 - Très foncé
        },
        // Rouge foncé/Bordeaux (dark red/maroon) - couleur secondaire du logo
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c', // Red-700
          800: '#991b1b', // Red-800 - Rouge foncé du logo
          900: '#7f1d1d', // Red-900 - Bordeaux foncé du logo
          950: '#450a0a', // Red-950 - Très foncé
        },
        // Couleur bordeaux spécifique du logo UCAO
        maroon: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1d1d',
          950: '#450a0a',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd4',
          200: '#ead9a8',
          300: '#e0c57a',
          400: '#d4af37',
          500: '#c9a227',
          600: '#a8841c',
          700: '#866617',
          800: '#6b5118',
          900: '#5a4318',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
