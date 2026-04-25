"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthModal from './AuthModal';
import CartDrawer from './CartDrawer';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, logout, isAuthModalOpen, authView, openAuthModal, closeAuthModal } = useAuth();
  const { totalItems } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only evaluate sections if we are on the home page
      if (pathname === '/') {
        const sections = ['home', 'about', 'products', 'faq', 'contact'];
        let current = '';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
              current = section;
              break;
            }
          }
        }
        
        if (window.scrollY === 0) current = 'home';
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 50) current = 'contact';

        if (current) setActiveSection(current);
      } else {
        // If not home, active section is the pathname without slash
        setActiveSection(pathname.replace('/', '') || 'home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    // Next.js App Router bug fix: scroll to hash when navigating from another page
    if (pathname === '/' && window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 w-full z-40 px-4 md:px-6 flex flex-row justify-between items-center transition-all duration-500 gap-4 ${isScrolled ? 'py-4 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-xl' : 'py-6 bg-transparent'}`}>
        {/* Brand */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white drop-shadow-md whitespace-nowrap shrink-0 max-w-[150px] sm:max-w-none truncate truncate-none-sm z-50">
          Adefran<span className="text-farm-light">Farms</span>
        </Link>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-row gap-4 md:gap-8 text-sm font-medium text-white/90 drop-shadow-md whitespace-nowrap shrink-0">
          <Link href="/#home" className={`transition-colors duration-200 ${isMounted && activeSection === 'home' ? 'text-farm-primary' : 'hover:text-farm-primary'}`}>Home</Link>
          <Link href="/#about" className={`transition-colors duration-200 ${isMounted && activeSection === 'about' ? 'text-farm-primary' : 'hover:text-farm-primary'}`}>About</Link>
          <Link href="/#products" className={`transition-colors duration-200 ${isMounted && activeSection === 'products' ? 'text-farm-primary' : 'hover:text-farm-primary'}`}>Products</Link>
          <Link href="/shop" className={`transition-colors duration-200 ${isMounted && activeSection === 'shop' ? 'text-farm-primary' : 'hover:text-farm-primary'}`}>Shop</Link>
          <Link href="/#faq" className={`transition-colors duration-200 ${isMounted && activeSection === 'faq' ? 'text-farm-primary' : 'hover:text-farm-primary'}`}>FAQ</Link>
          <Link href="/#contact" className={`transition-colors duration-200 ${isMounted && activeSection === 'contact' ? 'text-farm-primary' : 'hover:text-farm-primary'}`}>Contact</Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5 whitespace-nowrap shrink-0 z-50">
          
          {/* Global Cart Icon */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 flex items-center justify-center text-white/80 hover:text-white transition-colors focus:outline-none group"
            aria-label="Shopping Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-[10px] font-extrabold h-[20px] min-w-[20px] flex items-center justify-center rounded-full px-1 border-2 border-zinc-950 animate-in zoom-in duration-300">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>

          {/* User Profile / Auth Buttons (Desktop) */}
          <div className="hidden md:block">
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-1.5 py-1.5 pr-3 sm:pr-4 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md rounded-full border border-white/20 shadow-lg focus:outline-none"
                >
                  <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full bg-zinc-800" />
                  <span className="text-white font-semibold text-sm hidden sm:block">{user.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-white/70 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {isProfileOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsProfileOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-black/10 dark:border-white/10 overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-2 border-b border-black/5 dark:border-white/5 mb-1">
                        <p className="text-xs text-foreground/60 truncate" title={user.email}>{user.email}</p>
                      </div>
                      <button 
                        onClick={() => {
                          setIsProfileOpen(false);
                          logout();
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors flex items-center justify-between"
                      >
                        Sign Out
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => openAuthModal('signin')}
                  className="px-4 py-2 text-white/90 hover:text-white font-semibold text-sm transition-colors duration-300"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => openAuthModal('signup')}
                  className="px-5 py-2 md:px-6 md:py-2.5 bg-farm-primary hover:bg-farm-hover text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(45,90,39,0.4)] hover:shadow-[0_0_20px_rgba(45,90,39,0.7)]"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu Toggle for Mobile */}
          <button 
            type="button" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-farm-primary hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <svg 
              className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? 'rotate-90 hidden' : 'block'}`} 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? 'block' : 'hidden'}`} 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl transition-transform duration-300 ease-in-out pt-20 pb-8 px-6 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-6 text-center">
            {['home', 'about', 'products', 'faq', 'contact'].map((section) => (
              <Link 
                key={section}
                href={`/#${section}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors duration-200 capitalize ${activeSection === section ? 'text-farm-primary' : 'text-white hover:text-farm-primary'}`}
              >
                {section}
              </Link>
            ))}
            <Link 
              href="/shop" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors duration-200 ${activeSection === 'shop' ? 'text-farm-primary' : 'text-white hover:text-farm-primary'}`}
            >
              Shop
            </Link>

            <div className="h-px w-full bg-zinc-800 my-2" />

            {user ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt="Profile" className="w-10 h-10 rounded-full bg-zinc-800" />
                  <span className="text-white font-semibold">{user.name}</span>
                </div>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    logout();
                  }}
                  className="px-6 py-2 border border-red-500/50 text-red-400 rounded-full text-sm font-semibold w-full hover:bg-red-500/10 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openAuthModal('signin');
                  }}
                  className="px-6 py-3 border border-white/20 text-white rounded-full font-semibold transition-colors hover:bg-white/5"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openAuthModal('signup');
                  }}
                  className="px-6 py-3 bg-farm-primary hover:bg-farm-hover text-white rounded-full font-semibold shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Authentication Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal} 
        initialView={authView} 
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
