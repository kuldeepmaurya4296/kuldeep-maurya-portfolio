'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{about.title}</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={about.image || "/placeholder.svg"}
              alt="About me"
              className="rounded-2xl w-full h-auto shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6">
              {about?.description}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-foreground/60 leading-relaxed text-base sm:text-lg">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and helping others learn web development. Let's build something amazing together !
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
