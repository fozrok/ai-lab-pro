import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div
        className="relative flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h1 className="text-xl font-bold tracking-tight ml-2 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent transition-colors duration-300">
          AI Lab <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">PRO</span>
        </h1>
      </motion.div>
    </Link>
  );
}