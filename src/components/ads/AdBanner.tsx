import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AdBanner() {
  return (
    <div className="hidden md:flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        <span className="font-medium">FREE</span>
        {" "}You already have everything you need, within you!
      </p>
      <a
        href="#"
        className="ml-3 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
      >
        Take Action
        <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}