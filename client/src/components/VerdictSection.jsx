import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, XCircle, BrainCircuit, Star, Target, DollarSign, Store, FileText, Lightbulb, TrendingDown, ShoppingCart, ExternalLink } from 'lucide-react';

const VerdictSection = ({ result }) => {
  if (!result) {
    return (
      <section id="verdict" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">The Final Verdict</h2>
          <p className="section-subtitle">Scan a product URL to see the verdict here.</p>
        </div>
      </section>
    );
  }

  // Helper to determine styling based on verdict
  const getVerdictStyles = (verdict) => {
    const v = verdict?.toLowerCase() || '';
    if (v.includes('safe') || v.includes('genuine')) {
      return { 
        color: '#10b981', 
        bg: 'rgba(16, 185, 129, 0.1)',
        icon: <ShieldCheck size={24} color="#10b981" />,
        emoji: '🤩'
      };
    } else if (v.includes('fake') || v.includes('scam')) {
      return { 
        color: '#ef4444', 
        bg: 'rgba(239, 68, 68, 0.1)',
        icon: <XCircle size={24} color="#ef4444" />,
        emoji: '🚫'
      };
    } else {
      return { 
        color: '#f59e0b', 
        bg: 'rgba(245, 158, 11, 0.1)',
        icon: <AlertTriangle size={24} color="#f59e0b" />,
        emoji: '🤔'
      };
    }
  };

  const vStyles = getVerdictStyles(result.final_verdict);

  const getCategoryIcon = (id) => {
    switch(id) {
      case 'reviews': return <Star size={18} color="#a855f7" />;
      case 'sentiment': return <Target size={18} color="#ec4899" />;
      case 'price': return <DollarSign size={18} color="#10b981" />;
      case 'seller': return <Store size={18} color="#f59e0b" />;
      case 'description': return <FileText size={18} color="#3b82f6" />;
      default: return <ShieldCheck size={18} color="#64748b" />;
    }
  };

  return (
    <section id="verdict" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
          
          {/* Left Column: Trust Score */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              flex: '1 1 280px', 
              background: 'var(--card-bg)', 
              borderRadius: '24px', 
              padding: '32px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              TRUST SCORE
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ fontSize: '4.5rem', fontWeight: 800, color: vStyles.color, lineHeight: 1 }}>
                {result.trust_score}%
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <div style={{ background: '#10b981', color: 'var(--card-bg)', padding: '4px', borderRadius: '8px' }}>
                   <ShieldCheck size={28} />
                </div>
                <div style={{ fontSize: '2rem' }}>{vStyles.emoji}</div>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ width: '100%', height: '12px', background: 'var(--card-border)', borderRadius: '99px', overflow: 'hidden', marginBottom: '32px' }}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${result.trust_score}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ height: '100%', background: vStyles.color, borderRadius: '99px' }}
              />
            </div>

            {/* AI Verdict Card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ background: vStyles.color, padding: '8px', borderRadius: '12px' }}>
                  {vStyles.icon}
                </div>
                <span style={{ fontWeight: 700, color: 'var(--text-color)' }}>AI Verdict</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, paddingLeft: '44px' }}>
                {result.verdict_summary}
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                FINAL AI VERDICT
              </div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: vStyles.bg, 
                color: vStyles.color, 
                padding: '12px 32px', 
                borderRadius: '99px', 
                fontWeight: 700,
                fontSize: '1.2rem',
                border: `1px solid ${vStyles.color}`
              }}>
                {vStyles.icon} {result.final_verdict}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Checks */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              flex: '1 1 280px', 
              background: 'var(--card-bg)', 
              borderRadius: '24px', 
              padding: '32px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '16px' }}>
                  <BrainCircuit size={24} color="#3b82f6" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-color)', margin: 0 }}>What the AI Checked</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Detailed scanning report</span>
                </div>
              </div>
              <div style={{ background: 'var(--bg-secondary)', color: '#94a3b8', fontSize: '0.75rem', padding: '6px 12px', borderRadius: '8px', fontWeight: 600 }}>
                ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {result.detailed_checks?.map((check, index) => (
                <div key={index} style={{ border: '1px solid #f1f5f9', borderRadius: '16px', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ 
                      background: 'var(--card-bg)', 
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)', 
                      padding: '8px', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {getCategoryIcon(check.id)}
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--text-color)' }}>{check.category}</span>
                  </div>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {check.findings.map((finding, fIndex) => (
                      <li key={fIndex} style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.95rem', 
                        marginBottom: '8px', 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}>
                        <span style={{ color: '#cbd5e1', fontSize: '1.2rem', lineHeight: '1rem' }}>•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Recommendation Dark Card */}
            <div style={{ background: 'var(--card-bg)', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', marginTop: '24px' }}>
              <div style={{ flexShrink: 0 }}>
                <Lightbulb color="#fbbf24" size={24} />
              </div>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  RECOMMENDATION
                </div>
                <p style={{ color: 'var(--card-bg)', margin: 0, fontSize: '1.05rem', lineHeight: 1.5 }}>
                  {result.verdict_summary}
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px', color: '#94a3b8', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <ShieldCheck size={14} /> AI-generated estimation. Always verify independently.
            </div>

          </motion.div>

        </div>

        {/* Price Comparison Full Width Card */}
        {result.price_comparison && result.price_comparison.competitors?.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ 
              marginTop: '24px',
              background: 'var(--card-bg)', 
              borderRadius: '24px', 
              padding: '32px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '16px' }}>
                <TrendingDown size={24} color="#10b981" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-color)', margin: 0 }}>Market Price Comparison</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Checking {result.price_comparison.competitors.length} other top e-commerce sites</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {result.price_comparison.competitors.map((comp, idx) => {
                const isCurrent = comp.price === result.price_comparison.current_price;
                return (
                  <div key={idx} style={{ 
                    border: isCurrent ? '2px solid #10b981' : '1px solid #e2e8f0', 
                    borderRadius: '16px', 
                    padding: '20px',
                    background: isCurrent ? 'rgba(16, 185, 129, 0.05)' : 'var(--card-bg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    position: 'relative'
                  }}>
                    {isCurrent && (
                      <div style={{ position: 'absolute', top: '-12px', right: '16px', background: '#10b981', color: 'var(--card-bg)', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '99px', letterSpacing: '0.5px' }}>
                        LOWEST PRICE
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ShoppingCart size={16} color="#94a3b8" /> {comp.store}
                      </span>
                      {comp.url && (
                        <a href={comp.url} target="_blank" rel="noreferrer" style={{ color: '#3b82f6', display: 'flex', alignItems: 'center' }}>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-color)' }}>
                      {comp.price}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
              <strong style={{ color: 'var(--text-color)' }}>Price Verdict:</strong> <span style={{ color: 'var(--text-secondary)' }}>{result.price_comparison.verdict}</span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default VerdictSection;
