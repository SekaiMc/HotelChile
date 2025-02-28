import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const HotelConcept: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sec2.jpg"
          alt="Hotel Concept"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay diagonal blanco */}
      <div className="absolute inset-0 z-10">
        <div className="absolute right-0 top-0 w-[70%] h-[150%] bg-white transform rotate-[15deg] translate-x-[20%] translate-y-[-25%] rounded-l-[100px]" />
      </div>

      {/* Círculo decorativo */}
      <div className="absolute left-0 top-[50%] transform -translate-y-1/2 z-20">
        <div className="w-[400px] h-[400px] border-[40px] border-white/30 rounded-full transform -translate-x-1/2" />
      </div>

      {/* Texto PERFECTION */}
      <div className="absolute bottom-20 right-20 z-30">
        <h2 className="text-[80px] font-light tracking-wider text-neutral-800">
          PERFECTION
        </h2>
      </div>

      {/* Overlay gradiente para el agua brillante */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent z-5" />
    </section>
  );
};

export default HotelConcept;