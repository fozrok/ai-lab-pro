import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';

interface SidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function Sidebar({ selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <div className="w-48 flex flex-col h-[calc(100vh-4rem)] space-y-2 p-3">
      <h2 className="text-base font-medium mb-2">Categories</h2>
      <nav className="space-y-1 flex-grow">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <motion.button
              key={category.name}
              onClick={() => onCategorySelect(category.name === 'All' ? null : category.name)}
              className={`w-full flex items-start px-3 py-1.5 rounded-md transition-all duration-200 relative overflow-hidden
                ${isSelected 
                  ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-neon-purple' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 dark:via-gray-700/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              
              <div className="flex items-center w-full relative">
                <motion.div
                  initial={{ color: '#a855f7' }}
                  whileHover={{ color: '#26b0ff' }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon 
                    className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200
                      ${isSelected 
                        ? 'text-purple-600 dark:text-neon-purple' 
                        : 'text-purple-500 dark:text-purple-400'}`}
                  />
                </motion.div>
                <motion.span 
                  className="ml-2 text-sm text-left"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.name}
                </motion.span>
              </div>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}