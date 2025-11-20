'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { portfolioData } from '@/data/portfolio-data';
import Contact from './contact';
import Head from 'next/head';


export default function AllProjects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
   
      <Navbar />
      <main className="w-full min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pb-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">All Projects</h1>
              <p className="text-lg text-foreground/70 max-w-2xl">
                Explore my complete portfolio of web development projects, from enterprise applications to innovative startups.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants} className="group">
                  <Link href={`/projects/${project.id}`}>
                    <div className="bg-background border border-border rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-40 sm:h-48 overflow-hidden bg-foreground/5">
                        <motion.img
                          src={project.image || '/ecommerce-website.jpg'}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 flex flex-col flex-1">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mb-4 flex-1 line-clamp-2">
                          {project.subtitle}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs text-foreground/50">+{project.technologies.length - 3}</span>
                          )}
                        </div>

                        <motion.div
                          className="text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform"
                          whileHover={{ x: 4 }}
                        >
                          View Details →
                        </motion.div>
                        
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-4 bg-primary/5 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-foreground/70 mb-8 text-sm sm:text-base">
                Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
       <Contact />
      <Footer />
    </>
  );
}
