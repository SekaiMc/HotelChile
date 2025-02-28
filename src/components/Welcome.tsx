import React from 'react';
import { motion } from 'framer-motion';

const Welcome: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left side with image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative overflow-hidden group">
              {/* Imagen con efecto de hover mejorado */}
              <div className="aspect-w-16 aspect-h-12 rounded-sm shadow-[0_5px_20px_rgb(0,0,0,0.08)]">
                <img 
                  src="/images/sec2.jpg" 
                  alt="Hotel view" 
                  className="w-full h-full object-cover transform transition-all duration-700 ease-out will-change-transform group-hover:scale-105"
                />
                {/* Overlay con gradiente mejorado */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* HC SVG Overlay con animación refinada */}
              <motion.svg 
                className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-soft-light" 
                viewBox="0 0 800 600" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#glow)">
                  {/* H letter */}
                  <motion.path 
                    d="M200 150 L200 450 L250 450 L250 325 L350 325 L350 450 L400 450 L400 150 L350 150 L350 275 L250 275 L250 150 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />
                  
                  {/* C letter */}
                  <motion.path 
                    d="M450 150 C350 150 350 450 450 450 L550 450" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                  />
                </g>
              </motion.svg>
            </div>
          </motion.div>
          
          {/* Right side with welcome message */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2 md:pl-8 lg:pl-12 self-center"
          >
            <div className="relative">
              {/* Elemento decorativo refinado */}
              <div className="absolute -left-3 top-0 w-[2px] h-16 bg-gradient-to-b from-[#5E0A24]/30 via-[#5E0A24]/20 to-transparent" />
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight tracking-normal">
                Bienvenidos a Hotel AWA
              </h2>
              
              <div className="w-20 h-[1px] bg-gradient-to-r from-[#5E0A24]/30 to-transparent mb-8" />
              
              <div className="space-y-5">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Descubre un oasis de lujo y tranquilidad en el corazón de la naturaleza. 
                  Hotel AWA ofrece una experiencia única donde el confort moderno se 
                  encuentra con la belleza natural del entorno.
                </p>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  Nuestras instalaciones de clase mundial, servicio personalizado y 
                  atención al detalle garantizan una estancia inolvidable para cada uno 
                  de nuestros huéspedes.
                </p>
              </div>
              
              <motion.button 
                className="mt-8 relative inline-flex items-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 px-8 py-3 bg-[#5E0A24] text-white text-base md:text-lg font-light tracking-wide rounded-sm">
                  Descubrir más
                </span>
                <div className="absolute inset-0 -m-[1px] rounded-sm bg-gradient-to-r from-[#5E0A24] via-[#8B1034] to-[#5E0A24] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
