import { motion } from 'framer-motion';
import { Package, ShieldCheck, Clock, Award } from 'lucide-react';

const DashboardSection = () => {
  const recentScans = [
    { id: 1, url: 'ZORO Men\'s Vegan Leather Formal Belt', status: 'Genuine', date: '2 mins ago', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 2, url: 'Apple iPhone 15 Pro Max (256GB)', status: 'Genuine', date: '15 mins ago', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 3, url: 'Sony WH-1000XM5 Wireless Headphones (Refurbished)', status: 'Fake', date: '1 hour ago', icon: Package, color: 'text-red-600', bg: 'bg-red-100' },
    { id: 4, url: 'Nike Air Jordan 1 Retro High OG', status: 'Fake', date: '3 hours ago', icon: Package, color: 'text-red-600', bg: 'bg-red-100' },
  ];

  return (
    <section id="dashboard" className="container" style={{ padding: '80px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Your Shopping Inbox</h2>
        <p className="section-subtitle">
          Track all your product verifications in one unified dashboard and earn rewards for safe shopping.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {/* Rewards Card */}
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5' }}>
              <Award size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-color)', display: 'flex', alignItems: 'center' }}>
                Keth Rewards 
                <span style={{ fontSize: '0.65rem', background: 'var(--card-border)', color: 'var(--text-secondary)', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px', fontWeight: '700', textTransform: 'uppercase' }}>beta testing</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>450 Points Earned</p>
              <div style={{ marginTop: '8px', fontSize: '0.8rem', color: '#4f46e5', fontWeight: '500', cursor: 'pointer' }}>Redeem Now &rarr;</div>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(5, 150, 105, 0.1)', color: '#059669' }}>
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-color)' }}>Safe Purchases</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>7,423+ Verified Links</p>
              <div style={{ marginTop: '8px', fontSize: '0.8rem', color: '#059669', fontWeight: '500' }}>Great Job!</div>
            </div>
          </div>
        </div>

        {/* Recent Scans List */}
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={20} /> Recent Scans
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentScans.map((scan) => (
              <div key={scan.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', transition: 'background 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '200px', flex: 1 }}>
                  <div className={scan.bg} style={{ padding: '10px', borderRadius: '8px', flexShrink: 0 }}>
                    <scan.icon className={scan.color} size={20} />
                  </div>
                  <div style={{ wordBreak: 'break-word', paddingRight: '16px' }}>
                    <div style={{ fontWeight: '600', color: 'var(--text-color)', marginBottom: '4px', fontSize: '0.95rem' }}>{scan.url}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{scan.date}</div>
                  </div>
                </div>
                <div className={`badge ${scan.status === 'Genuine' ? 'safe' : 'fake'}`} style={{ flexShrink: 0 }}>
                  {scan.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardSection;
