import { motion } from 'framer-motion';
import { Star, UserX, Image as ImageIcon, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const frauds = [
    {
      title: 'Fake Reviews',
      description: 'Bot-generated 5-star ratings that hide poor quality.',
      icon: <Star color="#94a3b8" size={24} />
    },
    {
      title: 'Fake Sellers',
      description: 'Accounts that disappear after taking your money.',
      icon: <UserX color="#94a3b8" size={24} />
    },
    {
      title: 'Fake Images',
      description: 'Using professional stock photos for a sub-par physical item.',
      icon: <ImageIcon color="#94a3b8" size={24} />
    },
    {
      title: 'Price Scams',
      description: 'Listings that use "too good to be true" prices to lure victims.',
      icon: <TrendingDown color="#94a3b8" size={24} />
    }
  ];

  return (
    <section id="features" style={{ padding: '100px 0', background: 'var(--card-bg)' }}>
      <div className="container">
        
        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Core Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              display: 'inline-flex', 
              background: 'rgba(239, 68, 68, 0.1)', 
              color: '#ef4444', 
              padding: '6px 16px', 
              borderRadius: '99px', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '1px', 
              textTransform: 'uppercase', 
              marginBottom: '24px' 
            }}>
              The Core Problem
            </div>
            
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-color)', lineHeight: 1.1, marginBottom: '24px' }}>
              Imagine saving up for <span style={{ color: '#ef4444' }}>branded gear...</span>
            </h2>
            
            <blockquote style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.6, 
              marginBottom: '24px', 
              borderLeft: '4px solid rgba(239, 68, 68, 0.3)', 
              paddingLeft: '1.5rem', 
              fontStyle: 'italic' 
            }}>
              "You find a pair with a 4.5-star rating. But when the package arrives, it’s a cheap plastic knock-off that stops working in 48 hours. It’s more than just a waste of money; it’s a breach of trust."
            </blockquote>
            
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.6 }}>
              The digital marketplace has a major transparency issue. Currently, it is nearly impossible for a regular shopper to distinguish between reality and a well-crafted scam.
            </p>
          </motion.div>

          {/* Right Column: 4 Types Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px', textAlign: 'center' }}>
              TARGETING 4 TYPES OF FRAUD
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
              {frauds.map((fraud, index) => (
                <div key={index} style={{ 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '24px', 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px' 
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--card-bg)', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                  }}>
                    {fraud.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-color)', margin: 0 }}>{fraud.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                    {fraud.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
