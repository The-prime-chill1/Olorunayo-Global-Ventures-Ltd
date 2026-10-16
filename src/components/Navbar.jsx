import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenEstimator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/faq" }
  ];

  return (
    <>
      <header className={`mm-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container mm-nav-container">
          {/* Logo with Brand Name: OLORUNAYO GLOBAL VENTURES LTD. */}
          <Link to="/" className="mm-brand-link" aria-label="Olorunayo Global Ventures Ltd Home">
            <div className="mm-brand-logo-wrap">
              <img 
                src="/images/logo.jpeg" 
                alt="Olorunayo Global Ventures Ltd Logo" 
                className="mm-brand-logo-img" 
              />
            </div>
            <div className="mm-brand-text-col">
              <div className="mm-brand-line-1">
                <span className="mm-logo-accent">OLORUNAYO</span>
                <span className="mm-logo-text"> GLOBAL</span>
              </div>
              <div className="mm-brand-line-2">VENTURES LTD.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="mm-desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mm-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="mm-nav-actions">
            <button 
              type="button" 
              className="mm-btn-quote"
              onClick={onOpenEstimator}
              aria-label="Get a Free Quote"
            >
              Get a Free Quote
            </button>

            <button 
              type="button"
              className="mm-mobile-toggle"
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
        <div className="mm-mobile-drawer" role="dialog" aria-modal="true">
          <div className="mm-mobile-drawer-header">
            <div className="mm-brand-link">
              <div className="mm-brand-logo-wrap">
                <img 
                  src="/images/logo.jpeg" 
                  alt="Olorunayo Global Ventures Ltd Logo" 
                  className="mm-brand-logo-img" 
                />
              </div>
              <div className="mm-brand-text-col">
                <div className="mm-brand-line-1">
                  <span className="mm-logo-accent">OLORUNAYO</span>
                  <span className="mm-logo-text"> GLOBAL</span>
                </div>
                <div className="mm-brand-line-2">VENTURES LTD.</div>
              </div>
            </div>
            <button 
              type="button" 
              className="mm-mobile-close" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mm-mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mm-mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </nav>

          <div className="mm-mobile-drawer-footer">
            <button 
              type="button" 
              className="mm-btn-quote"
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEstimator) onOpenEstimator();
              }}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
