'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function Skills() {
  const { skills } = portfolioData;
  const categories = [...new Set(skills.map((s) => s.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-foreground/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        {categories.map((category) => (
          <div key={category} className="mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground/80">{category}</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-background p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                      <span className="text-xs sm:text-sm text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
