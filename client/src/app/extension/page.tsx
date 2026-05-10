import { Monitor, Shield, Zap, Download, Smartphone, Globe, Lock, ShieldAlert, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

export default function ExtensionPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(0, 229, 168, 0.1)', borderRadius: '99px', color: 'var(--accent-green)', fontSize: '0.85rem', fontWeight: 800, marginBottom: '24px' }}>
                <Monitor size={18} /> VERSION 2.5 LIVE — AUTO-SCAN ENABLED
              </div>
              <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1, letterSpacing: '-0.04em' }}>
                Security <br />
                <span className="gradient-text">On Autopilot</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
                Stop copying and pasting URLs. Our browser extension automatically analyzes every product you view on Amazon, Flipkart, and Meesho, warning you about fraud in real-time.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
                  <Download size={22} /> Add to Chrome — It's Free
                </button>
              </div>
              <div style={{ marginTop: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <BadgeCheck size={18} color="var(--accent-green)" /> 15ms Latency
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Globe size={18} color="var(--accent-blue)" /> Multi-Platform Support
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="glass-panel" style={{ padding: '48px', position: 'relative', zIndex: 1, border: '1px solid rgba(0, 229, 168, 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--accent-green)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Shield size={28} color="#0B0F19" />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>AI Overlay Active</span>
                  </div>
                  <div style={{ color: 'var(--accent-green)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '1px' }}>SYSTEM NOMINAL</div>
                </div>
                
                <div style={{ background: 'rgba(0, 229, 168, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(0, 229, 168, 0.1)', marginBottom: '32px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-green)', marginBottom: '12px' }}>TRUST SCORE</div>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-green)', marginBottom: '8px' }}>98%</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px' }}>Safe to Purchase</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Verified seller with 4.5 years of history. Review sentiment matches price point and technical specs.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: '#8B949E' }}>
                    <CheckCircle size={16} color="var(--accent-green)" /> Linguistic Audit Passed
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: '#8B949E' }}>
                    <CheckCircle size={16} color="var(--accent-green)" /> Pricing Anomaly Check Clear
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(circle, var(--glow-green) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>Enterprise Features, <span className="gradient-text">Zero Friction</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Built to provide maximum safety with minimum impact on your browsing speed.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Zap size={32} color="var(--accent-green)" />, title: "Automatic Scanning", desc: "The extension detects when you land on a product page and starts the neural analysis instantly." },
              { icon: <Smartphone size={32} color="var(--accent-blue)" />, title: "Meesho Support", desc: "Full detection for Meesho listings, identifying low-quality dropshipping and shipping fraud." },
              { icon: <Lock size={32} color="var(--accent-purple)" />, title: "Privacy Lockdown", desc: "We only read the product text. No history, no passwords, and absolutely no tracking." },
              { icon: <Globe size={32} color="var(--accent-green)" />, title: "Global Marketplace", desc: "One extension for Amazon (US/IN), Flipkart, and Meesho. More platforms added weekly." }
            ].map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: '40px' }}>
                <div style={{ marginBottom: '24px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Installation Guide */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '48px', textAlign: 'center' }}>Developer Mode Installation</h2>
          <div className="glass-panel" style={{ padding: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>1</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>Download the Source</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Download the extension ZIP file from our homepage and extract it to a folder on your computer.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>2</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>Enable Developer Mode</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Open Chrome and go to <code style={{ color: 'var(--accent-blue)' }}>chrome://extensions</code>. Toggle the 'Developer mode' switch in the top right.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>3</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>Load Unpacked</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Click 'Load unpacked' and select the folder you extracted. The extension will appear in your toolbar instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ size, color }: { size: number; color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
