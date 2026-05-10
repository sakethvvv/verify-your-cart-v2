import { guides } from '@/lib/guides-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, Info, ShieldAlert } from 'lucide-react';

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      <article>
        <header style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--card-border)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '24px' }}>
              <ArrowLeft size={18} /> Back to Guides
            </Link>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>{guide.title}</h1>
            <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={16} /> Tutorial</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>Difficulty: {guide.difficulty}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>Est. Time: {guide.time}</span>
            </div>
          </div>
        </header>

        <section className="section-padding">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="prose">
              <div style={{ padding: '24px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '16px', border: '1px solid var(--accent-blue)', marginBottom: '40px', display: 'flex', gap: '16px' }}>
                <Info size={24} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  <strong>Key Learning Objective:</strong> By the end of this guide, you will be able to perform a complete security audit on any listing using both manual techniques and automated tools.
                </p>
              </div>

              <div dangerouslySetInnerHTML={{ __html: guide.content }} />

              <div style={{ marginTop: '60px', padding: '40px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '24px', border: '1px solid var(--success)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={24} /> Knowledge Check
                </h3>
                <p>Are you ready to test these skills? Try scanning a product you were planning to buy today and see if you can identify the red flags we discussed.</p>
                <Link href="/#scan" className="btn btn-primary" style={{ marginTop: '16px' }}>Try a Scan Now</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
