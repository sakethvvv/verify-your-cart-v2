import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import CartLogo from './CartLogo';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        background: 'var(--bg-secondary)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--card-border)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}
    >
      {/* Left side: Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
        <CartLogo width={100} />
        <div className="desktop-only" style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #e2e8f0', paddingLeft: '16px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            AI Security
          </span>
          <span style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: 500 }}>
            Built by Saketh Vedullapalli
          </span>
        </div>
      </div>

      {/* Middle: Links */}
      <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', margin: 0, padding: 0, flex: 1, justifyContent: 'center' }}>
        {['Home', 'Features', 'Tips', 'Guide', 'About', 'FAQ', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: Button & Menu */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div 
          onClick={toggleTheme}
          style={{ cursor: 'pointer', padding: '8px', marginRight: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)', borderRadius: '50%', border: '1px solid var(--card-border)' }}
        >
          {isDark ? <Sun size={20} color="var(--text-color)" /> : <Moon size={20} color="var(--text-color)" />}
        </div>
        
        <button 
          className="btn-dark desktop-btn"
          style={{ 
            background: 'var(--text-color)', 
            color: 'var(--bg-color)', 
            border: 'none', 
            padding: '10px 24px', 
            borderRadius: '99px', 
            fontWeight: 600, 
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
        >
          Check Product &gt;
        </button>
        
        <div className="mobile-menu-btn" style={{ cursor: 'pointer', padding: '8px' }}>
          <Menu size={28} color="var(--text-color)" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
