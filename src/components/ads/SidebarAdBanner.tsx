import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SidebarAdBanner() {
  return (
    <div className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
        <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
          This is Your Time!
        </span>
      </div>
      <p className="text-xs text-purple-700 dark:text-purple-300 mb-2">
        With Clarity, Comes Certainty. With Action, comes Results. Stop Waiting.
      </p>
      <a
        href="#"
        className="block text-center text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 rounded-md py-1.5 transition-colors duration-200"
      >
        Start Now!
      </a>
    </div>
  );
}