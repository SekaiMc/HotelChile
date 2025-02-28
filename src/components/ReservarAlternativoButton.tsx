import React from 'react';

const ReservarAlternativoButton: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <a 
      href="#rooms" 
      className={`fixed bottom-20 right-6 z-50 flex items-center justify-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Reservar Alternativo"
    >
      <svg 
        width="45" 
        height="45" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="#5E0A24"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V9" />
        <path d="M2 12V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V12" />
        <rect x="2" y="9" width="20" height="3" />
        <path d="M6 15H10V18H6V15Z" />
        <path d="M14 15H18V18H14V15Z" />
      </svg>
    </a>
  );
};

export default ReservarAlternativoButton;
