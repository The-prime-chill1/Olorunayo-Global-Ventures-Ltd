import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CostEstimatorModal from './components/CostEstimatorModal';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import LegalPage from './pages/LegalPage';

// Auto scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const handleOpenEstimator = () => {
    setIsEstimatorOpen(true);
  };

  const handleCloseEstimator = () => {
    setIsEstimatorOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar onOpenEstimator={handleOpenEstimator} />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/about" element={<About onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/services" element={<ServicesPage onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/projects" element={<ProjectsPage onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/industries" element={<IndustriesPage onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/faq" element={<FAQPage onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/contact" element={<ContactPage onOpenEstimator={handleOpenEstimator} />} />
            <Route path="*" element={<Home onOpenEstimator={handleOpenEstimator} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Interactive Estimator Modal */}
        <CostEstimatorModal 
          isOpen={isEstimatorOpen} 
          onClose={handleCloseEstimator} 
        />
      </div>
    </Router>
  );
}
