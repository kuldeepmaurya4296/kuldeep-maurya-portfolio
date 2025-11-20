'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-16 md:py-24 lg:py-32 bg-foreground/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-background p-6 sm:p-8 rounded-lg sm:rounded-xl border border-border hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold text-sm sm:text-base mb-2">{edu.school}</p>
                  <p className="text-foreground/70 text-sm sm:text-base">{edu.details}</p>
                </div>
                <span className="text-foreground/60 font-semibold text-sm whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
