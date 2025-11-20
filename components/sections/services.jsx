'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function Services() {
  const { services } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconMap = {
    code: '💻',
    palette: '🎨',
    server: '⚙️',
    briefcase: '💼',
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-foreground/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-background p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition border border-border"
            >
              <div className="text-3xl sm:text-4xl mb-4">{iconMap[service.icon] || '✨'}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
