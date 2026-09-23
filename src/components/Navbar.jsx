import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { companyInfo } from '../data/company';
import './Navbar.css';

export default function Navbar({ onOpenEstimator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Main Navbar */}
        <div className="container nav-container">
          <Link to="/" className="brand-logo-link" aria-label="Olorunayo Global Ventures Home">
            <div className="brand-crest">
              <img src="/images/logo.jpeg" alt="Olorunayo Emblem" onError={(e) => {
                e.target.style.display = 'none';
              }} />
            </div>
            <div className="brand-text-block">
              <div className="brand-name">
                OLORUNAYO <span>GLOBAL</span>
              </div>
              <div className="brand-sub">Ventures Ltd</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className="nav-actions">
            <button 
              type="button" 
              className="btn-outline-gold header-estimator-btn"
              onClick={onOpenEstimator}
              aria-label="Instant Project Estimator"
            >
              <Calculator size={15} />
              <span>Cost Estimator</span>
            </button>

            <Link to="/contact" className="btn-primary header-quote-btn">
              <span>Request Quote</span>
            </Link>

            <button 
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div>
            <div className="mobile-drawer-header">
              <div className="brand-text-block">
                <div className="brand-name">OLORUNAYO <span>GLOBAL</span></div>
                <div className="brand-sub">Ventures Ltd</div>
              </div>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ position: 'static' }}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} color="var(--gold-primary)" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="mobile-drawer-footer">
            <button 
              type="button" 
              className="btn-outline-gold"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEstimator) onOpenEstimator();
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calculator size={16} />
              <span>Instant Cost Estimator</span>
            </button>

            <Link 
              to="/contact" 
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="drawer-contact-item" style={{ marginTop: '12px' }}>
              <Phone size={14} color="var(--gold-primary)" />
              <a href={`tel:${companyInfo.phones[0]}`}>{companyInfo.phones[0]}</a>
            </div>
            <div className="drawer-contact-item">
              <Mail size={14} color="var(--gold-primary)" />
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
