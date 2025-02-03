import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../contexts/TitleContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function Logo() {
  const { currentTitle } = useTitle();
  const { theme } = useTheme();
  const Icon = currentTitle.icon;

  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentTitle.logoUrl ? (
          <img 
            src={theme === 'dark' ? currentTitle.logoUrl.dark : currentTitle.logoUrl.light}
            alt={currentTitle.name}
            className="h-8 object-contain"
          />
        ) : (
          <>
            <Icon className={`w-6 h-6 bg-gradient-to-r ${currentTitle.gradient} transition-all duration-300`} />
            <motion.h1
              className={`text-xl font-bold bg-gradient-to-r ${currentTitle.gradient} bg-clip-text text-transparent transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
            >
              {currentTitle.name}
            </motion.h1>
          </>
        )}
      </motion.div>
    </Link>
  );
}