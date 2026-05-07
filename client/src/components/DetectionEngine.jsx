import { motion } from 'framer-motion';
import { Star, UserX, TrendingDown, FileText } from 'lucide-react';

const DetectionEngine = () => {
  const features = [
    {
      title: '1. Product Review',
      items: [
        'Analyze review text sentiment.',
        'Check if sentiment matches star rating.',
        'Detect fake patterns (copy-paste).',
        'Identify abnormal 5-star spikes.'
      ],
      icon: <Star size={24} color="white" />,
      color: '#a855f7', // Purple
      blobColor: 'rgba(168, 85, 247, 0.1)'
    },
    {
      title: '2. Seller Trust',
      items: [
        'Evaluate seller history & behavior.',
        'Check for new or suspicious accounts.',
        'Detect sellers with frequent complaints.',
        'Flag missing seller details.'
      ],
      icon: <UserX size={24} color="white" />,
      color: '#f97316', // Orange
      blobColor: 'rgba(249, 115, 22, 0.1)'
    },
    {
      title: '3. Price Analysis',
      items: [
        'Compare price with market average.',
        'Flag unrealistically low prices.',
        'Detect misleading discount claims.',
        'Identify \'too good to be true\' offers.'
      ],
      icon: <TrendingDown size={24} color="white" />,
      color: '#10b981', // Green
      blobColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: '4. Product Content',
      items: [
        'Check title & description quality.',
        'Detect exaggerated claims.',
        'Identify grammar errors.',
        'Find mismatches between images & text.'
      ],
      icon: <FileText size={24} color="white" />,
      color: '#3b82f6', // Blue
      blobColor: 'rgba(59, 130, 246, 0.1)'
    }
  ];

  return (
    <section id="guide" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
          THE DETECTION ENGINE
        </div>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '16px' }}>How the Technology Works</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          Our smart system acts as a digital bodyguard. Instead of just looking at the price tag, we analyze multiple data points using simple AI concepts.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ 
                background: 'var(--card-bg)', 
                borderRadius: '24px', 
                padding: '32px 24px', 
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Soft corner blob */}
              <div style={{ 
                position: 'absolute', 
                top: '-40px', 
                right: '-40px', 
                width: '150px', 
                height: '150px', 
                background: feature.blobColor, 
                borderRadius: '50%' 
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  background: feature.color, 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '16px' }}>
                  {feature.title}
                </h3>
                
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {feature.items.map((item, i) => (
                    <li key={i} style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem', 
                      marginBottom: '12px', 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.5
                    }}>
                      <span style={{ color: '#cbd5e1', fontSize: '1.2rem', lineHeight: '0.9rem' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetectionEngine;
