"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck, ChevronDown } from 'lucide-react';
import CartLogo from './CartLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Guides', href: '/guides' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CartLogo width={140} className="logo-svg" />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#scan" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            <ShieldCheck size={18} />
            Verify Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'var(--bg-secondary)',
              padding: '24px',
              borderBottom: '1px solid var(--card-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 999
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 500 }}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/#scan" 
              className="btn btn-primary" 
              onClick={() => setIsOpen(false)}
              style={{ justifyContent: 'center' }}
            >
              Verify Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 768px) {
          .mobile-toggle { display: block !important; }
        }
        .logo-svg {
          color: var(--text-primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
