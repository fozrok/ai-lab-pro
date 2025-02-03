import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="hidden md:block">
      <div className="relative">
        <input
          type="text"
          placeholder="Search AI tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className={`w-64 pl-10 pr-4 py-1.5 text-sm rounded-lg border transition-all duration-200 
            ${
              searchFocused
                ? 'border-purple-500 dark:border-neon-purple ring-1 ring-purple-500 dark:ring-neon-purple'
                : 'border-gray-300 dark:border-gray-600'
            }
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none`}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </form>
  );
}