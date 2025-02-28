import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import es from './locales/es.json';
import pt from './locales/pt.json';
import en from './locales/en.json';

type Language = 'ES' | 'PT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ES: es,
  PT: pt,
  EN: en,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      return savedLanguage && ['ES', 'PT', 'EN'].includes(savedLanguage) ? savedLanguage : 'ES';
    } catch (error) {
      console.error('Error al inicializar el idioma:', error);
      return 'ES';
    }
  });

  const handleSetLanguage = useCallback((newLanguage: Language) => {
    try {
      console.log('Cambiando idioma a:', newLanguage);
      if (!['ES', 'PT', 'EN'].includes(newLanguage)) {
        throw new Error(`Idioma no válido: ${newLanguage}`);
      }

      // Verificar que las traducciones existen
      if (!translations[newLanguage]) {
        throw new Error(`No se encontraron traducciones para: ${newLanguage}`);
      }

      // Actualizar el estado y localStorage
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      document.documentElement.lang = newLanguage.toLowerCase();

      // Forzar actualización de componentes
      window.dispatchEvent(new Event('languagechange'));
      console.log('Idioma cambiado exitosamente a:', newLanguage);
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
    }
  }, []);

  const t = useCallback((key: string) => {
    try {
      const keys = key.split('.');
      let currentTranslation: any = translations[language];

      // Verificar que tenemos traducciones para el idioma actual
      if (!currentTranslation) {
        console.error(`No hay traducciones para el idioma: ${language}`);
        return key;
      }

      for (const k of keys) {
        if (currentTranslation[k] === undefined) {
          console.warn(`Translation missing for key: ${key} in language: ${language}`);
          return key;
        }
        currentTranslation = currentTranslation[k];
      }

      return currentTranslation;
    } catch (error) {
      console.error('Error al obtener la traducción:', error);
      return key;
    }
  }, [language]);

  // Log cuando el idioma cambia
  useEffect(() => {
    console.log('Idioma actual:', language);
    console.log('Traducciones disponibles:', Object.keys(translations));
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  // Escuchar cambios de idioma desde otros componentes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'language' && e.newValue) {
        handleSetLanguage(e.newValue as Language);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [handleSetLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};