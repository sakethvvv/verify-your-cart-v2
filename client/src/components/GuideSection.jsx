import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';

const GuideSection = () => {
  return (
    <section id="guide" style={{ padding: '100px 0', background: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">The Final Verdict</h2>
        <p className="section-subtitle">The goal isn't to confuse you with data, but to give a clear, actionable result.</p>
        
        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
          
          {/* Safe Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
            style={{ borderTop: '4px solid #10b981', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.05 }}>
              <ShieldCheck size={150} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--card-border)', marginBottom: '0.5rem' }}>01</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <ShieldCheck size={24} color="#10b981" /> Safe Product
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              High trust, verified seller, and authentic reviews. Safe to buy.
            </p>
          </motion.div>

          {/* Risky Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card"
            style={{ borderTop: '4px solid #f59e0b', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.05 }}>
              <AlertTriangle size={150} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--card-border)', marginBottom: '0.5rem' }}>02</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <AlertTriangle size={24} color="#f59e0b" /> Risky Product
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Mixed signals found. Proceed with caution and double check.
            </p>
          </motion.div>

          {/* Likely Fake */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-card"
            style={{ borderTop: '4px solid #ef4444', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.05 }}>
              <XCircle size={150} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--card-border)', marginBottom: '0.5rem' }}>03</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <XCircle size={24} color="#ef4444" /> Likely Fake
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              High probability of being a scam or low-quality clone. Avoid.
            </p>
          </motion.div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Scanning &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
