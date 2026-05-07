
import { motion } from 'framer-motion';

const TeamSection = () => {
  const team = [
    'Saketh Vedullapalli',
    'Jagadeesh Goda',
    'Madhuri Palla',
    'Akash Kumar Kosetti',
    'Sowmya Betha',
    'Saranya D'
  ];

  return (
    <section id="about" style={{ background: 'rgba(255, 255, 255, 0.01)', paddingBottom: '80px' }}>
      <div className="container">
        <h2 className="section-title">Meet The Developer</h2>
        <p className="section-subtitle">Aditya College of Engineering and Technology • ECE-A</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -15, 0] }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Avatar Circle */}
            <div style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              background: '#eff6ff', 
              border: '10px solid white',
              boxShadow: '0 20px 50px -10px rgba(59, 130, 246, 0.25)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <span style={{ fontSize: '5rem', fontWeight: 800, color: '#2563eb', letterSpacing: '-2px' }}>SV</span>
            </div>
            
            {/* Name */}
            <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-color)', letterSpacing: '-1px', textAlign: 'center' }}>
              Saketh Vedullapalli
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
