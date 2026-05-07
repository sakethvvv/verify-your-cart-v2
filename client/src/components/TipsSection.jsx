
import { motion } from 'framer-motion';
import { AlertTriangle, Lock, Search, CreditCard, Eye, Type } from 'lucide-react';

const TipsSection = () => {
  const tips = [
    { text: 'Price Too Low?', icon: <AlertTriangle size={20} color="#f59e0b" /> },
    { text: 'Check Protocol (https)', icon: <Lock size={20} color="#10b981" /> },
    { text: 'Grammar Matters', icon: <Type size={20} color="#ef4444" /> },
    { text: 'Reverse Image Search', icon: <Search size={20} color="#3b82f6" /> },
    { text: 'Payment Methods', icon: <CreditCard size={20} color="#8b5cf6" /> },
    { text: 'Stay Vigilant', icon: <Eye size={20} color="#ec4899" /> }
  ];

  return (
    <section id="tips">
      <div className="container">
        <h2 className="section-title">Fraud Prevention Tips</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
          {tips.map((tip, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid #e2e8f0',
                padding: '12px 24px',
                borderRadius: '999px',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {tip.icon}
              {tip.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
