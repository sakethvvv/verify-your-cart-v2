import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import DetectionEngine from './components/DetectionEngine';
import TipsSection from './components/TipsSection';
import VerdictSection from './components/VerdictSection';
import DashboardSection from './components/DashboardSection';
import GuideSection from './components/GuideSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyzeResult = (result) => {
    setAnalysisResult(result);
  };

  return (
    <div className="app-container">
      {/* Background Animated Blobs */}
      <div className="background-blobs">
        <motion.div 
          className="blob blob-1"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="blob blob-2"
          animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="blob blob-3"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection onAnalyzeResult={handleAnalyzeResult} />
        <VerdictSection result={analysisResult} />
        <DashboardSection />
        <ProblemSection />
        <DetectionEngine />
        <TipsSection />
        <GuideSection />
        <AboutSection />
        <FAQSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
