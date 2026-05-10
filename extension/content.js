// Content Script for automatic scanning and UI overlay
console.log("Verify Your Cart: Content Script Active");

function createOverlay(data) {
  const overlay = document.createElement('div');
  overlay.id = 'vyc-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    width: 320px;
    background: #0B0F19;
    border: 1px solid rgba(0, 229, 168, 0.2);
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    color: #E6EDF3;
    padding: 24px;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
    backdrop-filter: blur(12px);
  `;

  const header = document.createElement('div');
  header.style.cssText = `display: flex; justify-content: space-between; align-items: center;`;
  header.innerHTML = `
    <div style="font-weight: 800; font-size: 0.9rem; color: #00E5A8;">AI VERIFIED</div>
    <div id="vyc-close" style="cursor: pointer; opacity: 0.5;">✕</div>
  `;

  const scoreContainer = document.createElement('div');
  scoreContainer.style.cssText = `display: flex; flex-direction: column; gap: 8px;`;
  
  const trustColor = data.trust_score >= 80 ? '#00E5A8' : data.trust_score >= 40 ? '#F59E0B' : '#FF4D6D';
  
  scoreContainer.innerHTML = `
    <div style="font-size: 0.75rem; color: #8B949E; font-weight: 700;">TRUST SCORE</div>
    <div style="font-size: 2.5rem; font-weight: 800; color: ${trustColor};">${data.trust_score}%</div>
    <div style="font-weight: 700; font-size: 1rem;">${data.final_verdict}</div>
  `;

  const summary = document.createElement('div');
  summary.style.cssText = `font-size: 0.85rem; line-height: 1.5; color: #8B949E;`;
  summary.innerText = data.verdict_summary;

  const footer = document.createElement('div');
  footer.style.cssText = `border-top: 1px solid rgba(230, 237, 243, 0.08); padding-top: 12px; font-size: 0.7rem; color: #8B949E;`;
  footer.innerText = "Powered by Verify Your Cart Neural Engine v2.5";

  overlay.appendChild(header);
  overlay.appendChild(scoreContainer);
  overlay.appendChild(summary);
  overlay.appendChild(footer);

  document.body.appendChild(overlay);

  document.getElementById('vyc-close').onclick = () => overlay.remove();
}

async function performAutoScan() {
  const pageText = document.body.innerText.replace(/\s+/g, ' ').substring(0, 8000);
  const url = window.location.href;

  try {
    const response = await fetch('https://verify-your-cart-v2.vercel.app/api/analyze-raw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rawText: pageText, url: url })
    });
    
    const data = await response.json();
    if (data.trust_score !== undefined) {
      createOverlay(data);
    }
  } catch (err) {
    console.error("Verify Your Cart: Scan failed", err);
  }
}

// Only scan on product pages (simple heuristic)
if (window.location.href.includes('/dp/') || window.location.href.includes('/p/') || window.location.href.includes('/product/')) {
  performAutoScan();
}
