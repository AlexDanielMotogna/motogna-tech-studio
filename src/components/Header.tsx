'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import Container from './ui/Container';
import Button from './ui/Button';
import LanguageSelector from './ui/LanguageSelector';
import ContactModal from './ui/ContactModal';
import Logo from './ui/Logo';

export default function Header() {
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (homeMenuRef.current && !homeMenuRef.current.contains(event.target as Node)) {
        setIsHomeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const homeSections = [
    { href: '#services', label: t.nav.services },
    { href: '#solutions', label: t.nav.solutions },
    { href: '#work', label: t.nav.work },
    { href: '#process', label: t.nav.process },
    { href: '#tech', label: t.nav.tech },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handleSectionClick = (href: string) => {
    setIsHomeMenuOpen(false);
    setIsMobileMenuOpen(false);

    // If we're on the home page, scroll to section
    if (window.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100' : 'bg-transparent'
          }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/">
              <Logo className="h-10 w-auto" variant="dark" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Home with dropdown */}
              <div className="relative" ref={homeMenuRef}>
                <button
                  onClick={() => setIsHomeMenuOpen(!isHomeMenuOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Home
                  <svg
                    className={`w-4 h-4 transition-transform ${isHomeMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isHomeMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-200 shadow-lg py-2">
                    <button
                      onClick={handleHomeClick}
                      className="w-full text-left px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors"
                    >
                      Home
                    </button>
                    <div className="border-t border-neutral-100 my-1"></div>
                    {homeSections.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleSectionClick(item.href)}
                        className="w-full text-left px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {t.nav.about || 'Über uns'}
              </Link>

              <Link
                href="/team"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {t.nav.team || 'Team'}
              </Link>

              <Link
                href="/quote"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {t.nav.configurator || 'Configurator'}
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <Button variant="outline" size="sm" onClick={() => handleSectionClick('#contact')}>
                {t.nav.getQuote}
              </Button>
              <Button size="sm" onClick={() => setIsModalOpen(true)}>
                {t.nav.bookCall}
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-100 bg-white">
              <div className="flex flex-col gap-1">
                {/* Home section with subsections */}
                <div className="px-4 py-2">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-neutral-900"
                  >
                    Home
                  </Link>
                </div>
                <div className="pl-8 flex flex-col gap-1 mb-2">
                  {homeSections.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleSectionClick(item.href)}
                      className="text-left px-4 py-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="border-t border-neutral-100 my-2"></div>

                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  {t.nav.about || 'Über uns'}
                </Link>

                <Link
                  href="/team"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  {t.nav.team || 'Team'}
                </Link>

                <Link
                  href="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  {t.nav.configurator || 'Configurator'}
                </Link>

                <div className="px-4 pt-4 border-t border-neutral-100 mt-2">
                  <LanguageSelector />
                </div>
                <div className="flex flex-col gap-2 px-4 pt-2">
                  <Button variant="outline" className="w-full" onClick={() => handleSectionClick('#contact')}>
                    {t.nav.getQuote}
                  </Button>
                  <Button className="w-full" onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}>
                    {t.nav.bookCall}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
