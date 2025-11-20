'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const dotVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    animate: {
      y: [0, -20, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Kuldeep Maurya</h1>
        <div className="flex gap-3">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              variants={dotVariants}
              animate="animate"
              className="w-3 h-3 bg-primary rounded-full"
              transition={{ delay: dot * 0.15 }}
            />
          ))}
        </div>
        <p className="text-foreground/60">Loading portfolio...</p>
      </motion.div>
    </div>
  );
}
