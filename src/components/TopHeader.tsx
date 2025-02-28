import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface TopHeaderProps {
  isScrolled: boolean;
  isVisible: boolean;
  onLangMenuOpenChange?: (isOpen: boolean) => void;
}

const languages = [
  { code: 'ES', name: 'Español' },
  { code: 'PT', name: 'Português' },
  { code: 'EN', name: 'English' }
] as const;

export const TopHeader: React.FC<TopHeaderProps> = ({ isScrolled, isVisible, onLangMenuOpenChange }) => {
  const { language, setLanguage, t } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setShowMenu(false);
        onLangMenuOpenChange?.(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onLangMenuOpenChange]);

  const handleLanguageChange = (newLanguage: typeof languages[number]['code']) => {
    console.log('Cambiando idioma a:', newLanguage);
    setLanguage(newLanguage);
    setShowMenu(false);
    onLangMenuOpenChange?.(false);
  };

  return (
    <div 
      className={`h-7 bg-[#c8a27c] flex items-center text-sm leading-none text-white fixed w-full z-[51] transition-all duration-700 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        top: 0,
        transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)'
      }}
    >
      <div className="container mx-auto flex justify-between items-center text-[0.8rem]">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 11-12 0 6 6 0 0112 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12a6 6 0 000 12v2a2 2 0 002 2h12a2 2 0 002-2v-2a6 6 0 00-6-6H4a6 6 0 00-6 6v2a2 2 0 002 2h12a2 2 0 002-2v-2a6 6 0 00-6-6zM12 6a6 6 0 000 12v2a2 2 0 002 2h12a2 2 0 002-2v-2a6 6 0 00-6-6H4a6 6 0 00-6 6v2a2 2 0 002 2h12a2 2 0 002-2V6z" />
            </svg>
            +593 99 999 9999
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l12 9h-3v8h-6v-8h-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10.5V6a1.5 1.5 0 00-3 0V10.5l-5.25 5.25-1.41-1.41L13 10.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            info@awahotel.com
          </span>
        </div>
        <span className="top-header-container">Reservas</span>
        <div className="language-selector relative z-[9999]">
          <button
            type="button"
            className="flex items-center text-white hover:opacity-80 transition-all duration-300 px-4 py-2 uppercase"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
              onLangMenuOpenChange?.(!showMenu);
            }}
            aria-expanded={showMenu}
            aria-haspopup="true"
          >
            <span>{languages.find(lang => lang.code === language)?.name}</span>
            <svg
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`absolute right-0 top-full mt-1 bg-white rounded-none shadow-lg overflow-hidden min-w-[120px] z-[9999] transition-all duration-300 ${
              showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            role="menu"
            aria-orientation="vertical"
            onClick={(e) => e.stopPropagation()}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={`block w-full text-left px-4 py-2.5 transition-colors duration-300 cursor-pointer ${
                  language === lang.code
                    ? 'bg-[#C4A484] text-white hover:bg-[#B39476]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="menuitem"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Botón de idioma clickeado:', lang.code);
                  handleLanguageChange(lang.code);
                }}
                onClick={(e) => e.preventDefault()}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;