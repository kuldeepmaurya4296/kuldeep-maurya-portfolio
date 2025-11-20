'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function Freelancing() {
  const { freelancing } = portfolioData;

  return (
    <section id="freelancing" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/60 rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 text-white text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{freelancing.title}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {freelancing.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {freelancing.services.map((service) => (
              <span
                key={service}
                className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="text-xl sm:text-2xl font-bold mb-8">{freelancing.rate}</div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white text-primary px-6 sm:px-8 py-2 sm:py-4 rounded-lg font-bold hover:opacity-90 transition text-sm sm:text-base"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
