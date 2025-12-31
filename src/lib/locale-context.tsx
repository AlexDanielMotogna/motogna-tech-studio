'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, locales, getTranslation } from './i18n';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslation>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  // Check localStorage first (user's previous choice)
  const saved = localStorage.getItem('locale') as Locale;
  if (saved && locales.includes(saved)) {
    return saved;
  }

  // Detect from browser language
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Map browser language to our supported locales
  const langMap: Record<string, Locale> = {
    'en': 'en',
    'de': 'de',
    'es': 'es',
    'it': 'it',
    'ro': 'ro',
  };

  return langMap[langCode] || defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Detect browser language on mount
  useEffect(() => {
    const detectedLocale = detectBrowserLocale();
    setLocaleState(detectedLocale);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  }, []);

  const t = getTranslation(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
