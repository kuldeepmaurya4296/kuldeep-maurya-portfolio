'use client';

import { use } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../footer";
import Navbar from "../navbar";

export default function IndivisualProject({ project }) {
  

  if (!project) {
    notFound();
  }

  const hasLive = Boolean(project.liveLink);
  const hasGithub = Boolean(project.githubLink);
  const hasScreenshots = project.screenshots?.length > 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Navbar />

      <main className="w-full bg-background">

        {/* ===== Banner ===== */}
        <motion.section
          className="relative w-full h-96 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.bannerImage || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {project.subtitle}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* -------- Content -------- */}
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >

            {/* ===== Overview Section ===== */}
            <motion.section variants={itemVariants}>

              {/* mobile = button first | desktop = title left, button right */}
              <div
                className="
                  flex flex-col-reverse sm:flex-row
                  sm:items-center sm:justify-between
                  gap-4 sm:gap-6
                  mb-6
                "
              >
                {/* Overview Title */}
                <h2 className="text-3xl font-bold text-center sm:text-left">
                  Overview
                </h2>

                {/* Live Button */}
                {hasLive && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="
                      bg-primary text-primary-foreground
                      px-5 py-2.5
                      rounded-xl
                      font-semibold
                      shadow-sm
                      hover:opacity-90 hover:shadow-md
                      transition-all duration-200
                      w-full sm:w-auto
                      text-center
                    "
                  >
                    View Live Project
                  </Link>
                )}
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.description}
              </p>
            </motion.section>

            {/* ===== Technologies ===== */}
            {project.technologies?.length > 0 && (
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">
                  Technologies Used
                </h2>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ===== Problem ===== */}
            {project.problem && (
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">
                  The Problem
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.problem}
                </p>
              </motion.section>
            )}

            {/* ===== Solutions ===== */}
            {project.solutions?.length > 0 && (
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>

                <ul className="space-y-3">
                  {project.solutions.map((solution, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary text-xl mt-1 font-bold">
                        ✓
                      </span>
                      <span className="text-lg text-foreground/80">
                        {solution}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* ===== Screenshots ===== */}
            {hasScreenshots && (
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-6">
                  Screenshots
                </h2>

                <div className="grid sm:grid-cols-2  gap-8">
                  {project.screenshots.map((screenshot, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col gap-3 rounded-xl shadow-lg p-3 bg-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={screenshot}
                        alt={`Screenshot ${idx + 1}`}
                        className="rounded-xl w-full h-auto object-cover hover:scale-[1.03] transition duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ===== CTA Buttons ===== */}
            <motion.section
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-8"
            >
              {hasLive && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="
                    bg-primary text-primary-foreground
                    px-8 py-3 rounded-lg
                    font-semibold hover:opacity-90 transition
                  "
                >
                  View Live Project
                </Link>
              )}

              {hasGithub && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="
                    border-2 border-primary
                    text-primary px-8 py-3 rounded-lg
                    font-semibold hover:bg-primary/10 transition
                  "
                >
                  View on GitHub
                </Link>
              )}

              <Link
                href="/projects"
                className="
                  border-2 border-foreground/20
                  text-foreground px-8 py-3 rounded-lg
                  font-semibold hover:bg-foreground/5 transition
                "
              >
                Back
              </Link>
            </motion.section>
          </motion.div>
        </div>
      </main>
      {/* <Contact /> */}
      <Footer />
    </motion.div>
  );
}
