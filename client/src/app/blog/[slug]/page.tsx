import { blogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Bookmark, ShieldCheck, Tag } from 'lucide-react';

import BlogActions from '@/components/BlogActions';

export async function generateStaticParams() {
...
              <div style={{ display: 'flex', gap: '12px' }}>
                <BlogActions title={post.title} url={`https://verify-your-cart-v2.vercel.app/blog/${post.slug}`} />
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container" style={{ maxWidth: '1000px', marginTop: '-40px' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} />
        </div>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px' }}>
            {/* Main Content */}
            <div className="prose" style={{ maxWidth: '100%' }}>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div style={{ marginTop: '60px', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--card-border)' }}>
                <h3 style={{ marginTop: 0 }}>Did this help?</h3>
                <p>Verify Your Cart is a community-driven project. If you found this information valuable, consider sharing it with your friends and family to keep them safe from online scams.</p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                  <button className="btn btn-primary">Share on Twitter</button>
                  <button className="btn" style={{ background: 'var(--bg-color)', border: '1px solid var(--card-border)' }}>Copy Link</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div className="glass-panel" style={{ padding: '32px' }}>
                <ShieldCheck size={40} color="var(--accent-blue)" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>Verify Before You Buy</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Don't take the risk. Use our AI scanner to check any product URL for fraud indicators in seconds.
                </p>
                <Link href="/#scan" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Scan Now</Link>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Tag size={18} /> Categories
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Safety', 'Fraud', 'AI', 'Ecommerce', 'Amazon', 'Flipkart'].map(tag => (
                    <span key={tag} style={{ padding: '6px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Related Articles</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{p.title}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </div>
  );
}
