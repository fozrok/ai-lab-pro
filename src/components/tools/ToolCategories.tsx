import React from 'react';

interface ToolCategoriesProps {
  categories: string[];
  currentTheme: any;
}

export default function ToolCategories({ categories, currentTheme }: ToolCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {categories.map((category) => (
        <span
          key={category}
          className={`px-1.5 py-0.5 text-[10px] border rounded-full whitespace-nowrap
            border-${currentTheme.accent}-500/30 dark:border-${currentTheme.accent}-400/30
            text-${currentTheme.accent}-600 dark:text-${currentTheme.accent}-400
            bg-transparent`}
        >
          {category}
        </span>
      ))}
    </div>
  );
}