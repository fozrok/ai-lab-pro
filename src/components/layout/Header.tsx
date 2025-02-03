import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import ThemeToggle from '../theme/ThemeToggle';
import Logo from '../brand/Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import AdBanner from '../ads/AdBanner';

export default function Header() {
  const location = useLocation();
  const { isAdmin, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Logo />
          <NavLinks location={location} />
          
          <div className="flex items-center space-x-4">
            <AdBanner />
            <ThemeToggle />

            {isAdmin && (
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
            )}

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

      <MobileMenu isOpen={mobileMenuOpen} />
    </header>
  );
}