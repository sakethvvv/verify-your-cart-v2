const express = require('express');
const cors = require('cors');
const { scrapeProduct } = require('./scraper');
const { analyzeWithAI } = require('./ai');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Normal flow

  try {
    // 1. Scrape the URL
    console.log(`Scraping URL: ${url}`);
    const productData = await scrapeProduct(url);
    
    // 2. Send to AI
    console.log(`Analyzing data for: ${productData.title}`);
    const aiResult = await analyzeWithAI(productData);

    // 3. Return results
    res.json({
      title: productData.title,
      ...aiResult
    });

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
    
    // Infer a generic title or extract from url
    let domain = "E-Commerce Product";
    try { domain = new URL(url).hostname; } catch(e){}

    const productData = {
      title: `Product from ${domain}`,
      content: rawText.substring(0, 8000) // Truncate to save context window
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

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
