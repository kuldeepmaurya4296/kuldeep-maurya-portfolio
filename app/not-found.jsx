'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-background px-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</p>
        <p className="text-foreground/60 text-lg mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
