'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-foreground/5 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}

          <div className='flex flex-col justify-center items-center '>
            <Link
              href="/"
              className="w-12 mb-1 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md dark:shadow-none dark:ring-2 dark:ring-white/20 transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/logo2.png"
                alt="Logo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </Link>
            <h3 className="text-2xl font-bold mb-2">Kuldeep Maurya</h3>
            <p className="text-foreground/60 text-sm">
              Full Stack Developer & AI/ML Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li><Link href="/" className="hover:text-foreground transition">Home</Link></li>
              <li><Link href="/projects" className="hover:text-foreground transition">Projects</Link></li>
              <li><Link href="/contact-us" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 flex-wrap items-center">
              {portfolioData?.contact.socials.map((social) => (
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
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-border pt-2 flex flex-col md:flex-row justify-between items-center gap-2 text-foreground/60 text-sm">
          <p>&copy; {currentYear} Kuldeep Maurya. All rights reserved.</p>
          <p>Designed & Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </motion.footer>
  );
}
