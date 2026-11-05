import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Presence', href: '#presence' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('warriorog_theme');
      if (saved) return saved === 'dark';
      return true; // Default to dark mode as requested
    }
    return true;
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('warriorog_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('warriorog_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'border-b border-line/70 bg-paper/95 shadow-xs backdrop-blur-xs'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="font-garesin text-2xl tracking-wide sm:text-3xl text-ink hover:text-lime transition-colors flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-lime inline-block" />
          WarriorOG
        </a>

        {/* Desktop Navigation & Dark Mode Toggle */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-lime after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-line/70 bg-paper2/80 text-ink transition-all hover:scale-110 hover:border-lime active:scale-95 shadow-xs cursor-pointer"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-lime transition-transform" />
            ) : (
              <Moon className="h-4 w-4 text-ink transition-transform" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-line/70 bg-paper2/80 text-ink transition-all active:scale-95 cursor-pointer"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-lime" />
            ) : (
              <Moon className="h-4 w-4 text-ink" />
            )}
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] cursor-pointer"
          >
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-ink transition-opacity ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Collapsible Dropdown */}
      <div
        className={`grid overflow-hidden border-line/70 bg-paper/95 transition-[grid-template-rows] duration-200 md:hidden ${
          isOpen ? 'grid-rows-[1fr] border-b' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="min-h-0">
          {navItems.map((item) => (
            <li key={item.href} className="border-t border-line/60 first:border-t-0">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
