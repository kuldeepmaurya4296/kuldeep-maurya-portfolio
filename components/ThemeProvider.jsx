'use client';
import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const prefersDark = localStorage.getItem('theme') === 'dark';
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return children;
}
