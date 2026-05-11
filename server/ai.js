const axios = require('axios');

/**
 * Main AI Analysis Engine with Failover Resilience
 */
async function analyzeWithAI(productData) {
  const prompt = `
You are an advanced AI-powered e-commerce fraud detection engine for the project "Verify Your Cart".
Your job is to analyze online shopping products and determine whether the product listing is SAFE, LOW RISK, MEDIUM RISK, SUSPICIOUS, or HIGHLY SUSPICIOUS.

Product Title: ${productData.title}
Product Content snippet: ${productData.content}

==================================================
STRICT OUTPUT FORMAT
==================================================
You must return your analysis STRICTLY as a JSON object matching the standard schema (trust_score, final_verdict, verdict_summary, detailed_checks, price_comparison).
`;

  // 1. Try Primary AI: Google Gemini
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (GEMINI_API_KEY) {
      console.log('Attempting Primary Analysis (Gemini)...');
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json', temperature: 0.1 }
        },
        { timeout: 15000 }
      );

      const resultText = response.data.candidates[0].content.parts[0].text;
      return JSON.parse(resultText);
    }
  } catch (geminiError) {
    console.error('Gemini Primary Failed:', geminiError.message);
  }

  // 2. Try Backup AI: OpenRouter (Llama 3 / Claude / GPT)
  try {
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
    if (OPENROUTER_API_KEY) {
      console.log('Attempting Backup Analysis (OpenRouter)...');
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'meta-llama/llama-3-8b-instruct:free', // Using a high-quality free model as fallback
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' }
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'HTTP-Referer': 'https://verify-your-cart-v2.vercel.app',
            'X-Title': 'Verify Your Cart'
          },
          timeout: 20000
        }
      );

      return JSON.parse(response.data.choices[0].message.content);
    }
  } catch (openRouterError) {
    console.error('OpenRouter Backup Failed:', openRouterError.message);
  }

  // 3. Last Resort Fallback (Offline Logic)
  return {
    trust_score: 50,
    final_verdict: "UNABLE TO VERIFY",
    verdict_summary: "AI systems are currently under high load. Please try again in a few minutes.",
    detailed_checks: [],
    price_comparison: { current_price: "N/A", competitors: [], verdict: "N/A" }
  };
}

module.exports = { analyzeWithAI };

module.exports = { analyzeWithAI };
