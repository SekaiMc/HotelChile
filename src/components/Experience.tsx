import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../i18n/LanguageContext';

interface ExperienceItem {
  id: string;
  icon: React.ReactNode;
  image: string;
}

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      id: 'spa',
      icon: <SparklesIcon className="h-8 w-8" />,
      image: '/images/spa.jpg'
    },
    {
      id: 'dining',
      icon: <HeartIcon className="h-8 w-8" />,
      image: '/images/dining.jpg'
    },
    {
      id: 'adventure',
      icon: <GlobeAltIcon className="h-8 w-8" />,
      image: '/images/adventure.jpg'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">{t('experience.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={exp.image}
                  alt={t(`experience.items.${exp.id}.title`)}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-30" />
              </div>

              <div className="text-center">
                <div className="inline-block p-3 bg-awa-accent rounded-full text-white mb-4">
                  {exp.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3">{t(`experience.items.${exp.id}.title`)}</h3>
                <p className="text-gray-600">{t(`experience.items.${exp.id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative py-16 px-8 bg-awa-primary text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-serif mb-6">
                {t('experience.cta.title')}
              </h3>
              <p className="text-gray-300 mb-8">
                {t('experience.cta.description')}
              </p>
              <button className="bg-white text-awa-primary hover:bg-awa-accent hover:text-white transition-colors duration-300 px-8 py-3">
                {t('experience.cta.button')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;