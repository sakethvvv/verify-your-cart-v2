import { motion } from 'framer-motion';
import { HelpCircle, ShieldAlert, CheckCircle, Info } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      q: "What does Verify Your Cart do?",
      a: "Verify Your Cart helps users evaluate product listings by checking common risk indicators such as suspicious domains, unrealistic discounts, seller trust signals, and listing presentation issues."
    },
    {
      q: "Does the tool guarantee that a product is fake or genuine?",
      a: "No. The platform provides an educational risk assessment only. It does not guarantee authenticity or fraud with absolute certainty."
    },
    {
      q: "What are common signs of a fake product listing?",
      a: "Common warning signs include unusually low prices, poorly written descriptions, copied images, unknown seller names, missing return information, and suspicious or newly created domains."
    },
    {
      q: "Should I trust star ratings alone?",
      a: "No. Ratings can be manipulated. Always check review quality, verified purchase patterns, seller history, product images, return policy, and platform credibility."
    },
    {
      q: "What should I do before buying from a suspicious listing?",
      a: "Compare with the official brand website, verify seller details, use secure payment methods, review return/refund policies, and avoid deals that seem unrealistically cheap."
    }
  ];

  return (
    <section id="faq" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Buyer Safety FAQ</h2>
        <p className="section-subtitle">Learn how to identify suspicious product listings and shop more safely online.</p>
        
        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* FAQ List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, x: 5 }}
                transition={{ duration: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--card-bg)', cursor: 'default' }}
              >
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-color)', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={20} color="#3b82f6" /> {faq.q}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, paddingLeft: '30px' }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Tips Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card"
            style={{ background: 'var(--text-color)', color: 'var(--card-bg)', position: 'sticky', top: '100px' }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldAlert size={24} color="#f59e0b" /> Quick Buyer Safety Tips
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Compare prices with the official brand store before buying.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Check whether the seller has a clear return or refund policy.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Be cautious of copied product images and poor grammar.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Avoid impulse purchases driven by extreme discount pressure.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Use secure payment methods and platform buyer protection whenever possible.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
