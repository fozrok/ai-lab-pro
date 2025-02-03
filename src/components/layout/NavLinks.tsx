import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { featuredTools } from '../../data/tools';

interface NavLinksProps {
  location: { pathname: string };
}

export default function NavLinks({ location }: NavLinksProps) {
  const { isAdmin } = useAuth();
  const totalTools = featuredTools.filter(tool => isAdmin || !tool.isHidden).length;

  const navItems = [
    { name: 'AI Tools', path: '/', count: totalTools },
    { name: 'Training', path: '/training' },
    ...(isAdmin ? [{ name: 'New', path: '/new' }] : [])
  ];

  return (
    <nav className="hidden md:ml-8 md:flex md:space-x-6">
      {navItems.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={item.path}
            className={`relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-neon-purple px-3 py-2 text-sm font-medium transition-colors duration-200 ${
              location.pathname === item.path ? 'text-purple-600 dark:text-neon-purple' : ''
            }`}
          >
            {item.name}
            {item.count && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-neon-purple rounded-full">
                {item.count}
              </span>
            )}
            {location.pathname === item.path && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-600 dark:bg-neon-purple"
                initial={false}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}