import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  ExternalLink 
} from 'lucide-react';
import { companyInfo } from '../data/company';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Building Construction',
    projectLocation: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const [whatsappLink, setWhatsappLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Compose WhatsApp message for fast contractor response
    const whatsappMessage = encodeURIComponent(
      `Hello Olorunayo Global Ventures Ltd,\n\n` +
      `I would like to request a quotation/consultation:\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.serviceInterest}\n` +
      `Location: ${formData.projectLocation || 'Lagos'}\n` +
      `Message: ${formData.message}`
    );

    const waUrl = `https://wa.me/${companyInfo.rawWhatsapp || '2348024271467'}?text=${whatsappMessage}`;
    setWhatsappLink(waUrl);
    setSubmitted(true);

    // Open WhatsApp directly
    window.open(waUrl, '_blank');
  };

  return (
    <div className="contact-area">
      <div className="contact-section-grid">
        {/* Left Contact Information */}
        <div className="contact-info-panel">
          <div>
            <div className="badge-gold" style={{ marginBottom: '14px' }}>
              <span>GET IN TOUCH</span>
            </div>
            <h3>Official Corporate Headquarters</h3>
            <p>
              Speak directly with our project directors, quantity surveyors, and structural 
              fabrication experts for your residential or commercial development.
            </p>

            <div className="contact-channels-list">
              <div className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="channel-content-title">Office & Fabrication Depot</div>
                  <div className="channel-content-val">{companyInfo.location.address}</div>
                </div>
              </div>

              <div className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="channel-content-title">Direct Phone Lines</div>
                  <div className="channel-content-val">
                    <a href={`tel:${companyInfo.phones[0]}`}>{companyInfo.phones[0]}</a>
                    <br />
                    <a href={`tel:${companyInfo.phones[1]}`}>{companyInfo.phones[1]}</a>
                  </div>
                </div>
              </div>

              <div className="contact-channel-card">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="channel-content-title">Official Inquiries Email</div>
                  <div className="channel-content-val">
                    <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-connect-buttons">
            <a 
              href={`https://wa.me/${companyInfo.rawWhatsapp || '2348024271467'}?text=${encodeURIComponent("Hello Olorunayo Global Ventures Ltd, I would like to inquire about your construction and fabrication services.")}`}
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            <a href={`tel:${companyInfo.phones[0]}`} className="btn-phone-call">
              <PhoneCall size={16} />
              <span>Call Primary Line</span>
            </a>

            <a href={`mailto:${companyInfo.email}`} className="btn-phone-call">
              <Mail size={16} />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="contact-form-box">
          <h3 className="contact-form-title">Request a Consultation & Quotation</h3>
          <p className="contact-form-subtitle">
            Provide details about your project. Our technical estimation team will contact you within 24 hours.
          </p>

          {submitted && (
            <div className="form-feedback-alert" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} />
                <span>Thank you! Your project inquiry has been received.</span>
              </div>
              {whatsappLink && (
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  <MessageSquare size={16} />
                  <span>Open Inquiry in WhatsApp</span>
                </a>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Full Name / Corporate Entity *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  className="form-control" 
                  placeholder="e.g. Arc. Babatunde / Apex Properties"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number (WhatsApp Preferred) *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="form-control" 
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-control" 
                  placeholder="yourname@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Service of Interest *</label>
                <select 
                  name="serviceInterest" 
                  className="form-control"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                >
                  <option value="Building Construction">Building Construction</option>
                  <option value="Aluminium Windows & Doors">Aluminium Windows & Doors</option>
                  <option value="Steel Fabrication & Gates">Steel Fabrication & Gates</option>
                  <option value="Concrete Blocks Supply">Concrete Blocks Supply</option>
                  <option value="Interlocking Stones & Pavers">Interlocking Stones & Pavers</option>
                  <option value="Building Stones & Granite Supply">Building Stones & Granite Supply</option>
                  <option value="Cement & Sand Supply">Cement & Sand Supply</option>
                  <option value="Project Management & BOQ">Project Management & BOQ</option>
                  <option value="Real Estate Development">Real Estate Development</option>
                  <option value="General Contracts & Procurement">General Contracts & Procurement</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Project Site Location</label>
                <input 
                  type="text" 
                  name="projectLocation" 
                  className="form-control" 
                  placeholder="e.g. Lekki Phase 1, Orchid Road, Epe, etc."
                  value={formData.projectLocation}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Budget / Scope (Optional)</label>
                <input 
                  type="text" 
                  name="budget" 
                  className="form-control" 
                  placeholder="e.g. 5,000 blocks / 500sqm / Turnkey Duplex"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Project Details & Requirements *</label>
              <textarea 
                name="message" 
                required 
                className="form-control" 
                rows="4" 
                placeholder="Describe your architectural specifications, timelines, material quantities, or site challenges..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              <span>SUBMIT INQUIRY & CONNECT NOW</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Embed with Ad-block Resilient Overlay */}
      <div className="map-container">
        <div className="map-info-floating-card">
          <div className="map-info-text">
            <strong>Headquarters &amp; Site Depot</strong>
            <span>{companyInfo.location.address}</span>
          </div>
          <a 
            href="https://maps.google.com/?q=Orchid+Rd+Lekki+Lagos" 
            target="_blank" 
            rel="noreferrer"
            className="map-direct-link-btn"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
        <iframe 
          title="Olorunayo Global Ventures Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.918995393526!2d3.5432!3d6.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf705c747cfc1%3A0x868b44910cf2e21b!2sOrchid%20Rd%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
