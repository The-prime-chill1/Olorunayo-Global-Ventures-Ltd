import React from 'react';
import { HelpCircle, ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';
import FaqSection from '../components/FaqSection';
import CTASection from '../components/CTASection';

export default function FAQPage({ onOpenEstimator }) {
  return (
    <div className="faq-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} />
            <span>KNOWLEDGE BASE &amp; CLIENT SUPPORT</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem', color: '#475569' }}>
            Find immediate answers regarding our turnkey construction methodology, architectural aluminium joinery, 
            mechanized block &amp; paving stone logistics, payment milestone frameworks, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <FaqSection showFilter={true} />

      {/* Direct Quote CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
