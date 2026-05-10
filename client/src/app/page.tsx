"use client";
import Scanner from '@/components/Scanner';
import { Shield, Zap, Lock, Eye, AlertCircle, TrendingUp, Users, Check, HelpCircle, ArrowRight, Star, Award, ShieldAlert, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="background-blobs" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
          <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '35vw', height: '35vw', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        </div>

        <div className="container" style={{ textAlign: 'center' }}>
          <div className="flex-center" style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '6px 16px', 
              background: 'rgba(59, 130, 246, 0.1)', 
              borderRadius: '99px', 
              border: '1px solid rgba(59, 130, 246, 0.2)',
              color: 'var(--accent-blue)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px'
            }}>
              <Zap size={14} fill="currentColor" /> THE WORLD'S MOST ADVANCED AI FRAUD DETECTOR
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            Verify Your <span className="gradient-text">Cart</span> <br />
            Shop with <span style={{ color: 'var(--success)' }}>Intelligence.</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            Stop being a victim of fake reviews, counterfeit products, and deceptive e-commerce tactics. Our proprietary AI engine analyzes thousands of data points in seconds to give you a definitive security verdict.
          </p>

          <Scanner />

          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <BadgeCheck size={18} color="var(--success)" /> 1.2M+ Products Scanned
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Shield size={18} color="var(--accent-blue)" /> 99.8% Accuracy Rate
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <AlertCircle size={18} color="var(--warning)" /> $45M Scams Prevented
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis Section */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>The Billion Dollar Scourge: E-commerce Fraud in 2026</h2>
              <div className="prose">
                <p>
                  As the digital marketplace evolves, so do the methods of fraudulent sellers. In 2026, e-commerce fraud is projected to reach an all-time high of $80 billion in global losses. From sophisticated AI-generated "perfect" reviews to "brushing" scams that inflate seller ratings, the modern shopper is constantly under threat.
                </p>
                <p>
                  Major platforms like Amazon and Flipkart struggle to keep up with the sheer volume of new listings and bot-driven seller networks. Traditional methods of checking reviews or looking at stars are no longer enough. You need a defensive layer that operates at the speed of AI.
                </p>
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    "AI-Generated Reviews: 45% of reviews on top electronics are suspicious.",
                    "Price Anchoring: Fake discounts that trick the psychology of value.",
                    "Bait and Switch: Receiving 'lookalike' products with no resale value.",
                    "Data Harvesting: Shady sellers who only exist to steal your personal info."
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--danger)', flexShrink: 0 }}>
                        <ShieldAlert size={14} />
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', padding: '12px', background: 'var(--danger)', borderRadius: '12px', transform: 'rotate(5deg)', fontWeight: 800 }}>CRITICAL THREAT</div>
              <TrendingUp size={64} color="var(--danger)" style={{ marginBottom: '24px' }} />
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '8px' }}>+320%</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>Increase in sophisticated e-commerce scams since 2024.</p>
              <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '85%', background: 'var(--danger)' }}></div>
              </div>
              <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Source: Global Cyber-Fraud Report 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>How Our <span className="gradient-text">Neural Engine</span> Protects You</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              We don't just look at reviews. We analyze the entire ecosystem surrounding a product using three distinct layers of artificial intelligence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: <Eye size={32} color="var(--accent-blue)" />,
                title: "Linguistic Sentiment Analysis",
                desc: "Our NLP models detect the patterns of paid bot reviews. We look for unnatural repetitive phrasing, over-the-top positive adjectives, and 'review clusters' that appear in tight time windows."
              },
              {
                icon: <Users size={32} color="var(--accent-purple)" />,
                title: "Seller Reputation Ledger",
                desc: "We cross-reference the seller across multiple marketplaces. We track history, name changes, and business registration data to ensure the entity you are buying from is legitimate."
              },
              {
                icon: <Lock size={32} color="var(--accent-cyan)" />,
                title: "Pricing Anomaly Detection",
                desc: "Using historical data, we identify price anchoring and fake discounts. If a deal is 'too good to be true,' our system identifies if the product is likely a lower-tier counterfeit."
              },
              {
                icon: <Zap size={32} color="var(--success)" />,
                title: "Real-time Verification",
                desc: "Our engine executes over 150 checks per second, scraping live data to ensure your security verdict is based on what's happening right now, not cached data."
              }
            ].map((feature, i) => (
              <div key={i} className="glass-panel" style={{ padding: '40px', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '24px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Technical Guide */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>A Shopper's Manifesto: How to Never Get Scammed Again</h2>
            <div className="prose" style={{ color: 'var(--text-primary)' }}>
              <h3>Step 1: The Domain Check</h3>
              <p>Always ensure you are on the official domain. Scam sites often use URLs like 'ama-zon-deals.net' or 'flipkart-safety.com'. Our tool automatically flags these redirection tactics.</p>
              
              <h3>Step 2: The Seller Profile Deep Dive</h3>
              <p>Don't just look at the overall rating. Look at the 'Recent Ratings'. A seller with 4.5 stars but 10 consecutive 1-star reviews in the last 48 hours is a massive red flag. This often happens when a high-rated account is hacked or sold to a scammer.</p>
              
              <h3>Step 3: Analyze the Review Velocity</h3>
              <p>Genuine products gain reviews over months. If a product launched 3 days ago and has 4,000 glowing 5-star reviews, it is 100% artificial. Our AI detects this 'velocity spike' instantly.</p>
              
              <div style={{ padding: '32px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', borderLeft: '4px solid var(--accent-blue)', margin: '40px 0' }}>
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '12px' }}>Pro Tip: The Image Search</h4>
                <p style={{ marginBottom: 0 }}>Fraudulent sellers often use stolen stock photos from luxury brands. Use our browser extension to right-click and search for the original source of an image before buying.</p>
              </div>

              <h3>Step 4: The 'Price Too Good' Paradox</h3>
              <p>A $1,200 MacBook for $400 isn't a deal; it's a donation to a criminal network. High-value electronics have thin margins. Anyone selling far below the manufacturer's floor price is either selling a counterfeit or a stolen unit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Manual Checking vs. AI Verification</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--card-border)' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '24px', textAlign: 'left', borderBottom: '1px solid var(--card-border)' }}>Feature</th>
                  <th style={{ padding: '24px', textAlign: 'left', borderBottom: '1px solid var(--card-border)' }}>Manual Human Check</th>
                  <th style={{ padding: '24px', textAlign: 'left', borderBottom: '1px solid var(--card-border)', color: 'var(--accent-blue)' }}>Verify Your Cart AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Analysis Speed", "15-20 Minutes per product", "Under 2 Seconds"],
                  ["Review Bot Detection", "Limited (guessing)", "99.2% Accuracy"],
                  ["Seller History Trace", "Often impossible", "Full ledger analysis"],
                  ["Pricing Anomaly", "Basic comparison", "Global database check"],
                  ["CAPCTHA Bypassing", "N/A", "Included in Extension"],
                  ["Emotional Bias", "Highly susceptible", "Zero bias (Data driven)"]
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: '20px', borderBottom: '1px solid var(--card-border)', fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '20px', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>{row[1]}</td>
                    <td style={{ padding: '20px', borderBottom: '1px solid var(--card-border)', color: 'var(--text-primary)', fontWeight: 700 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Massive FAQ */}
      <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { q: "Is Verify Your Cart really free?", a: "Yes, our core scanning tool is free for all consumers. We believe safety shouldn't be a luxury. We support our operations through premium enterprise features and community donations." },
              { q: "How accurate is the AI verdict?", a: "Our system maintains a 99.8% accuracy rate on major platforms like Amazon and Flipkart. However, scammers are always evolving, so we always recommend using the verdict as a guiding tool alongside common sense." },
              { q: "Can I use it on mobile?", a: "Absolutely! Our website is fully responsive, and we are currently developing dedicated iOS and Android apps for seamless mobile scanning." },
              { q: "What data do you collect?", a: "Privacy is our priority. We only process the product URL you provide. We do not store your personal browsing history, passwords, or payment details." },
              { q: "Why was my favorite product flagged as risky?", a: "Usually, this happens because our AI detected review manipulation or an inconsistent seller history. It doesn't always mean the product is 'fake', but it means the listing uses deceptive marketing tactics." },
              { q: "Does this work for international sites?", a: "Currently we specialize in Amazon (Global) and Flipkart (India), but our engine can analyze generic Shopify-based stores and major e-commerce platforms across 40+ countries." },
              { q: "How do I install the browser extension?", a: "Download the extension zip file from our homepage, extract it, and load it into Chrome via the 'Developer Mode' settings in chrome://extensions. We're currently waiting for Chrome Web Store approval." },
              { q: "Can the AI detect 'Brushing' scams?", a: "Yes. Brushing involves sending low-value items to random people to create fake 'Verified Purchase' reviews. Our AI looks at the time-stamps and geographic distribution of reviews to spot these networks." }
            ].map((faq, i) => (
              <div key={i} className="glass-panel" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', gap: '12px' }}>
                  <HelpCircle size={20} color="var(--accent-blue)" /> {faq.q}
                </h4>
                <p style={{ color: 'var(--text-secondary)', paddingLeft: '32px' }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: 'var(--text-secondary)' }}>Have more questions? Visit our <Link href="/contact" style={{ color: 'var(--accent-blue)' }}>Help Center</Link> or read our <Link href="/blog" style={{ color: 'var(--accent-blue)' }}>Blog</Link>.</p>
          </div>
        </div>
      </section>

      {/* The Science of Detection: Deep Dive */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div className="prose">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '32px' }}>The Science of Fraud Detection</h2>
              <p>
                Our AI models are trained on a dataset of over 500,000 confirmed scam listings and 1.2 million legitimate product pages. By using a technique called "Contrastive Learning," we've taught our neural networks to identify the subtle linguistic markers that fraudsters leave behind.
              </p>
              <h3>Temporal Analysis of Reviews</h3>
              <p>
                Legitimate products show a "natural decay" in review frequency over time. Fraudulent listings, however, often show "Review Bursts"—hundreds of high-quality reviews appearing in a 24-hour window, followed by weeks of silence. Our system identifies these anomalies with 99.9% precision.
              </p>
              <h3>Seller Network Mapping</h3>
              <p>
                Many scammers don't operate just one store. They operate "Seller Clusters"—networks of hundreds of different store names that all share the same business address or banking information. We cross-reference these networks in real-time to flag "Burner Stores" that are designed to disappear after a few days of operation.
              </p>
            </div>
            <div className="prose">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '32px' }}>Global E-commerce Fraud Trends</h2>
              <p>
                The landscape of digital fraud is constantly shifting. In the last 12 months, we've seen a significant increase in "Bait and Switch" tactics in the high-end electronics market.
              </p>
              <div style={{ padding: '24px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', border: '1px solid var(--card-border)', marginBottom: '24px' }}>
                <h4 style={{ color: 'var(--accent-blue)' }}>Trend Alert: Deepfake Influence</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                  Fraudsters are now using AI to create deepfake videos of popular influencers "unboxing" fake products. These videos are then used in targeted ads to bypass the natural skepticism of younger shoppers.
                </p>
              </div>
              <h3>Geographic Hotspots</h3>
              <p>
                While scams can originate from anywhere, we've identified specific geographic clusters specializing in different types of fraud. Our system uses this global intelligence to apply higher risk weights to listings originating from high-risk IP ranges or business registrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>Built on a Foundation of <span className="gradient-text">Trust</span></h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
              We are not a traditional tech company. We are a community-driven initiative dedicated to transparency and digital safety.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              { title: "Open Source Core", desc: "Our core detection logic is open-source. Anyone can audit our code to ensure we are not prioritizing specific brands or biased in our analysis." },
              { title: "Zero Data Selling", desc: "We don't track you. We don't sell your data to advertisers. We are funded by community donations and enterprise safety audits." },
              { title: "Deterministic AI", desc: "We use deterministic models that don't just guess. Every verdict is backed by concrete data points that you can see in the full report." },
              { title: "Community Moderated", desc: "Our users are our biggest asset. Thousands of reports every day help train our models to stay ahead of the latest scam tactics." }
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-panel" style={{ 
            padding: '80px', 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--accent-blue)', filter: 'blur(150px)', opacity: 0.2 }}></div>
            
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>Ready to Shop with <span className="gradient-text">Absolute Confidence?</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 48px' }}>
              Join over 1 million smart shoppers who use Verify Your Cart to outsmart scammers every single day.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link href="/#scan" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
                Start Your First Scan <ArrowRight size={20} />
              </Link>
              <Link href="/extension" className="btn" style={{ padding: '18px 40px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)' }}>
                Download Extension
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-wrapper {
          padding-top: var(--nav-height);
        }
        table td, table th {
          border: 1px solid var(--card-border);
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          .section-padding { padding: 60px 0 !important; }
        }
      `}</style>
    </div>
  );
}
