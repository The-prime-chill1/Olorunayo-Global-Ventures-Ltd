import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ChevronRight,
  Clock,
  Users,
  Building2,
  Handshake,
  Award
} from 'lucide-react';
import { companyInfo } from '../data/company';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Homeland-Inspired Royal Blue Stats Strip */}
        <div className="stats-banner-homeland">
          <div className="stats-banner-grid">
            <div className="stats-banner-item">
              <div className="stats-banner-icon">
                <Users size={26} />
              </div>
              <div>
                <div className="stats-banner-val">100+</div>
                <div className="stats-banner-label">Satisfied Clients</div>
              </div>
            </div>

            <div className="stats-banner-item">
              <div className="stats-banner-icon">
                <Building2 size={26} />
              </div>
              <div>
                <div className="stats-banner-val">100+</div>
                <div className="stats-banner-label">Projects Completed</div>
              </div>
            </div>

            <div className="stats-banner-item">
              <div className="stats-banner-icon">
                <Handshake size={26} />
              </div>
              <div>
                <div className="stats-banner-val">15+</div>
                <div className="stats-banner-label">Years of Experience</div>
              </div>
            </div>

            <div className="stats-banner-item">
              <div className="stats-banner-icon">
                <Award size={26} />
              </div>
              <div>
                <div className="stats-banner-val">100%</div>
                <div className="stats-banner-label">Quality Commitment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-name" style={{ fontSize: '1.25rem', color: '#ffffff' }}>
              OLORUNAYO <span style={{ color: '#60a5fa' }}>GLOBAL</span>
            </div>
            <p>
              An established Nigerian engineering and building enterprise providing integrated construction, 
              precision architectural aluminium systems, structural steel fabrication, certified concrete 
              blocks, and interlocking paving stones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <ChevronRight size={13} color="#60a5fa" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <ChevronRight size={13} color="#60a5fa" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <ChevronRight size={13} color="#60a5fa" /> Services
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <ChevronRight size={13} color="#60a5fa" /> Projects Gallery
                </Link>
              </li>
              <li>
                <Link to="/industries">
                  <ChevronRight size={13} color="#60a5fa" /> Industries
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <ChevronRight size={13} color="#60a5fa" /> FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy">
                  <ChevronRight size={13} color="#60a5fa" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={13} color="#60a5fa" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services">Building Construction</Link>
              </li>
              <li>
                <Link to="/services">Aluminium Doors &amp; Windows</Link>
              </li>
              <li>
                <Link to="/services">Steel Fabrication</Link>
              </li>
              <li>
                <Link to="/services">Concrete Blocks Supply</Link>
              </li>
              <li>
                <Link to="/services">Interlocking Pavers</Link>
              </li>
              <li>
                <Link to="/services">Project Management</Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/industries">Residential Estates</Link>
              </li>
              <li>
                <Link to="/industries">Commercial Plazas</Link>
              </li>
              <li>
                <Link to="/industries">Industrial Warehouses</Link>
              </li>
              <li>
                <Link to="/industries">Real Estate Ventures</Link>
              </li>
              <li>
                <Link to="/industries">Infrastructure Works</Link>
              </li>
              <li>
                <Link to="/industries">Government Projects</Link>
              </li>
            </ul>
          </div>

          {/* Official Contact */}
          <div>
            <h4 className="footer-col-title">Official Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <span className="icon-wrapper">
                  <MapPin size={17} />
                </span>
                <p>{companyInfo.location.address}</p>
              </div>

              <div className="footer-contact-row">
                <span className="icon-wrapper">
                  <Phone size={17} />
                </span>
                <div>
                  <a href={`tel:${companyInfo.phones[0]}`}>{companyInfo.phones[0]}</a>
                  <br />
                  <a href={`tel:${companyInfo.phones[1]}`}>{companyInfo.phones[1]}</a>
                </div>
              </div>

              <div className="footer-contact-row">
                <span className="icon-wrapper">
                  <Mail size={17} />
                </span>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>

              <div className="footer-contact-row">
                <span className="icon-wrapper">
                  <Globe size={17} />
                </span>
                <a href={`https://${companyInfo.website}`} target="_blank" rel="noreferrer">
                  {companyInfo.website}
                </a>
              </div>

              <div className="footer-contact-row">
                <span className="icon-wrapper">
                  <Clock size={17} />
                </span>
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Powered By Credit */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link to="/privacy" style={{ color: '#cbd5e1' }}>Privacy Policy</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <Link to="/faq" style={{ color: '#cbd5e1' }}>FAQs</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <span>Founder &amp; CEO: <strong style={{ color: '#ffffff' }}>{companyInfo.founder.name}</strong></span>
          </div>
          <div className="footer-powered-by">
            Built &amp; Powered by{' '}
            <a 
              href="https://chilltechltd.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              chilltechltd.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
