'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Freelancing from '@/components/sections/freelancing';
import Contact from '@/components/sections/contact';
import LoadingScreen from '@/components/loading-screen';
import Head from 'next/head';
import DownloadResumeButton from '../ui/DownloadResumeButton';

export default function HomePage({portfolioData}) {
  const file = portfolioData?.files?.resume;
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
      >
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <DownloadResumeButton file={file}/>
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Freelancing />
        <Contact />
      </main>
      <Footer />
    </motion.div>
      </>
  );
}
