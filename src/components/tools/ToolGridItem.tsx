import React from 'react';
import { motion } from 'framer-motion';
import { Tool } from '../../types';
import { useBrandTheme } from '../../contexts/BrandThemeContext';
import ToolImage from './ToolImage';

interface ToolGridItemProps extends Tool {}

export default function ToolGridItem({ 
  title, 
  imageUrl, 
  url
}: ToolGridItemProps) {
  const { currentTheme } = useBrandTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${currentTheme.card.light} ${currentTheme.card.dark} rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300`}
    >
      <div className="aspect-square">
        <ToolImage 
          imageUrl={imageUrl} 
          title={title} 
          url={url} 
          currentTheme={currentTheme}
        />
      </div>
      <div className="p-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-[15px] font-semibold ${currentTheme.text.light} ${currentTheme.text.dark} hover:opacity-80 transition-colors duration-200`}
        >
          {title}
        </a>
      </div>
    </motion.div>
  );
}