'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function Experience() {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border-l-2 border-primary pl-6 md:pl-8 pb-4 relative"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold">{job.position}</h3>
                  <p className="text-primary font-semibold text-sm sm:text-base">{job.company}</p>
                </div>
                <span className="text-foreground/60 font-semibold text-sm whitespace-nowrap">
                  {job.duration}
                </span>
              </div>
              <p className="text-foreground/70 mb-3 text-sm sm:text-base">{job.description}</p>
              <ul className="space-y-2">
                {job.achievements.map((achievement, aidx) => (
                  <motion.li
                    key={aidx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + aidx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-foreground/60 text-xs sm:text-sm flex gap-2"
                  >
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
