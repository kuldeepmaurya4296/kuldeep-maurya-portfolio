'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio-data';
import DownloadResumeButton from '../ui/DownloadResumeButton';

export default function Hero() {
  const { hero, resume } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background pt-20 sm:pt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 
             flex flex-col md:flex-row items-center justify-between 
             gap-8 md:gap-12 py-8"
      >
        {/* Content */}
        <motion.div
          variants={itemVariants}
          className="flex-1 z-10 w-full order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-primary font-semibold text-base sm:text-lg mb-2 sm:mb-4">
              Welcome to my portfolio
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                 font-bold mb-4 sm:mb-6 leading-tight"
          >
            {hero.name} kuchh
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-foreground/70 mb-4 sm:mb-6"
          >
            {hero.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-foreground/60 mb-8 max-w-lg leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full cursor-pointer sm:w-auto bg-primary text-primary-foreground 
                     px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                     transition text-sm sm:text-base"
              >
                {hero.cta}
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full cursor-pointer sm:w-auto border-2 border-primary 
                     text-primary px-6 sm:px-8 py-3 sm:py-4 
                     rounded-lg font-semibold hover:bg-primary/10 
                     transition text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
            </Link>
            {/* <DownloadResumeButton/> */}
          </motion.div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          variants={itemVariants}
          className="flex-1 z-10 w-full order-1 md:order-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative w-full max-w-md mx-auto">

            {/* Glow / Gradient */}
            <div
              className="
          absolute inset-0 
          bg-gradient-to-r from-primary to-primary/20 
          blur-3xl opacity-50
          rounded-full md:rounded-2xl
        "
            />

            {/* Image */}
            <img
              src={hero.image || "/kuldeep.png"}
              alt={hero.name}
              className="
          relative w-full h-auto shadow-2xl object-cover

          /* Mobile: Circle */
          rounded-full aspect-square 

          /* Desktop: Rectangle */
          md:aspect-auto md:rounded-2xl
        "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="text-foreground/50">↓</span>
      </motion.div>
    </section>
  );
}
