import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';
import './Hero.css';

export default function Hero({ onOpenEstimator }) {
  const [activeTab, setActiveTab] = React.useState('building');
  const [corridor, setCorridor] = React.useState('lekki');
  const [projectScope, setProjectScope] = React.useState('residential');
  const [scale, setScale] = React.useState('medium');

  const handleCalculate = (e) => {
    e.preventDefault();
    if (onOpenEstimator) {
      onOpenEstimator();
    }
  };

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Background Media */}
      <div className="hero-bg-container">
        <img 
          src="/images/hero.jpg" 
          alt="Olorunayo Global Ventures Construction Site" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-mesh-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content-wrapper">
          {/* Tag / Badge */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Premier Nigerian Engineering &amp; Construction</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            BUILDING EXCELLENCE.{" "}
            <span className="blue-accent">DELIVERING QUALITY.</span>{" "}
            CREATING LASTING VALUE.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <strong>{companyInfo.name}</strong> is an established multi-disciplinary enterprise 
            delivering turnkey construction, precision architectural aluminium windows and doors, 
            heavy structural steel fabrication, certified concrete blocks, interlocking paving stones, 
            and strategic real estate solutions across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="hero-buttons-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link to="/services" className="btn-primary">
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="btn-secondary">
              <PhoneCall size={18} />
              <span>CONTACT US</span>
            </Link>
          </motion.div>

          {/* Floating Quick Estimator Widget - Homeland Style */}
          <motion.div 
            className="hero-estimator-floating-widget"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <div className="estimator-tabs-row">
              <button
                type="button"
                className={`estimator-tab-btn ${activeTab === 'building' ? 'active' : ''}`}
                onClick={() => setActiveTab('building')}
              >
                Turnkey Building
              </button>
              <button
                type="button"
                className={`estimator-tab-btn ${activeTab === 'aluminum' ? 'active' : ''}`}
                onClick={() => setActiveTab('aluminum')}
              >
                Aluminium &amp; Glazing
              </button>
              <button
                type="button"
                className={`estimator-tab-btn ${activeTab === 'interlocking' ? 'active' : ''}`}
                onClick={() => setActiveTab('interlocking')}
              >
                Interlocking &amp; Blocks
              </button>
              <button
                type="button"
                className={`estimator-tab-btn ${activeTab === 'steel' ? 'active' : ''}`}
                onClick={() => setActiveTab('steel')}
              >
                Steel Fabrication
              </button>
            </div>

            <form onSubmit={handleCalculate} className="estimator-fields-grid">
              <div className="estimator-field-col">
                <label className="estimator-field-label">Project Corridor / City</label>
                <div className="estimator-input-wrap">
                  <select 
                    className="estimator-select" 
                    value={corridor} 
                    onChange={(e) => setCorridor(e.target.value)}
                    aria-label="Select Project Corridor"
                  >
                    <option value="lekki">Lekki - Ajah - Epe Corridor</option>
                    <option value="vi">Victoria Island &amp; Ikoyi</option>
                    <option value="mainland">Ikeja / Lagos Mainland</option>
                    <option value="ogun">Ogun State / Western Region</option>
                    <option value="other">Other States (Nationwide)</option>
                  </select>
                </div>
              </div>

              <div className="estimator-field-col">
                <label className="estimator-field-label">Scope / Project Type</label>
                <div className="estimator-input-wrap">
                  <select 
                    className="estimator-select" 
                    value={projectScope} 
                    onChange={(e) => setProjectScope(e.target.value)}
                    aria-label="Select Scope"
                  >
                    {activeTab === 'building' && (
                      <>
                        <option value="residential">Residential Mansion / Duplex</option>
                        <option value="commercial">Commercial Complex / Office Block</option>
                        <option value="renovation">Structural Facility Renovation</option>
                      </>
                    )}
                    {activeTab === 'aluminum' && (
                      <>
                        <option value="casement">Casement Windows &amp; Fixed Glazing</option>
                        <option value="curtainwall">Curtain Wall Glass Facades</option>
                        <option value="doors">Security &amp; Sliding Aluminium Doors</option>
                      </>
                    )}
                    {activeTab === 'interlocking' && (
                      <>
                        <option value="pavers">60mm/80mm Paving Stones (Sqm)</option>
                        <option value="blocks">9" Vibrated Concrete Blocks</option>
                        <option value="curbs">Road Kerbs &amp; Drainage Coping</option>
                      </>
                    )}
                    {activeTab === 'steel' && (
                      <>
                        <option value="warehouse">Industrial Portal Frame Warehouse</option>
                        <option value="roofing">Heavy Duty Metal Roof Trusses</option>
                        <option value="canopy">Architectural Metal Canopies &amp; Tanks</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="estimator-field-col">
                <label className="estimator-field-label">Scale / Approximate Size</label>
                <div className="estimator-input-wrap">
                  <select 
                    className="estimator-select" 
                    value={scale} 
                    onChange={(e) => setScale(e.target.value)}
                    aria-label="Select Scale"
                  >
                    <option value="medium">Standard / 250 - 500 sqm</option>
                    <option value="large">Substantial / 500 - 1,500 sqm</option>
                    <option value="major">Extensive / Over 2,000 sqm</option>
                    <option value="custom">Custom Site Specification</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="estimator-submit-btn">
                <span>Calculate Estimate</span>
                <ArrowRight size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
