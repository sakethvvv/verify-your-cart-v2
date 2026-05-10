import { Mail, MessageSquare, MapPin, Phone, Globe, Send, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>Get in <span className="gradient-text">Touch</span></h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Have questions about a scan? Found a new scam we should know about? Our team is ready to help.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            {/* Contact Form */}
            <div className="glass-panel" style={{ padding: '48px' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      style={{ width: '100%', padding: '14px', background: 'var(--bg-color)', border: '1px solid var(--card-border)', borderRadius: '12px', color: 'white', outline: 'none' }} 
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      style={{ width: '100%', padding: '14px', background: 'var(--bg-color)', border: '1px solid var(--card-border)', borderRadius: '12px', color: 'white', outline: 'none' }} 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Subject</label>
                  <select style={{ width: '100%', padding: '14px', background: 'var(--bg-color)', border: '1px solid var(--card-border)', borderRadius: '12px', color: 'white', outline: 'none' }}>
                    <option>General Inquiry</option>
                    <option>Report a Scam Listing</option>
                    <option>Technical Support</option>
                    <option>Business/Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="How can we help you today?" 
                    style={{ width: '100%', padding: '14px', background: 'var(--bg-color)', border: '1px solid var(--card-border)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', justifyContent: 'center' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="glass-panel" style={{ padding: '32px', display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Email Us</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>support@verifyyourcart.com</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>security@verifyyourcart.com</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '32px', display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', flexShrink: 0 }}>
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Community Support</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Join our Discord server for real-time scam alerts and community verification.</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '32px', display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Headquarters</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Virtual First Initiative</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Bangalore, KA, India</p>
                </div>
              </div>

              <div style={{ padding: '32px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '24px', border: '1px dashed var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ShieldCheck size={40} color="var(--accent-blue)" />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Your data is encrypted. We never share your contact information with third-party advertisers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
