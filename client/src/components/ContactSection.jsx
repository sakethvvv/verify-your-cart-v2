import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '80px 0', background: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>Get In Touch</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>Have questions or want to report a new scam? Reach out to us.</p>
        
        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-color)', fontWeight: 700 }}>Contact Information</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <Mail color="#3b82f6" />
              <a href="mailto:verifyyourcart@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>verifyyourcart@gmail.com</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <MapPin color="#3b82f6" />
              <span>Surampalem, Andhra Pradesh, India</span>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--card-bg)', padding: '32px', borderRadius: '24px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
            onSubmit={(e) => { 
              e.preventDefault(); 
              const name = encodeURIComponent(e.target[0].value);
              const email = encodeURIComponent(e.target[1].value);
              const message = encodeURIComponent(e.target[2].value);
              window.location.href = `mailto:verifyyourcart@gmail.com?subject=Contact from Verify Your Cart&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
            }}
          >
            <div className="input-group">
              <input type="text" placeholder="Your Name" required style={{ border: '1px solid #e2e8f0', background: 'var(--card-bg)', color: 'var(--text-color)' }} />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required style={{ border: '1px solid #e2e8f0', background: 'var(--card-bg)', color: 'var(--text-color)' }} />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="4" required style={{ border: '1px solid #e2e8f0', background: 'var(--card-bg)', color: 'var(--text-color)' }}></textarea>
            </div>
            <button type="submit" style={{ width: '100%', marginTop: '0.5rem', background: '#3b82f6', color: 'var(--card-bg)', padding: '12px', borderRadius: '12px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
