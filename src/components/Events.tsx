import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

interface EventSpace {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  capacity: string;
}

const EventsSection: React.FC = () => {
  const eventSpaces: EventSpace[] = [
    {
      id: 1,
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'Salón Principal',
      description: 'Espacio versátil ideal para bodas y eventos sociales de gran escala',
      image: '/images/main-hall.jpg',
      capacity: 'Hasta 300 personas'
    },
    {
      id: 2,
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Salas de Conferencias',
      description: 'Espacios equipados con la última tecnología para reuniones empresariales',
      image: '/images/conference-room.jpg',
      capacity: 'Hasta 100 personas'
    },
    {
      id: 3,
      icon: <StarIcon className="h-8 w-8" />,
      title: 'Terraza Panorámica',
      description: 'Espacio al aire libre perfecto para eventos y celebraciones exclusivas',
      image: '/images/terrace-events.jpg',
      capacity: 'Hasta 150 personas'
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
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Eventos & Reuniones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Espacios excepcionales para eventos memorables y reuniones exitosas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {eventSpaces.map((space) => (
            <motion.div
              key={space.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-30" />
                <div className="absolute bottom-4 right-4 bg-white px-4 py-1 text-sm text-awa-primary">
                  {space.capacity}
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block p-3 bg-awa-accent rounded-full text-white mb-4">
                  {space.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3">{space.title}</h3>
                <p className="text-gray-600">{space.description}</p>
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
                Planifique su Próximo Evento
              </h3>
              <p className="text-gray-300 mb-8">
                Nuestro equipo de expertos le ayudará a crear un evento inolvidable
              </p>
              <button className="bg-white text-awa-primary hover:bg-awa-accent hover:text-white transition-colors duration-300 px-8 py-3">
                Solicitar Información
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;