import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const { isAdmin } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          to="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-neon-purple hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          AI Tools
        </Link>
        {isAdmin && (
          <Link
            to="/new"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-neon-purple hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            New
          </Link>
        )}
      </div>
    </div>
  );
}