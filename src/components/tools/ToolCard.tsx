import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useBrandTheme } from '../../contexts/BrandThemeContext';
import { Tool } from '../../types';

interface ToolCardProps extends Tool {}

export default function ToolCard({
  title,
  description,
  imageUrl,
  url,
  categories
}: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { currentTheme } = useBrandTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      className={`relative ${currentTheme.card.light} ${currentTheme.card.dark} rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center p-3">
        {/* Image Container with fixed dimensions */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute -bottom-1 -right-1 p-1.5 bg-gradient-to-r ${currentTheme.primary} hover:opacity-90 rounded-full shadow-lg`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-3 h-3 text-white fill-current" />
          </motion.a>
        </div>

        {/* Content Container */}
        <div className="flex-1 min-w-0 ml-3">
          <div className="space-y-1">
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-[8px] font-semibold ${currentTheme.text.light} ${currentTheme.text.dark} hover:opacity-80 transition-colors duration-200`}
            >
              {title}
            </a>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}