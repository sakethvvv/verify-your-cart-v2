export default function DisclaimerPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '40px' }}>Disclaimer</h1>
          <div className="prose">
            <p>The information provided by Verify Your Cart ("we," "us," or "our") on our website and through our AI tools is for general informational purposes only.</p>
            <h2>1. AI Accuracy</h2>
            <p>Our analysis is powered by artificial intelligence and machine learning models. While we strive for 100% accuracy, AI can produce "hallucinations" or incorrect verdicts. We do not guarantee the accuracy of any analysis.</p>
            <h2>2. No Professional Advice</h2>
            <p>The results provided by our tool do not constitute financial or legal advice. Always use your own judgment before making a purchase.</p>
            <h2>3. Limitation of Liability</h2>
            <p>In no event shall Verify Your Cart be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from the use of our tool.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
