import Link from 'next/link';
import { Send, MessageCircle, Camera, Globe, Shield, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import CartLogo from './CartLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: 'Scan Tool', href: '/#scan' },
      { name: 'Browser Extension', href: '/extension' },
      { name: 'AI Engine', href: '/#how-it-works' },
      { name: 'Safety Ratings', href: '/blog/how-to-detect-fake-products' },
    ],
    Content: [
      { name: 'Blog', href: '/blog' },
      { name: 'Scam Guides', href: '/guides' },
      { name: 'Consumer Safety', href: '/blog/online-shopping-safety' },
      { name: 'Security Trends', href: '/blog/ecommerce-scams-2026' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Editorial Policy', href: '/editorial-policy' },
      { name: 'Team', href: '/about#team' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  };

  return (
    <footer style={{ background: '#020617', borderTop: '1px solid var(--card-border)', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '60px' }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <CartLogo width={160} className="logo-svg" />
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '320px', lineHeight: 1.7, marginBottom: '24px' }}>
              Verify Your Cart is an AI-powered platform dedicated to protecting consumers from e-commerce fraud, fake products, and deceptive seller practices.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" className="social-link" title="Twitter"><Send size={20} /></a>
              <a href="#" className="social-link" title="Facebook"><MessageCircle size={20} /></a>
              <a href="#" className="social-link" title="Instagram"><Camera size={20} /></a>
              <a href="#" className="social-link" title="LinkedIn"><Globe size={20} /></a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                      className="footer-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            © {currentYear} Verify Your Cart. All rights reserved. Built with advanced AI for consumer protection.
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--success)' }}>
              <Shield size={16} /> Secure Platform
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              v2.4.0 (Stable)
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-svg { color: var(--text-primary); }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: var(--accent-blue);
          color: white;
          transform: translateY(-3px);
        }
        .footer-link:hover {
          color: var(--accent-blue) !important;
          padding-left: 5px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
