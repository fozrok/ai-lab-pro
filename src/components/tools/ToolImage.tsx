import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolImageProps {
  imageUrl: string;
  title: string;
  url: string;
  currentTheme: any;
  isHovered?: boolean;
}

export default function ToolImage({ imageUrl, title, url, currentTheme, isHovered }: ToolImageProps) {
  return (
    <div className="relative w-full h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-2 right-2 p-2 bg-gradient-to-r ${currentTheme.primary} hover:opacity-90 rounded-full shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Play className="w-4 h-4 text-white fill-current" />
      </motion.a>
    </div>
  );
}