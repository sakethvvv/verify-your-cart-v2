"use client";
import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, ArrowRight, Search, Filter, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Safety Guides', 'Scam Alerts', 'Technology', 'Legal'];

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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
              <AlertTriangle color="var(--danger)" size={32} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>Active Scam Alerts</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>12 new phishing patterns detected this week.</p>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
              <ShieldCheck color="var(--success)" size={32} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>Verified Stores</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>450+ independent stores audited for safety.</p>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
              <Zap color="var(--accent-blue)" size={32} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>AI Intelligence</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Neural models updated 2 hours ago.</p>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', marginBottom: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 48px', background: 'var(--bg-color)', border: '1px solid var(--card-border)', borderRadius: '12px', color: 'white', outline: 'none' }} 
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  style={{ 
                    padding: '8px 20px', 
                    borderRadius: '12px', 
                    background: activeCategory === cat ? 'var(--accent-blue)' : 'var(--bg-color)', 
                    border: '1px solid var(--card-border)', 
                    color: 'white', 
                    fontSize: '0.9rem', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Post Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-panel blog-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="card-image" />
                  </div>
                  <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{post.category}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--card-border)', paddingTop: '20px', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{post.date}</span>
                      <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '80px 0' }}>
                <Search size={48} color="var(--text-secondary)" style={{ marginBottom: '24px', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>No articles found matching your criteria.</h3>
                <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} style={{ marginTop: '20px', color: 'var(--accent-blue)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Report a Scam CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '60px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), transparent)' }}>
            <AlertTriangle size={48} color="var(--danger)" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Found a New Scam?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 32px' }}>
              Help us protect the community. If you've encountered a suspicious listing or a fake store, report it to our security team for immediate analysis.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--danger)', boxShadow: '0 4px 14px 0 rgba(239, 68, 68, 0.39)' }}>Report Suspicious Listing</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-card:hover .card-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
