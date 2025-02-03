import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { featuredTools } from '../data/tools';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const totalTools = featuredTools.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-8 md:flex md:space-x-6">
            {[
              { name: 'AI Tools', path: '/', count: totalTools },
              { name: 'New', path: '/new' }
            ].map((item) => (
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
                  {item.name === 'New' && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-1 px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-neon-blue rounded-full"
                    >
                      NEW
                    </motion.span>
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

          {/* Search, Theme Toggle, and Admin */}
          <div className="flex items-center space-x-4">
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

            <ThemeToggle />

            {isAdmin ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/admin"
                  className="text-sm font-medium text-purple-600 dark:text-neon-purple hover:text-purple-700 dark:hover:text-purple-400"
                >
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin-login"
                className="text-sm font-medium text-purple-600 dark:text-neon-purple hover:text-purple-700 dark:hover:text-purple-400"
              >
                Admin Login
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-neon-purple hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              AI Tools
            </Link>
            <Link
              to="/new"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-neon-purple hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              New
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}