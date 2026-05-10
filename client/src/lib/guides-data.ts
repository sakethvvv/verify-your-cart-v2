export interface Guide {
  title: string;
  slug: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: string;
  excerpt: string;
  content: string;
}

export const guides: Guide[] = [
  {
    title: "The Ultimate Guide to Spotting Fake Amazon Reviews",
    slug: "spotting-fake-amazon-reviews",
    difficulty: 'Beginner',
    time: '15 min',
    excerpt: "A step-by-step masterclass on identifying bot-generated reviews and manipulated seller ratings.",
    content: `
      <h2>Introduction</h2>
      <p>Fake reviews are the lifeblood of fraudulent Amazon sellers. In this guide, we'll teach you the exact methods our AI uses to identify deceptive content.</p>
      
      <h2>Step 1: Check the Review Velocity</h2>
      <p>Normal products gain reviews slowly. If you see a product that goes from 0 to 500 reviews in 3 days, it's a massive red flag.</p>

      <h2>Step 2: Look for 'Review Clusters'</h2>
      <p>Scammers often use groups of accounts that all review the same set of products. If you see several reviewers who have all reviewed the same 5 unrelated products, they are part of a 'Review Farm'.</p>

      <h2>Step 3: Analyze the Language</h2>
      <p>Bot reviews often use repetitive templates. Look for phrases like 'I was skeptical at first but...' or 'Exactly as described, high quality!'.</p>
    `
  },
  {
    title: "How to Safely Shop on Instagram and TikTok",
    slug: "safe-social-media-shopping",
    difficulty: 'Intermediate',
    time: '10 min',
    excerpt: "Protecting your data and money when buying from influencers and social ads.",
    content: `
      <h2>The Social Media Trap</h2>
      <p>Instagram and TikTok have become major marketplaces, but they lack the robust buyer protection of Amazon or eBay.</p>
      
      <h2>Verification Checklist</h2>
      <ul>
        <li>Check the account's history. Is it a verified business?</li>
        <li>Look at the comments. Are they disabled? Are people complaining about non-delivery?</li>
        <li>Verify the website URL. Does it match the brand's official site?</li>
      </ul>
    `
  },
  {
    title: "Decoding E-commerce Tracking Fraud",
    slug: "decoding-tracking-fraud",
    difficulty: 'Advanced',
    time: '20 min',
    excerpt: "How scammers use fake tracking numbers and third-party logistics to steal your money.",
    content: `
      <h2>The Fake Tracking Phenomenon</h2>
      <p>Scammers have found ways to provide tracking numbers that show 'delivered' even when the package never arrived at your house.</p>
      
      <h2>How they do it</h2>
      <p>They buy tracking data from unrelated shipments in your zip code. We'll show you how to cross-reference this data with the carrier's internal reports to catch them.</p>
    `
  }
];
