import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShieldCheck, Zap, X } from 'lucide-react';
import axios from 'axios';
import CartLogo from './CartLogo';

const HeroSection = ({ onAnalyzeResult }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showExtensionModal, setShowExtensionModal] = useState(false);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    try {
      const response = await axios.post('/api/analyze', { url });
      onAnalyzeResult(response.data);
      // Scroll to verdict section
      document.getElementById('verdict').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Scan failed', error);
      alert(`Scan failed: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Floating Shield Icon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{ 
            opacity: { duration: 0.6 },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            background: 'var(--card-bg)',
            borderRadius: '24px',
            padding: '16px',
            display: 'inline-flex',
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
            marginBottom: '24px',
            position: 'relative'
          }}
        >
          <ShieldCheck size={40} color="#2563eb" strokeWidth={1.5} />
          <div style={{
            position: 'absolute',
            top: -5,
            right: -5,
            background: '#a855f7',
            borderRadius: '50%',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        </motion.div>

        {/* AI Powered Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1], boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 15px rgba(59,130,246,0.2)', '0 0 0px rgba(59,130,246,0)'] }}
          transition={{ duration: 0.6, scale: { duration: 2, repeat: Infinity }, boxShadow: { duration: 2, repeat: Infinity } }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--card-bg)',
            padding: '6px 16px',
            borderRadius: '99px',
            border: '1px solid #e2e8f0',
            color: '#3b82f6',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '40px'
          }}
        >
          <Zap size={14} fill="#3b82f6" /> AI-POWERED SECURITY ENGINE
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '10px', lineHeight: 1.1 }}
        >
          Verify Your
        </motion.h1>
        
        {/* Massive Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: '16px' }}
        >
          <CartLogo width={220} />
        </motion.div>
        
        {/* Subtitle */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 600 }}
        >
          Check it right. Buy it bright.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}
        >
          A student-built intelligent tool that analyzes review sentiment, seller history, and pricing data to detect potential e-commerce fraud.
        </motion.p>

        {/* Search Bar */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onSubmit={handleScan}
          className="hero-search-form"
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            width: '100%',
            maxWidth: '650px', 
            background: 'var(--card-bg)',
            borderRadius: '24px',
            padding: '8px 8px 8px 24px',
            boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.15), 0 10px 20px -5px rgba(59, 130, 246, 0.1)',
            marginBottom: '20px'
          }}
        >
          <div className="mobile-input-wrapper" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Globe size={24} color="#94a3b8" style={{ marginRight: '16px', flexShrink: 0 }} />
            <input 
              type="url" 
              placeholder="Paste product URL..." 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              style={{ 
                flex: 1,
                background: 'transparent', 
                border: 'none', 
                fontSize: '1.1rem',
                color: 'var(--text-color)',
                outline: 'none',
                padding: '12px 0',
                width: '100%'
              }}
            />
          </div>
          <motion.button 
            type="submit" 
            disabled={loading} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.5)', '0 0 0px rgba(59, 130, 246, 0)'] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            style={{ 
              background: '#3b82f6', // Changed to blue to match screenshot!
              color: 'var(--card-bg)',
              border: 'none',
              borderRadius: '16px',
              padding: '16px 36px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginLeft: '12px',
              width: 'max-content'
            }}
          >
            {loading ? 'Scanning...' : 'Scan Now'}
          </motion.button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '30px' }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
          Supported: Amazon, Flipkart, & Major Sites
        </motion.div>

        {/* Chrome Extension Promotion */}
        <motion.a 
          href="/extension.zip" 
          download
          onClick={() => setShowExtensionModal(true)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="21.17" y1="8" x2="12" y2="8"></line>
            <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
            <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
          </svg>
          Install Chrome Extension
        </motion.a>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Instantly bypass CAPTCHAs & Scan Faster</p>

      </div>

      {/* Extension Installation Guide Modal */}
      <AnimatePresence>
        {showExtensionModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setShowExtensionModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                padding: '40px',
                borderRadius: '24px',
                maxWidth: '500px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                textAlign: 'left'
              }}
            >
              <button 
                onClick={() => setShowExtensionModal(false)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                <X size={24} />
              </button>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '8px' }}>Setup Guide</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>Because this is a free, open-source tool, you will need to manually load the downloaded extension into Chrome. It takes 10 seconds!</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ background: '#3b82f6', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                  <div>
                    <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '4px' }}>Extract the Zip File</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Find the downloaded <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '4px' }}>extension.zip</code> file and completely extract/unzip it into a folder.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ background: '#3b82f6', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                  <div>
                    <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '4px' }}>Open Chrome Extensions</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Type <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '4px', userSelect: 'all' }}>chrome://extensions</code> in your Chrome URL bar and hit Enter.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ background: '#3b82f6', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                  <div>
                    <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '4px' }}>Load Unpacked</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Turn on <strong>"Developer mode"</strong> in the top right. Then click <strong>"Load unpacked"</strong> and select the folder you just extracted. You're done!</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowExtensionModal(false)}
                style={{ width: '100%', padding: '14px', marginTop: '32px', background: 'var(--bg-secondary)', color: 'var(--text-color)', border: '1px solid var(--card-border)', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Got it, thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default HeroSection;
