import React from 'react';
import { motion } from 'framer-motion';
import { CakeIcon, GlobeAltIcon, FireIcon } from '@heroicons/react/24/outline';

interface MenuItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const GastronomySection: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      icon: <CakeIcon className="h-8 w-8" />,
      title: 'Restaurante Principal',
      description: 'Cocina contemporánea con ingredientes locales de la más alta calidad',
      image: '/images/restaurant-main.jpg'
    },
    {
      id: 2,
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: 'Bar & Lounge',
      description: 'Cócteles artesanales y una selecta carta de vinos internacionales',
      image: '/images/bar-lounge.jpg'
    },
    {
      id: 3,
      icon: <FireIcon className="h-8 w-8" />,
      title: 'Experiencias Culinarias',
      description: 'Cenas privadas y experiencias gastronómicas personalizadas',
      image: '/images/culinary-exp.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Gastronomía</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una experiencia culinaria excepcional que combina sabores locales con técnicas contemporáneas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-30" />
              </div>

              <div className="text-center">
                <div className="inline-block p-3 bg-awa-accent rounded-full text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="relative py-16 px-8 bg-awa-primary text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-serif mb-6">
                Reserve su Experiencia Gastronómica
              </h3>
              <p className="text-gray-300 mb-8">
                Permítanos crear una experiencia culinaria inolvidable para usted y sus invitados
              </p>
              <button className="bg-white text-awa-primary hover:bg-awa-accent hover:text-white transition-colors duration-300 px-8 py-3">
                Hacer Reservación
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GastronomySection;