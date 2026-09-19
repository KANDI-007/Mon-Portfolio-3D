import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Lang, type TranslationTree } from '../i18n/translations';

export type ThemeMode = 'dark' | 'light';

type PreferencesContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  t: TranslationTree;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const LANG_KEY = 'portfolio-lang';
const THEME_KEY = 'portfolio-theme';

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === 'en' || saved === 'fr' ? saved : 'fr';
  });

  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(LANG_KEY, next);
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next);
    localStorage.setItem(THEME_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.lang = lang;
  }, [theme, lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      theme,
      setTheme,
      toggleTheme,
      t: translations[lang],
    }),
    [lang, setLang, theme, setTheme, toggleTheme]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider');
  return ctx;
}
