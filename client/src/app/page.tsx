"use client";
import { useState, useEffect } from 'react';
import Scanner from '@/components/Scanner';
import { Shield, Zap, Lock, Eye, TrendingUp, Users, Check, HelpCircle, ArrowRight, ShieldAlert, BadgeCheck, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [recentScans, setRecentScans] = useState<any[]>([]);
  const [loadingScans, setLoadingScans] = useState(true);

  useEffect(() => {
    async function fetchScans() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://verify-your-cart-v2.onrender.com'}/api/recent-scans`);
        const data = await res.json();
        if (Array.isArray(data)) setRecentScans(data);
      } catch (err) {
        console.error('Failed to fetch scans', err);
      } finally {
        setLoadingScans(false);
      }
    }
    fetchScans();
    const interval = setInterval(fetchScans, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', paddingTop: '160px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="flex-center" style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '6px 16px', 
              background: 'rgba(0, 229, 168, 0.1)', 
              borderRadius: '99px', 
              border: '1px solid rgba(0, 229, 168, 0.2)',
              color: 'var(--accent-green)',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '1.5px'
            }}>
              <Zap size={14} fill="currentColor" /> AI-POWERED FRAUD DETECTION
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            Verify Your Cart <br />
            <span className="gradient-text">Shop With Confidence</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 56px', lineHeight: 1.6 }}>
            The standard in digital shopping trust. We use multi-layered neural analysis to identify fraudulent sellers in milliseconds.
          </p>
          <Scanner />
        </div>
      </section>

      {/* Live Scam Radar */}
      <section className="section-padding" style={{ background: 'rgba(239, 68, 68, 0.02)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--danger)', marginBottom: '20px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--danger)' }}></div>
                <span style={{ fontWeight: 800, letterSpacing: '1px' }}>LIVE SCAM RADAR</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>Real-time Threats</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
                The most recent threats identified by our AI engine. We track fraudulent domains and sellers 24/7.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ padding: '20px 32px', borderBottom: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.02)' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>RECENT SECURITY SCANS</span>
              </div>
              <div style={{ padding: '32px' }}>
                {loadingScans ? (
                  <div style={{ textAlign: 'center' }}><Loader2 className="spin" /></div>
                ) : recentScans.length > 0 ? (
                  recentScans.map((scam, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i === recentScans.length - 1 ? 'none' : '1px solid var(--card-border)' }}>
                      <div style={{ maxWidth: '70%' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{scam.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{new URL(scam.url).hostname}</div>
                      </div>
                      <div style={{ padding: '4px 12px', borderRadius: '4px', background: scam.trust_score < 40 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(0, 229, 168, 0.1)', color: scam.trust_score < 40 ? 'var(--danger)' : 'var(--accent-green)', fontSize: '0.7rem', fontWeight: 800 }}>
                        {scam.verdict}
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No recent scans yet.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <Eye size={32} color="var(--accent-green)" style={{ marginBottom: '20px' }} />
              <h3>NLP Analysis</h3>
              <p>Detecting bot-generated reviews and linguistic patterns.</p>
            </div>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <TrendingUp size={32} color="var(--accent-blue)" style={{ marginBottom: '20px' }} />
              <h3>Price Anomaly</h3>
              <p>Tracking historical pricing to flag fake discounts.</p>
            </div>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <Shield size={32} color="var(--accent-purple)" style={{ marginBottom: '20px' }} />
              <h3>Seller Heuristics</h3>
              <p>Analyzing seller age and reputation across platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-wrapper { padding-top: var(--nav-height); }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
