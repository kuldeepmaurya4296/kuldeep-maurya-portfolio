'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newError = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };

    if (newError.name || newError.email || newError.message) {
      setError(newError);
      return;
    }

    console.log('Submitted Data:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-16  bg-foreground/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-12 md:w-16 h-1 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" flex flex-col justify-between"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground/60 text-xs sm:text-sm mb-2 uppercase">Email</h3>
              <Link href={`mailto:${contact.email}`} className="text-lg sm:text-2xl font-bold hover:text-primary transition break-all">
                {contact.email}
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground/60 text-xs sm:text-sm mb-2 uppercase">Phone</h3>
              <Link href={`tel:${contact.phone}`} className="text-lg sm:text-2xl font-bold hover:text-primary transition">
                {contact.phone}
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground/60 text-xs sm:text-sm mb-2 uppercase">Location</h3>
              <p className="text-lg sm:text-2xl font-bold">{contact.location}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-foreground/60 text-xs sm:text-sm mb-4 uppercase">Connect</h3>
              <div className="flex gap-4 flex-wrap items-center">
                {contact.socials.map((social) => (
                  <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={social.icon || '/default.png'} // fallback if icon not available
                      alt={social.name}
                      width={40}   // fixed size
                      height={40}  // fixed size
                    />
                  </Link>
                ))}
              </div>

            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:border-primary transition text-sm sm:text-base ${error[field] ? 'border-red-500' : 'border-border'
                      }`}
                    placeholder={`Your ${field}`}
                    required
                  />
                ) : (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:border-primary transition resize-none text-sm sm:text-base ${error[field] ? 'border-red-500' : 'border-border'
                      }`}
                    placeholder="Your message here..."
                    required
                  />
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer w-full py-3 rounded-lg font-bold transition text-sm sm:text-base ${submitted ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground hover:opacity-90'
                }`}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
