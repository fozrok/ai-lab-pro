import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTitle } from '../contexts/TitleContext';

export default function TitleSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTitle, setCurrentTitle, titles } = useTitle();

  return (
    <div className="relative min-w-[200px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <currentTitle.icon className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {currentTitle.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {titles.map((title) => {
              const Icon = title.icon;
              return (
                <motion.button
                  key={title.name}
                  onClick={() => {
                    setCurrentTitle(title);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
                    ${currentTitle.name === title.name ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {title.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}