import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import { PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ContactPage({ onOpenEstimator }) {
  return (
    <div className="contact-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <PhoneCall size={14} />
            <span>WE RESPOND WITHIN 24 HOURS</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            Contact & Consultation
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem' }}>
            Get in touch with Pastor Olorunayo Oke and our executive engineering team 
            to initiate your construction, fabrication, or materials supply contract.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="section-padding bg-mesh-secondary">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
