import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { resources } from '../../data/training';

export default function ResourceList() {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => {
        const Icon = resource.icon;
        return (
          <motion.a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white dark:bg-gray-800 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
                <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {resource.description}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}