'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-white/10 border border-gray-400 hover:border-[#D4A574]/50 transition-colors duration-200"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sliding background */}
      <motion.div
        className="absolute inset-0.5 rounded-full bg-[#D4A574]"
        initial={false}
        animate={{
          x: theme === 'dark' ? 0 : 28,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ width: '24px', height: '24px' }}
      />

      {/* Icons */}
      <div className="relative w-full h-full flex items-center justify-between px-1.5">
        <Moon className={`w-4 h-4 transition-colors duration-200 ${theme === 'dark' ? 'text-[#0A0A0A]' : 'text-gray-500'}`} />
        <Sun className={`w-4 h-4 transition-colors duration-200 ${theme === 'light' ? 'text-[#0A0A0A]' : 'text-gray-500'}`} />
      </div>
    </motion.button>
  );
}
