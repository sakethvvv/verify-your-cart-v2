import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import { Clock, BarChart, BookOpen, ChevronRight } from 'lucide-react';

export const metadata = {
  title: "Step-by-Step Safety Guides | Verify Your Cart",
  description: "Learn how to protect yourself with our comprehensive, expert-led tutorials on e-commerce safety.",
};

export default function GuidesIndex() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>Expert <span className="gradient-text">Safety Academy</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              Master the art of secure online shopping with our detailed, step-by-step tutorials designed for every skill level.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', transition: 'all 0.3s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ padding: '6px 12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-indigo)', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BarChart size={14} /> {guide.difficulty}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} /> {guide.time} read
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2 }}>{guide.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>{guide.excerpt}</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: 700 }}>
                  Start Learning <ChevronRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
