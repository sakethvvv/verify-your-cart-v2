import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">About Verify Your Cart</h2>
        <p className="section-subtitle">Helping users make safer online shopping decisions</p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', background: 'var(--bg-secondary)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            <p>
              <strong style={{ color: 'var(--text-color)' }}>Verify Your Cart</strong> is an educational AI-assisted product safety platform built to help online shoppers identify suspicious e-commerce listing patterns. The platform analyzes public signals such as domain reputation, listing presentation, pricing anomalies, and seller-related risk indicators to provide a general risk assessment.
            </p>
            
            <p>
              This project was developed by <strong>Saketh Vedullapalli</strong> as part of a technology-focused initiative to improve buyer awareness in digital marketplaces. The goal is not to replace human judgment, platform policies, or official brand verification methods, but to provide an additional layer of educational support for shoppers.
            </p>
            
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', fontWeight: 700, margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={24} color="#3b82f6" /> The platform is designed to:
              </h3>
              <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Highlight suspicious product listing patterns</li>
                <li>Encourage safer buying habits</li>
                <li>Teach users how to identify common scam signals</li>
                <li>Promote digital consumer awareness</li>
                <li>Support educational use in fraud-prevention learning</li>
              </ul>
            </div>
            
            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '1rem' }}>
              We continuously aim to improve transparency, usability, and buyer safety education. However, all outputs should be treated as informational guidance only.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
