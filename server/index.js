require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Redis = require('ioredis');
const { scrapeProduct } = require('./scraper');
const { analyzeWithAI } = require('./ai');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Redis (Upstash) - Only if URL is provided to avoid localhost connection attempts
let redis = null;
if (process.env.REDIS_URL) {
  try {
    redis = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 1,
      connectTimeout: 5000
    });
    redis.on('error', (err) => console.log('Redis connection skipped or failed.'));
  } catch (e) {
    console.log('Redis initialization skipped.');
  }
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'online', service: 'Verify Your Cart Backend' }));

app.post('/api/analyze', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // 1. Check Cache (Upstash Redis)
    if (redis) {
      const cachedResult = await redis.get(url);
      if (cachedResult) {
        console.log(`Cache Hit for: ${url}`);
        return res.json(JSON.parse(cachedResult));
      }
    }

    // 2. Scrape the URL
    console.log(`Scraping URL: ${url}`);
    const productData = await scrapeProduct(url);
    
    // 3. Send to AI (Gemini with OpenRouter Failover)
    console.log(`Analyzing data for: ${productData.title}`);
    const aiResult = await analyzeWithAI(productData);

    const finalResult = {
      title: productData.title,
      ...aiResult,
      cached: false,
      timestamp: new Date().toISOString()
    };

    // 4. Save to Cache (24 hour expiry)
    if (redis && aiResult.trust_score !== undefined) {
      await redis.set(url, JSON.stringify(finalResult), 'EX', 86400);
    }

    // 5. TODO: Log to Supabase for the "Scam Radar" dashboard
    // await logToSupabase(url, finalResult);

    res.json(finalResult);

  } catch (error) {
    console.error('Analysis error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Extension Endpoint (Bypasses Scraper / CAPTCHAs)
app.post('/api/analyze-raw', async (req, res) => {
  const { url, rawText } = req.body;

  if (!rawText) {
    return res.status(400).json({ error: 'Raw text is required' });
  }

  try {
    console.log(`Analyzing raw extension data for URL: ${url}`);
    
    let domain = "E-Commerce Product";
    try { domain = new URL(url).hostname; } catch(e){}

    const productData = {
      title: `Product from ${domain}`,
      content: rawText.substring(0, 8000)
    };

    const aiResult = await analyzeWithAI(productData);

    res.json({
      title: productData.title,
      ...aiResult
    });
  } catch (error) {
    console.error('Raw Analysis error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
