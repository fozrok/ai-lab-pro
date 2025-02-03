import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { focusAreas, colorVariants } from '../../data/training';

export default function FocusAreas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap from 4 to 6 */}
      {focusAreas.map((area, index) => {
        const Icon = area.icon;
        return (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col space-y-4"> {/* Increased space-y from 3 to 4 */}
              <div className={`p-3 rounded-lg w-fit ${colorVariants[area.color]}`}>
                <Icon className="w-6 h-6" /> {/* Increased icon size */}
              </div>
              <div className="space-y-3"> {/* Added space between text elements */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 min-h-[3rem]"> {/* Added min height */}
                  {area.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}