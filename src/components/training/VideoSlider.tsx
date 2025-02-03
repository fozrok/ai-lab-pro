import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { videos } from '../../data/training';

export default function VideoSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Reduced from 400 to match new width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="relative flex-none w-[320px] aspect-video rounded-xl overflow-hidden snap-start" // Reduced from 400px
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <Play className="w-6 h-6 text-white fill-current" /> {/* Reduced from w-8 h-8 */}
                </div>
              </a>
            </div>
            {video.badge && (
              <div className="absolute top-3 right-3"> {/* Adjusted from top-4 right-4 */}
                <span className="px-2 py-0.5 text-xs font-medium text-white bg-purple-600 dark:bg-neon-purple rounded-full">
                  {video.badge}
                </span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-base font-bold text-white mb-1"> {/* Reduced from text-lg */}
                {video.title}
              </h3>
              <p className="text-xs text-gray-200 line-clamp-2"> {/* Reduced from text-sm */}
                {video.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" /> {/* Reduced from w-6 h-6 */}
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" /> {/* Reduced from w-6 h-6 */}
      </button>
    </div>
  );
}