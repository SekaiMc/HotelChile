import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../i18n/LanguageContext';

interface NavLink {
  name: string;
  path: string;
}

interface NavbarProps {
  isScrolled: boolean;
  isVisible: boolean;
  isLangMenuOpen: boolean;
}

interface BookNowButtonProps {
  className?: string;
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isVisible, isLangMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navigationLinks: NavLink[] = [
    { name: t('header.rooms'), path: '#rooms' },
    { name: t('header.dining'), path: '#dining' },
    { name: t('header.experiences'), path: '#experiences' },
    { name: t('header.location'), path: '#location' },
    { name: t('header.contact'), path: '#contact' },
  ];

  const BookNowButton: React.FC<BookNowButtonProps> = ({ className = '', onClick = () => {} }) => (
    <button
      className={`${className} bg-[#C4A484] text-white uppercase tracking-[1.5px] hover:bg-[#B39476] transition-all duration-300 font-light ${
        isLangMenuOpen ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
      } whitespace-nowrap`}
      onClick={onClick}
    >
      Reservar ahora
    </button>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white text-gray-800 shadow-md pt-0'
          : 'bg-transparent text-white pt-7'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-2 md:px-4 lg:px-6">
        <div className="flex items-center h-[70px] relative justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden absolute left-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:opacity-80 transition-opacity ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className={`logo-container transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'absolute left-4 md:left-6 lg:left-8 opacity-0 md:opacity-100'
              : 'ml-2 md:ml-2 lg:ml-2'
          }`}>
            <a href="/" className="inline-block">
              <img
                src="/images/1740637010990.svg"
                alt="AWA Hotel"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </a>
          </div>

          <div className={`menu-container flex items-center justify-center transition-all duration-300 ease-in-out ${
            isScrolled ? 'w-full' : 'ml-10'
          } group relative`}>
            <div className={`flex items-center gap-8 transition-all duration-300 ease-in-out ${
              isScrolled ? 'mx-auto translate-x-[4px]' : ''
            }`}>
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-[14px] uppercase tracking-[1.5px] hover:opacity-70 transition-opacity duration-200 font-light ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } md:text-[13px] lg:text-[14px] whitespace-nowrap`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className={`transition-all duration-300 ease-in-out absolute ${
              isScrolled
                ? 'opacity-0 group-hover:opacity-100 right-4 md:right-6 lg:right-8'
                : 'opacity-100 relative right-0 ml-10'
            }`}>
              <BookNowButton
                className="md:px-2 lg:px-4 py-4 text-[14px] md:text-[13px] lg:text-[14px] -my-2"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96' : 'max-h-0'
          } ${isScrolled ? 'bg-white' : 'bg-[#111111]'}`}
        >
          <div className="px-4 py-6 space-y-4">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`block text-[13px] uppercase tracking-[1.5px] py-2 hover:opacity-70 transition-all duration-300 font-light ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <BookNowButton
              className="w-full px-5 py-2.5 text-[12px] mt-4"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
