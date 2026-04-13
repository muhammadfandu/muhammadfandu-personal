import React, { useState } from 'react';
import Link from 'next/link';
import { AppleThemeToggle } from './AppleThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/Docs' },
];

export const AppleNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/20 dark:bg-neutral-900/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">MF</span>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hidden sm:block">
              Muhammad Fandu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <span className="font-medium">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <AppleThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface/50 dark:bg-neutral-800/50"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-neutral-600 dark:bg-neutral-400"></div>
              <div className="w-6 h-0.5 bg-neutral-600 dark:bg-neutral-400"></div>
              <div className="w-6 h-0.5 bg-neutral-600 dark:bg-neutral-400"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <AppleThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppleNavbar;