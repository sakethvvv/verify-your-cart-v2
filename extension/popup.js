document.getElementById('scanBtn').addEventListener('click', async () => {
  const resultDiv = document.getElementById('result');
  const statusText = document.getElementById('statusText');
  const scoreDiv = document.getElementById('score');
  const verdictDiv = document.getElementById('verdict');
  const btn = document.getElementById('scanBtn');

  resultDiv.style.display = 'block';
  statusText.innerText = "Extracting data...";
  statusText.style.color = "#3B82F6";
  scoreDiv.innerText = "";
  verdictDiv.innerText = "";
  btn.disabled = true;
  btn.innerText = "Scanning...";

  try {
    // 1. Get the active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // 2. Inject a script to grab the text (Bypasses all CAPTCHAs because the user already solved them!)
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        // Clean up text format slightly
        return document.body.innerText.replace(/\s+/g, ' ').substring(0, 8000); 
      },
    }, async (injectionResults) => {
      
      const pageText = injectionResults[0].result;
      statusText.innerText = "Analyzing with AI...";
      statusText.style.color = "#06B6D4";

      // 3. Send the raw text directly to your Vercel Backend
      // REPLACE this URL with your production Vercel URL once you deploy the new backend endpoint!
      const API_URL = 'https://verify-your-cart-v2.onrender.com/api/analyze-raw';
      
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rawText: pageText, url: tab.url })
        });
        
        const data = await response.json();
        
        // 4. Display the results!
        if (data.error) throw new Error(data.error);

        statusText.innerText = "Scan Complete";
        statusText.style.color = "#9CA3AF";
        
        scoreDiv.innerText = data.trust_score + "%";
        
        // Color coding based on your logic
        if (data.trust_score >= 80) {
          scoreDiv.style.color = "#10B981"; // Safe (Green)
        } else if (data.trust_score >= 40) {
          scoreDiv.style.color = "#F59E0B"; // Suspicious (Orange)
        } else {
          scoreDiv.style.color = "#EF4444"; // Dangerous (Red)
        }

        verdictDiv.innerText = data.final_verdict;
        verdictDiv.style.fontWeight = "bold";

      } catch (err) {
        statusText.innerText = "Error analyzing product.";
        statusText.style.color = "#EF4444";
        verdictDiv.innerText = err.message;
      } finally {
        btn.disabled = false;
        btn.innerText = "Scan Again";
      }
    });
  } catch(e) {
    statusText.innerText = "Please open a product page first.";
    statusText.style.color = "#EF4444";
    btn.disabled = false;
    btn.innerText = "Scan Current Page";
  }
});
