import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  const lastUpdated = "September 2024";

  return (
    <div className="privacy-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} />
            <span>NIGERIA DATA PROTECTION ACT (NDPA) COMPLIANT</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            Privacy Policy
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.1rem', color: '#475569' }}>
            How <strong>{companyInfo.name}</strong> collects, protects, processes, and respects your 
            personal and project engineering data in full compliance with Nigerian data protection laws.
          </p>
          <div style={{ marginTop: '14px', fontSize: '0.86rem', color: '#64748b' }}>
            Effective Date &amp; Last Reviewed: <strong>{lastUpdated}</strong>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="section-padding bg-mesh-secondary">
        <div className="container">
          <div className="privacy-content-card">
            <div className="privacy-intro-box">
              <div className="privacy-intro-icon">
                <Lock size={28} />
              </div>
              <div>
                <h3>Our Commitment to Your Privacy &amp; Proprietary Designs</h3>
                <p>
                  At <strong>{companyInfo.name}</strong>, we respect the confidentiality of your personal 
                  identifiable information (PII) and the proprietary nature of your architectural plans, site coordinates, 
                  and commercial construction budgets. This Privacy Policy details our transparent data handling principles.
                </p>
              </div>
            </div>

            <div className="privacy-body-text">
              <h2>1. Scope &amp; Legal Framework</h2>
              <p>
                This Policy applies to all interactions with our digital web platform, WhatsApp inquiry channels, 
                customer service desks, and corporate site offices. Our data practices comply with the provisions of 
                the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the <strong>Nigeria Data Protection Regulation (NDPR)</strong>.
              </p>

              <h2>2. Information We Collect</h2>
              <p>When you contact us, use our Online Cost Estimator, or engage our construction services, we may collect:</p>
              <ul>
                <li><strong>Contact Identification</strong>: Full name, business title, primary phone numbers, and corporate or personal email addresses.</li>
                <li><strong>Project Site Specifications</strong>: Site GPS coordinates or geographical corridor (e.g. Lekki, Ikoyi, Ikeja, Ogun State), plot dimensions, and topographical survey data.</li>
                <li><strong>Architectural &amp; Engineering Data</strong>: Architectural blueprints, structural layouts, mechanical/electrical schematics, and Bills of Quantities (BOQ) uploaded or sent for estimation.</li>
                <li><strong>Transactional Details</strong>: Records of quotations, contracts executed, milestone certificates, and payment confirmations.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We process collected data solely for legitimate engineering and contracting purposes, including:</p>
              <ul>
                <li>Preparing accurate project cost estimates, material takeoffs, and engineering feasibility reports.</li>
                <li>Conducting on-site structural inspections and ground soil reconnaissance visits.</li>
                <li>Coordinating the mechanized delivery and offloading of certified concrete blocks, paving stones, and structural steel beams to your site.</li>
                <li>Facilitating statutory building regulatory approvals (e.g., LASPPPA approvals) when authorized by you.</li>
                <li>Communicating direct milestones, progress videos, and delivery schedules via phone, email, and WhatsApp.</li>
              </ul>

              <h2>4. Confidentiality of Architectural Plans &amp; Client Data</h2>
              <p>
                We enforce strict internal access controls. Your architectural designs and structural calculations 
                are treated as proprietary corporate assets. We do <strong>not</strong> sell, rent, trade, or monetize 
                any client data to third-party advertising brokers or unrelated commercial entities.
              </p>

              <h2>5. Sharing with Authorized Third Parties</h2>
              <p>Information is only disclosed to third parties in the following strictly limited circumstances:</p>
              <ul>
                <li><strong>Logistics &amp; Haulage Partners</strong>: Providing delivery drivers with site addresses and recipient phone numbers strictly to execute material drop-offs.</li>
                <li><strong>Regulatory Authorities</strong>: Submitting engineering documentation to statutory physical planning boards when engaged as your designated contractor.</li>
                <li><strong>Legal Compliance</strong>: When required by an enforceable court order or statutory government law enforcement requirement in Nigeria.</li>
              </ul>

              <h2>6. Data Security &amp; Storage Protocols</h2>
              <p>
                We employ industry-standard technical and organizational security measures, including Secure Sockets Layer 
                (SSL/TLS 256-bit) encryption for web transmissions, secure server hosting, and password-protected corporate file systems. 
                Physical records at our Lekki-Ajah operational depot are maintained under secure access controls.
              </p>

              <h2>7. Your Statutory Rights</h2>
              <p>Under the NDPA, you have full control over your personal data, including the right to:</p>
              <ul>
                <li><strong>Access</strong>: Request a copy of the personal information we hold regarding your project.</li>
                <li><strong>Rectification</strong>: Update or correct inaccurate contact numbers, site addresses, or project data.</li>
                <li><strong>Erasure ("Right to be Forgotten")</strong>: Request the deletion of your records once contractual and statutory tax/accounting retention periods expire.</li>
                <li><strong>Withdraw Consent</strong>: Opt out of non-transactional marketing communications at any time.</li>
              </ul>

              <h2>8. Updates to this Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect changing regulatory mandates, new digital services, 
                or modified construction practices. Any revisions will be published on this page with an updated effective date.
              </p>

              <h2>9. Data Protection Contact</h2>
              <p>
                If you have questions, inquiries, or wish to exercise your data rights, please contact our administrative team:
              </p>

              <div className="privacy-contact-card">
                <div className="contact-row">
                  <MapPin size={18} color="var(--primary)" />
                  <span><strong>Corporate Depot:</strong> {companyInfo.location.address}</span>
                </div>
                <div className="contact-row">
                  <Phone size={18} color="var(--primary)" />
                  <span><strong>Phone Inquiries:</strong> {companyInfo.phones[0]} / {companyInfo.phones[1]}</span>
                </div>
                <div className="contact-row">
                  <Mail size={18} color="var(--primary)" />
                  <span><strong>Official Email:</strong> {companyInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
