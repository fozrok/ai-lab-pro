import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

export default function RatingModal({ isOpen, onClose, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(rating, comment);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="absolute right-4 top-4">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Rate this tool
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onMouseEnter={() => setHoveredRating(value)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(value)}
                      className="p-1 transition-colors duration-200"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          (hoveredRating || rating) >= value
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your review (optional)
                </label>
                <textarea
                  id="comment"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Share your experience with this tool..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!rating}
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-neon-purple dark:hover:bg-purple-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Submit Rating
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}