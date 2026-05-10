import { Chrome, Shield, Zap, Download, CheckCircle, Smartphone, Globe, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ExtensionPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1), transparent)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '99px', color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '24px' }}>
                <Chrome size={18} /> Available for Chrome & Edge
              </div>
              <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>
                Security <span className="gradient-text">On Autopilot</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
                Stop copying and pasting URLs. Our browser extension automatically analyzes every product you view and warns you about fraud indicators before you even think about buying.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn btn-primary" style={{ padding: '16px 32px' }}>
                  <Download size={20} /> Add to Chrome — It's Free
                </button>
              </div>
              <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                ⭐ 4.9/5 from over 10,000+ users worldwide.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="glass-panel" style={{ padding: '40px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--accent-blue)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Shield size={24} color="white" />
                    </div>
                    <span style={{ fontWeight: 700 }}>Security Verdict</span>
                  </div>
                  <div style={{ color: 'var(--danger)', fontWeight: 800, fontSize: '0.9rem' }}>RISK DETECTED</div>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Fake Seller Indicators</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      <ShieldAlert size={16} color="var(--danger)" /> Recent domain registration (2 days ago)
                    </li>
                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      <ShieldAlert size={16} color="var(--danger)" /> AI-generated product images
                    </li>
                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)' }}>
                      <ShieldAlert size={16} color="var(--danger)" /> Unrealistic price point (-85%)
                    </li>
                  </ul>
                </div>
                <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '0.9rem', color: 'var(--danger)' }}>
                  This listing matches patterns of a "Bait & Switch" scam detected on 45 other domains.
                </div>
              </div>
              {/* Background glow */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--accent-blue)', filter: 'blur(100px)', opacity: 0.2, zIndex: 0 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Why Install the Extension?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>The fastest way to stay safe while shopping online.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Zap size={32} />, title: "Instant Analysis", desc: "No more copy-pasting. We analyze the page the moment you land on a product." },
              { icon: <Smartphone size={32} />, title: "App Integration", desc: "Syncs with our mobile app to provide cross-platform shopping safety." },
              { icon: <Lock size={32} />, title: "Privacy First", desc: "We only read product data. We never track your personal browsing or history." },
              { icon: <Globe size={32} />, title: "Cross-Site Support", desc: "Works on Amazon, Flipkart, Walmart, and over 500+ independent stores." }
            ].map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div style={{ color: 'var(--accent-blue)', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>Ready for a Safer Inbox and Wallet?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Join thousands of smart shoppers who use Verify Your Cart to prevent fraud every single day.
          </p>
          <button className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
            <Chrome size={20} /> Install Free Extension
          </button>
        </div>
      </section>
    </div>
  );
}

function ShieldAlert({ size, color }: { size: number; color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
