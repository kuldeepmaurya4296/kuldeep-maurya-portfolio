'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio-data';

export default function Projects() {
  const { projects } = portfolioData;
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <Link href={`/projects/${project.id}`}>
                <div className="bg-background border border-border rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-foreground/5">
                    <motion.img
                      src={project.image}
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
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-foreground/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <motion.div
                      className="text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform"
                      whileHover={{ x: 4 }}
                    >
                      View Project →
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Link href="/projects">
            <button className="bg-primary cursor-pointer text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
