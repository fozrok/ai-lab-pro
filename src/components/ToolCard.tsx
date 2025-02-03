import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Star, Play, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandTheme } from '../contexts/BrandThemeContext';
import RatingModal from './RatingModal';

interface ToolCardProps {
  title: string;
  imageUrl: string;
  url: string;
}

export default function ToolCard({
  title,
  description,
  rating,
  reviews,
  categories,
  imageUrl,
  url,
}: ToolCardProps) {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { currentTheme } = useBrandTheme();

  const handleRatingSubmit = (newRating: number, comment: string) => {
    console.log('Rating submitted:', { rating: newRating, comment });
    setIsRatingModalOpen(false);
  };

  const handleRatingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRatingModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        className={`relative ${currentTheme.card.light} ${currentTheme.card.dark} rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-24`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
      >
        <div className="p-3 flex h-full">
          <div className="relative w-16 h-16 shrink-0">
            <motion.div
              className={`w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${currentTheme.primary}/10 to-transparent`}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.button
              className={`absolute -bottom-1 -right-1 p-1.5 bg-gradient-to-r ${currentTheme.primary} hover:opacity-90 rounded-full shadow-lg`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-3 h-3 text-white fill-current" />
            </motion.button>
          </div>

          <div className="flex-grow min-w-0 ml-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-base font-semibold ${currentTheme.text.light} ${currentTheme.text.dark} hover:opacity-80 transition-colors duration-200 mb-1`}
                >
                  {title}
                </a>
                <button
                  onClick={handleRatingClick}
                  className="flex items-center gap-1 group"
                >
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        } group-hover:text-yellow-500 transition-colors duration-200`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    ({reviews})
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      {isRatingModalOpen && (
        <RatingModal
          isOpen={isRatingModalOpen}
          onClose={() => setIsRatingModalOpen(false)}
          onSubmit={handleRatingSubmit}
        />
      )}
    </>
  );
}