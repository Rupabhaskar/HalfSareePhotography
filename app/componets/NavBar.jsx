'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Memoized handleScroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // ✅ Cleaned-up useEffect with correct dependency
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 backdrop-blur-md bg-white/10 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-5 md:px-20 xl:px-[20px] animate-fadeIn relative">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-lg font-semibold text-gray-900 transition-transform hover:scale-105">
            <Image src="/logo.png" alt="SnapU Logo" width={60} height={50} className="rounded-sm" />
            <span className="bg-gradient-to-r from-[#0066ff] to-[#8b0000] bg-clip-text text-transparent inline-block">
              Snap U Photography
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden text-black md:flex space-x-6 items-center">
            {[
              { href: '/', text: 'Home' },
              { href: '/#services', text: 'Services' },
              { href: '/#gallery', text: 'Gallery' },
              { href: '#packages', text: 'Packages' },
              { href: '/#About', text: 'About' },
              { href: '/#Contact', text: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group hover:text-green-600 transition-all duration-300"
              >
                {link.text}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transform transition duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 transform transition duration-300 ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full w-full bg-white z-40 overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-3 px-4">
          {[
            { href: '/', text: 'Home' },
            { href: '/#services', text: 'Services' },
            { href: '/#gallery', text: 'Gallery' },
            { href: '#packages', text: 'Packages' },
            { href: '/#About', text: 'About' },
            { href: '/#Contact', text: 'Contact' },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:translate-x-2"
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Global Fade In Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
