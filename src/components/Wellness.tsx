import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline';

interface TreatmentItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const WellnessSection: React.FC = () => {
  const treatments: TreatmentItem[] = [
    {
      id: 1,
      icon: <HeartIcon className="h-8 w-8" />,
      title: 'Spa Holístico',
      description: 'Tratamientos personalizados que combinan técnicas ancestrales con terapias modernas',
      image: '/images/spa-treatment.jpg'
    },
    {
      id: 2,
      icon: <SparklesIcon className="h-8 w-8" />,
      title: 'Área de Relajación',
      description: 'Espacios diseñados para la tranquilidad y el bienestar completo',
      image: '/images/relaxation-area.jpg'
    },
    {
      id: 3,
      icon: <SunIcon className="h-8 w-8" />,
      title: 'Fitness & Yoga',
      description: 'Clases personalizadas y espacios equipados para mantener su rutina de ejercicios',
      image: '/images/fitness-yoga.jpg'
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Bienestar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un santuario de paz y renovación donde el lujo se encuentra con el bienestar holístico
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-30" />
              </div>

              <div className="text-center">
                <div className="inline-block p-3 bg-awa-accent rounded-full text-white mb-4">
                  {treatment.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
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
                Reserve su Experiencia de Bienestar
              </h3>
              <p className="text-gray-300 mb-8">
                Permítanos crear un programa personalizado para su rejuvenecimiento y bienestar
              </p>
              <button className="bg-white text-awa-primary hover:bg-awa-accent hover:text-white transition-colors duration-300 px-8 py-3">
                Reservar Tratamiento
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WellnessSection;