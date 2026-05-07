import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const modalContent = {
    privacy: {
      title: "🔒 Privacy Policy",
      content: (
        <div style={{ lineHeight: '1.6', color: 'var(--text-color)' }}>
          <p style={{ marginBottom: '1rem' }}><strong>Effective Date: May 5, 2026</strong></p>
          <p style={{ marginBottom: '1rem' }}>At Verify Your Cart, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.</p>
          
          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Information We Collect</h4>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li><strong>User Input Data:</strong> Product URLs or data you submit for analysis</li>
            <li><strong>Usage Data:</strong> Browser type, device info, pages visited</li>
            <li><strong>Cookies:</strong> To improve user experience</li>
          </ul>
          
          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. How We Use Information</h4>
          <p>We use your data to:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Analyze product authenticity and provide insights</li>
            <li>Improve our AI algorithms and services</li>
            <li>Enhance user experience</li>
          </ul>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Data Sharing</h4>
          <p>We do not sell or trade your personal data. We may share limited data with:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Trusted third-party APIs (for analysis purposes only)</li>
            <li>Legal authorities if required by law</li>
          </ul>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>4. Data Security</h4>
          <p style={{ marginBottom: '1rem' }}>We implement appropriate security measures to protect your data. However, no method is 100% secure.</p>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>5. Third-Party Links</h4>
          <p style={{ marginBottom: '1rem' }}>Our website may contain links to external sites (e.g., Amazon, Flipkart). We are not responsible for their privacy practices.</p>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>6. Your Consent</h4>
          <p>By using our website, you consent to this Privacy Policy.</p>
        </div>
      )
    },
    terms: {
      title: "📜 Terms of Service",
      content: (
        <div style={{ lineHeight: '1.6', color: 'var(--text-color)' }}>
          <p style={{ marginBottom: '1rem' }}><strong>Effective Date: May 5, 2026</strong></p>
          <p style={{ marginBottom: '1rem' }}>By using Verify Your Cart, you agree to the following terms:</p>
          
          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Service Description</h4>
          <p style={{ marginBottom: '1rem' }}>Verify Your Cart provides AI-based analysis to detect potentially fake or suspicious products.</p>
          
          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. User Responsibilities</h4>
          <p>You agree:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>To use the service legally</li>
            <li>Not to misuse or attempt to hack the system</li>
            <li>Not to rely solely on our results for financial decisions</li>
          </ul>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Accuracy Disclaimer</h4>
          <p>We strive for accuracy, but:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Results are AI-generated predictions, not guarantees</li>
            <li>We are not responsible for purchase outcomes</li>
          </ul>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>4. Limitation of Liability</h4>
          <p>We are not liable for:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Losses due to incorrect analysis</li>
            <li>Decisions made based on our output</li>
          </ul>

          <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>5. Changes to Terms</h4>
          <p>We may update these terms at any time without prior notice.</p>
        </div>
      )
    },
    disclaimer: {
      title: "⚠️ Disclaimer",
      content: (
        <div style={{ lineHeight: '1.6', color: 'var(--text-color)' }}>
          <p style={{ marginBottom: '1rem' }}><strong>Effective Date: May 5, 2026</strong></p>
          <p style={{ marginBottom: '1rem' }}>The information provided by Verify Your Cart is for informational purposes only.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>We do not guarantee that a product is fake or genuine</li>
            <li>Our analysis is based on available data and AI models</li>
            <li>Users should verify products independently before purchasing</li>
          </ul>
          
          <p>We are not affiliated with:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Amazon</li>
            <li>Flipkart</li>
            <li>Any third-party e-commerce platform</li>
          </ul>
          
          <p style={{ fontWeight: 'bold' }}>Use the service at your own risk.</p>
        </div>
      )
    },
    legal: {
      title: "⚖️ Legal Notice",
      content: (
        <div style={{ lineHeight: '1.6', color: 'var(--text-color)' }}>
          <p style={{ marginBottom: '1rem' }}><strong>Effective Date: May 5, 2026</strong></p>
          <p style={{ marginBottom: '1rem' }}>All content, branding, and technology on this website are the property of Verify Your Cart.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Unauthorized copying or reproduction is prohibited</li>
            <li>Misuse of the platform may result in legal action</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <>
      <footer style={{ background: '#03050a', padding: '4rem 0 2rem', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ maxWidth: '400px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Verify Your Cart
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Verify Your Cart is an educational AI-assisted platform designed to help users identify suspicious e-commerce listing patterns and make safer online shopping decisions.
              </p>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--bg-secondary)', marginBottom: '1rem' }}>Navigation</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9ca3af', fontSize: '0.9rem', listStyle: 'none', padding: 0 }}>
                <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a></li>
                <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
                <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
                <li><a href="#guide" style={{ color: 'inherit', textDecoration: 'none' }}>Guides</a></li>
                <li><a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--bg-secondary)', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9ca3af', fontSize: '0.9rem', listStyle: 'none', padding: 0 }}>
                <li><a href="#!" onClick={(e) => { e.preventDefault(); setActiveModal('legal'); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Legal Notice</a></li>
                <li><a href="#!" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Privacy Policy</a></li>
                <li><a href="#!" onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Terms of Service</a></li>
                <li><a href="#!" onClick={(e) => { e.preventDefault(); setActiveModal('disclaimer'); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
            &copy; 2026 Verify Your Cart. All rights reserved.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ 
                background: 'var(--card-bg)', 
                borderRadius: '24px', 
                padding: '32px', 
                maxWidth: '600px', 
                width: '100%', 
                maxHeight: '80vh', 
                overflowY: 'auto',
                position: 'relative',
                zIndex: 10000,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <button 
                onClick={() => setActiveModal(null)}
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--bg-secondary)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                ✕
              </button>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                {modalContent[activeModal].title}
              </h2>
              {modalContent[activeModal].content}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
