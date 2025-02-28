import React from 'react';
import { motion } from 'framer-motion';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Nuestras Habitaciones</h2>
          <div className="w-20 h-0.5 bg-[#5E0A24] mx-auto"></div>
        </motion.div>
        
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-xl text-gray-500 italic">Nueva sección en construcción...</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;