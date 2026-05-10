export default function TermsPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '40px' }}>Terms of Service</h1>
          <div className="prose">
            <p>Welcome to Verify Your Cart. These terms and conditions outline the rules and regulations for the use of our platform.</p>
            <h2>1. Agreement to Terms</h2>
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Verify Your Cart if you do not agree to all of the terms and conditions stated on this page.</p>
            <h2>2. License</h2>
            <p>Unless otherwise stated, Verify Your Cart and/or its licensors own the intellectual property rights for all material on Verify Your Cart. All intellectual property rights are reserved.</p>
            <h2>3. User Responsibilities</h2>
            <p>Users must use the tool for personal, non-commercial purposes. Automated scraping of our analysis results is strictly prohibited.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
