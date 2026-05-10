import { Target, Users, Shield, Award, Mail, Code, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>Protecting the <span className="gradient-text">Future</span> of E-commerce</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Verify Your Cart was born out of a simple observation: as AI makes shopping easier, it also makes scamming more efficient. We are an AI-first consumer safety platform dedicated to bringing transparency back to the digital marketplace.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '100px' }}>
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', marginBottom: '24px' }}>
                <Target size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                To empower 1 billion consumers with real-time, deterministic intelligence that identifies fraud before they hit the 'Buy' button. We aim to decrease global e-commerce fraud losses by 20% by 2030.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', marginBottom: '24px' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Our Values</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Transparency, Privacy, and Accuracy. We never sell user data, we never take 'kickbacks' from brands to whitelist products, and we always disclose our analysis logic.
              </p>
            </div>
          </div>

          <div id="team" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '60px' }}>Meet the Minds Behind the Shield</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
              {[
                { name: "Saketh V", role: "Founder & Lead Architect", bio: "AI Researcher and Full-Stack Developer with a passion for cybersecurity and consumer rights." },
                { name: "The Neural Engine", role: "AI Analysis Core", bio: "Our proprietary LLM-driven core that processes over 100GB of e-commerce data daily." },
                { name: "Community Contributors", role: "Global Safety Network", bio: "Thousands of users who report scams and help train our detection models every day." }
              ].map((member, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', 
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'white'
                  }}>
                    {member.name[0]}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{member.name}</h4>
                  <p style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Heart size={48} color="var(--danger)" style={{ marginBottom: '24px' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>A Student-Driven Initiative</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Verify Your Cart started as a university project and has grown into a community-led movement for a safer internet. We are 100% independent and self-funded.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="mailto:contact@verifyyourcart.com" className="btn btn-primary"><Mail size={18} /> Get in Touch</a>
            <a href="#" className="btn" style={{ background: 'var(--bg-color)', border: '1px solid var(--card-border)' }}><Code size={18} /> View Open Source</a>
          </div>
        </div>
      </section>
    </div>
  );
}
