import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  show: boolean;
  position: { top: number; left: number };
  content: string;
}

export default function Tooltip({ show, position, content }: TooltipProps) {
  if (!show) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        style={{
          top: position.top,
          left: position.left,
          zIndex: 9999,
          position: 'fixed',
        }}
        className="w-64 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 transform rotate-45" />
        <p className="text-xs text-gray-600 dark:text-gray-300 relative z-10">
          {content}
        </p>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}