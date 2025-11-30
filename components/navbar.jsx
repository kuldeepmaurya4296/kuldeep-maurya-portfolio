'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './theme-toggle';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  // Scroll hide / show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact-us" },
  ];

  // Only match pathname (no hash logic)
  const isActive = (href) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="w-12 h-12 rounded-full overflow-hidden shadow-md dark:shadow-none dark:ring-2 dark:ring-white/20 transition-all duration-300 hover:scale-105"
        >
          <Image src="/logo2.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-foreground/70 hover:text-foreground transition font-medium"
            >
              {/* Text */}
              <span className={`${isActive(link.href) ? "text-primary font-semibold" : ""}`}>
                {link.label}
              </span>

              {/* Underline Animation */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300
                  ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="flex flex-col gap-4 px-4 py-4 bg-background border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative text-foreground/70 hover:text-foreground transition font-medium"
            >
              <span className={`${isActive(link.href) ? "text-primary font-semibold" : ""}`}>
                {link.label}
              </span>

              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300
                  ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
