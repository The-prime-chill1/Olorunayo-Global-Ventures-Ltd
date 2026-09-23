import React from 'react';
import SectionHeader from '../components/SectionHeader';
import IndustryCard from '../components/IndustryCard';
import BusinessApproach from '../components/BusinessApproach';
import CTASection from '../components/CTASection';
import { industriesList } from '../data/industries';
import { companyInfo } from '../data/company';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function IndustriesPage({ onOpenEstimator }) {
  return (
    <div className="industries-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <Building2 size={14} />
            <span>CROSS-SECTOR EXPERTISE • TRUSTED NATIONWIDE</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            Industries We Serve
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem' }}>
            Delivering specialized structural solutions, materials logistics, and bespoke architectural fabrication 
            for private developers, corporate conglomerates, and public institutions.
          </p>
        </div>
      </section>

      {/* 6 Category Grid */}
      <section className="section-padding bg-mesh-secondary">
        <div className="container">
          <SectionHeader 
            eyebrow="Sector Specializations"
            title="Engineered for Every Operational Demand"
            desc="Explore our specialized execution models tailored to the unique economic, technical, and regulatory requirements of each sector."
            centered={true}
          />

          <div className="grid-3">
            {industriesList.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Compliance Callout */}
      <section className="section-padding-sm bg-mesh">
        <div className="container">
          <div style={{
            background: '#ffffff',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-md)',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div>
              <div className="section-eyebrow">
                <ShieldCheck size={14} style={{ display: 'inline', marginRight: '6px' }} />
                <span>REGULATORY COMPLIANCE</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800, marginBottom: '14px' }}>
                Corporate Governance &amp; Tendering Credentials
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7' }}>
                Olorunayo Global Ventures Ltd operates with full corporate accountability, 
                highest safety compliance, and financial integrity. We are fully equipped and qualified to participate in corporate procurement, institutional infrastructure tenders, 
                and major Joint Venture (JV) real estate schemes across Nigeria.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Compliant with Nigerian Building & Engineering Codes",
                "Fully Verified Tax & Corporate Statutory Filings",
                "Transparent Bill of Quantities (BOQ) & Contract Audits",
                "Comprehensive Project Liability & Site Safety Protocols"
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Approach */}
      <BusinessApproach />

      {/* CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
