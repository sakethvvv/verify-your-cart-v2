import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

export const metadata = {
  title: "E-commerce Safety Blog | Verify Your Cart",
  description: "Read the latest news, guides, and reports on e-commerce fraud, scam detection, and online shopping safety.",
};

export default function BlogIndex() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Blog Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>The <span className="gradient-text">Safe Shopping</span> Blog</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              Expert insights, scam alerts, and technical guides to help you navigate the complex world of online shopping.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', marginBottom: '80px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                style={{ width: '100%', padding: '12px 12px 12px 48px', background: 'var(--bg-color)', border: '1px solid var(--card-border)', borderRadius: '12px', color: 'white', outline: 'none' }} 
              />
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['All', 'Safety Guides', 'Scam Alerts', 'Technology', 'Legal'].map((cat) => (
                <button key={cat} style={{ padding: '8px 20px', borderRadius: '12px', background: cat === 'All' ? 'var(--accent-blue)' : 'var(--bg-color)', border: '1px solid var(--card-border)', color: 'white', fontSize: '0.9rem', cursor: 'pointer' }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div style={{ marginBottom: '80px' }}>
            <Link href={`/blog/${blogPosts[0].slug}`} className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '0', overflow: 'hidden', padding: '0', transition: 'transform 0.3s ease' }}>
              <div style={{ position: 'relative', height: '400px' }}>
                <img src={blogPosts[0].image} alt={blogPosts[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '24px', left: '24px', padding: '6px 16px', background: 'var(--accent-blue)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700 }}>FEATURED</div>
              </div>
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {blogPosts[0].date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={14} /> {blogPosts[0].author}</span>
                </div>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>{blogPosts[0].title}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>{blogPosts[0].excerpt}</p>
                <span style={{ color: 'var(--accent-blue)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Read Full Article <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>

          {/* Post Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', width: '100%' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{post.category}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--card-border)', paddingTop: '20px', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{post.date}</span>
                    <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600 }}>Read More</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
