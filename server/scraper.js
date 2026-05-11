const axios = require('axios');

async function scrapeProduct(url) {
  // Scraper logic

  try {
    const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY;
    let markdownText = "";
    let dynamicTitle = "E-Commerce Product";

    if (SCRAPER_API_KEY) {
      // PREMIUM SOLUTION: Use ScraperAPI to completely bypass Amazon/Flipkart CAPTCHA
      const scraperUrl = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url)}&render=true`;
      const response = await axios.get(scraperUrl, { timeout: 35000 });
      const cheerio = require('cheerio');
      const $ = cheerio.load(response.data);
      
      dynamicTitle = $('title').text() || $('#productTitle').text() || "E-Commerce Product";
      // Clean up useless HTML
      $('script, style, noscript, svg, nav, footer, iframe').remove();
      markdownText = $('body').text().replace(/\s+/g, ' ').trim();

    } else {
      // FALLBACK: Use Jina AI Reader
      const response = await axios.get(`https://r.jina.ai/${url}`, {
        headers: { 'Accept': 'text/plain' },
        timeout: 8000
      });
      markdownText = response.data;
      const titleMatch = markdownText.match(/^Title:\s*(.+)$/m);
      if (titleMatch && titleMatch[1]) {
        dynamicTitle = titleMatch[1].trim();
      }
    }

    // Check if got blocked by an extreme bot protection or returned an error page
    const lowerText = markdownText.toLowerCase();
    if (lowerText.includes('robot check') || 
        lowerText.includes('automated access') ||
        lowerText.includes('503 service unavailable') ||
        lowerText.includes('503 - service unavailable') ||
        lowerText.includes('access denied') ||
        lowerText.includes('403 forbidden')) {
      return { 
        title: dynamicTitle, 
        content: `[SYSTEM_FLAG: BOT_PROTECTION] The platform blocked the scraper. Please infer the product details from the provided URL: ${url}.`
      };
    }

    // Truncate to avoid blowing up the LLM context window
    if (markdownText.length > 6000) {
      markdownText = markdownText.substring(0, 6000) + '...';
    }

    return {
      title: dynamicTitle,
      content: markdownText
    };
  } catch (error) {
    console.error('Scraping error/blocked:', error.message);
    // If request fails entirely
    return { 
      title: "E-Commerce Product", 
      content: `[SYSTEM_FLAG: BOT_PROTECTION] The platform rejected the request. Please infer the product details from the URL: ${url}.`
    };
  }
}

module.exports = { scrapeProduct };
