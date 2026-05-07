const axios = require('axios');

async function analyzeWithAI(productData) {
  try {
    const prompt = `
You are an advanced AI-powered e-commerce fraud detection engine for the project "Verify Your Cart".

Your job is to analyze online shopping products and determine whether the product listing is SAFE, LOW RISK, MEDIUM RISK, SUSPICIOUS, or HIGHLY SUSPICIOUS.

You must NEVER give random results.
You must ALWAYS follow the scoring system and rules strictly.

Product Title: ${productData.title}
Product Content snippet: ${productData.content}

==================================================
CRITICAL INSTRUCTIONS
==================================================
1. If the "Product Content snippet" contains "[SYSTEM_FLAG: BOT_PROTECTION]", it means the product is on a legitimate platform (like Amazon/Flipkart) but our automated scraper was blocked by CAPTCHA. DO NOT mark this as a phishing page or fake product! Generate a realistic positive safety analysis for the inferred Product Title with a high trust_score.
2. If there is NO bot protection flag, you MUST use the EXACT numbers and details provided in the Product Content snippet. Do NOT hallucinate ratings or review counts. Use exactly what is written in the snippet.
3. For the competitor 'url' in price comparison, NEVER generate a fake direct product link. You MUST construct a REAL search URL for the competitor store using the 'Product Title'. 
     Examples: "https://www.amazon.com/s?k=" + URL_ENCODED_PRODUCT_TITLE

==================================================
RISK SCORING SYSTEM
==================================================
Evaluate a Risk Score (0-100) where 100 is totally fake and 0 is totally safe.
Then calculate trust_score = 100 - Risk Score.

Risk Levels:
0-20 = SAFE
21-40 = LOW RISK
41-60 = MEDIUM RISK
61-80 = SUSPICIOUS
81-100 = HIGHLY SUSPICIOUS

==================================================
PRICE ANALYSIS RULES
==================================================
1. Huge Discount Detection: discount >= 80% (+40 risk), discount >= 60% (+25 risk), discount >= 40% (+10 risk)
2. Unrealistic Price: below 30% of market price (+50 risk), below 50% (+30 risk)
3. Suspicious Pricing Format: e.g. ₹999 instead of ₹1000 (+10 risk)
4. Missing Original Price: (+10 risk)

==================================================
SELLER ANALYSIS RULES
==================================================
1. Low Seller Rating: rating < 2.5 (+40 risk), rating < 3.5 (+20 risk)
2. New Seller: age < 3 months (+20 risk)
3. Very Few Sales: sales < 10 (+15 risk)
4. Suspicious Seller Name: random letters, excessive numbers, fake brand copies (+20 risk)
5. Unverified Seller: (+25 risk)

==================================================
REVIEW ANALYSIS RULES
==================================================
1. Too Many 5-Star Reviews: >95% (+20 risk)
2. Duplicate Reviews: Repeated review patterns (+35 risk)
3. Very Short Reviews: average < 10 words (+15 risk)
4. Sudden Review Spike: (+25 risk)
5. Sentiment Mismatch: Positive stars but negative text (+30 risk)
6. Fake Review Keywords: "must buy", "super product" repeated (+15 risk)

==================================================
PRODUCT LISTING ANALYSIS RULES
==================================================
1. Poor Grammar or Spam Titles (+20 risk)
2. Excessive Symbols or Emojis (+10 risk)
3. Missing Brand Information (+20 risk)
4. Missing Warranty/Description (+15 risk)

==================================================
BRAND ANALYSIS RULES
==================================================
Detect fake brand spellings (e.g. Nik3, Abibas) -> +40 risk. If official verified brand -> reduce risk by 10.

==================================================
URL & DOMAIN ANALYSIS RULES
==================================================
1. Suspicious Domain Names -> +50 risk
2. Domain Age < 6 months -> +40 risk

==================================================
STRICT OUTPUT FORMAT
==================================================
You must return your analysis STRICTLY as a JSON object exactly matching this structure. DO NOT add markdown outside the JSON.

{
  "trust_score": <Calculate 100 - Risk Score>,
  "final_verdict": "SAFE | LOW RISK | MEDIUM RISK | SUSPICIOUS | HIGHLY SUSPICIOUS",
  "verdict_summary": "<A 1-2 sentence high-level summary of the safety, combined with recommendations>",
  "detailed_checks": [
    {
      "id": "reviews",
      "category": "Reviews & Ratings",
      "findings": ["<finding 1 based on review rules>", "<finding 2>"]
    },
    {
      "id": "sentiment",
      "category": "Review Sentiment",
      "findings": ["<finding 1>", "<finding 2>"]
    },
    {
      "id": "price",
      "category": "Price Analysis",
      "findings": ["<finding 1 based on price rules>", "<finding 2>"]
    },
    {
      "id": "seller",
      "category": "Seller Trust",
      "findings": ["<finding 1 based on seller rules>", "<finding 2>"]
    },
    {
      "id": "description",
      "category": "Product Description & Brand",
      "findings": ["<finding 1 based on listing/brand rules>", "<finding 2>"]
    }
  ],
  "price_comparison": {
    "current_price": "<exact price extracted from snippet>",
    "competitors": [
      { "store": "<Store Name>", "price": "<estimated realistic price>", "url": "<real search query link>" },
      { "store": "<Store Name>", "price": "<estimated realistic price>", "url": "<real search query link>" }
    ],
    "verdict": "<short verdict about whether the price is good compared to market>"
  }
}
`;

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyBwgG6XP5pxU6WDx7pyl0FOEJ-QTGagsiY';

    // Connect to Google Gemini API with Retry for 503 errors
    let response;
    let retries = 3;
    while (retries > 0) {
      try {
        // Using gemini-2.5-flash which is highly capable and fully supported
        response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.1 // Slight temperature increase to prevent getting stuck, but low enough for logic
          }
        });
        break; // Success
      } catch (err) {
        if (err.response?.status === 503 && retries > 1) {
          console.log('Gemini 503 error, retrying...');
          await new Promise(res => setTimeout(res, 2000));
          retries--;
        } else {
          throw err;
        }
      }
    }

    const resultText = response.data.candidates[0].content.parts[0].text;

    // Attempt to parse JSON
    try {
      const parsed = JSON.parse(resultText);
      return parsed;
    } catch (parseError) {
      console.error('Failed to parse Ollama response as JSON', resultText);
      // Fallback
      return {
        trust_score: 50,
        final_verdict: "Risky Product",
        verdict_summary: "Could not definitively analyze the page due to an AI formatting error.",
        detailed_checks: [
          { id: "reviews", category: "Reviews & Ratings", findings: ["Unable to fetch verified reviews."] },
          { id: "sentiment", category: "Review Sentiment", findings: ["Insufficient data."] },
          { id: "price", category: "Price Analysis", findings: ["Cannot compare price."] },
          { id: "seller", category: "Seller Trust", findings: ["Seller info missing."] },
          { id: "description", category: "Product Description", findings: ["Parsing error."] }
        ],
        price_comparison: {
          current_price: "Unknown",
          competitors: [],
          verdict: "Could not retrieve competitor prices due to a parsing error."
        }
      };
    }
  } catch (error) {
    console.error('Error with AI analysis:', error.response ? error.response.data : error.message);
    throw new Error('AI analysis failed: ' + (error.response?.data?.error?.message || error.message));
  }
}

module.exports = { analyzeWithAI };
