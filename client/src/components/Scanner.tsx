"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShieldCheck, Zap, X, Search, ArrowRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import axios from 'axios';

const Scanner = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // In production this would be an absolute URL or proxy
      const response = await axios.post('http://localhost:5000/api/analyze', { url });
      setResult(response.data);
      // Scroll to result
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      console.error('Scan failed', err);
      setError(err.response?.data?.error || err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="scan" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <form 
        onSubmit={handleScan}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(16px)',
          padding: '24px',
          borderRadius: '24px',
          border: '1px solid var(--card-border)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ position: 'relative' }}>
          <Globe style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={20} />
          <input 
            type="url" 
            placeholder="Paste Amazon or Flipkart product URL..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '18px 24px 18px 56px',
              background: 'rgba(3, 7, 18, 0.6)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              color: 'white',
              fontSize: '1.1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary"
          style={{ width: '100%', padding: '18px', justifyContent: 'center', fontSize: '1.1rem' }}
        >
          {loading ? (
            <>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Zap size={22} />
              </motion.div>
              Analyzing Intelligence...
            </>
          ) : (
            <>
              <ShieldCheck size={22} />
              Perform Deep Security Scan
            </>
          )}
        </button>
      </form>

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            marginTop: '20px', 
            padding: '16px', 
            background: 'rgba(239, 68, 68, 0.1)', 
            border: '1px solid rgba(239, 68, 68, 0.2)', 
            borderRadius: '12px',
            color: 'var(--danger)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <AlertTriangle size={20} />
          {error}
        </motion.div>
      )}

      {/* Results Section */}
      <AnimatePresence>
        {result && (
          <motion.div 
            id="results"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ marginTop: '40px' }}
          >
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Security Analysis Report</h3>
                <div style={{ 
                  padding: '8px 16px', 
                  borderRadius: '99px', 
                  background: result.trust_score > 70 ? 'rgba(16, 185, 129, 0.1)' : result.trust_score > 40 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: result.trust_score > 70 ? 'var(--success)' : result.trust_score > 40 ? 'var(--warning)' : 'var(--danger)',
                  border: '1px solid currentColor',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}>
                  TRUST SCORE: {result.trust_score}%
                </div>
              </div>

              <p style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-primary)' }}>
                <strong>Verdict:</strong> {result.final_verdict}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                {result.detailed_checks?.map((check: any, i: number) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--accent-blue)', fontWeight: 600 }}>
                      <CheckCircle size={16} /> {check.category}
                    </div>
                    {check.findings?.map((finding: string, j: number) => (
                      <div key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{finding}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div style={{ padding: '24px', background: 'rgba(3, 7, 18, 0.4)', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                <h4 style={{ marginBottom: '12px', color: 'var(--text-primary)', fontSize: '1rem' }}>AI Summary Analysis</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{result.verdict_summary}</p>
              </div>

              {result.price_comparison && (
                <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '16px', border: '1px solid var(--accent-blue)' }}>
                  <h4 style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1rem' }}>Price Comparison</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {result.price_comparison.competitors?.map((comp: any, i: number) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>{comp.store}</span>
                        <span style={{ fontWeight: 600 }}>{comp.price}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', color: 'var(--success)', fontSize: '0.85rem', fontWeight: 600 }}>
                      {result.price_comparison.verdict}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Scanner;
