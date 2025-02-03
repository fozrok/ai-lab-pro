import React from 'react';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-1.5 rounded-md transition-colors ${
          view === 'grid'
            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-neon-purple'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        title="Grid view"
      >
        <Grid className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-1.5 rounded-md transition-colors ${
          view === 'list'
            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-neon-purple'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        title="List view"
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  );
}