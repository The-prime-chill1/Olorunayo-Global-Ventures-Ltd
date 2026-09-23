import React from 'react';
import { Award, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/company';
import './FounderSection.css';

export default function FounderSection() {
  const { founder } = companyInfo;

  return (
    <section className="section-padding bg-mesh-secondary" id="leadership">
      <div className="container">
        <div className="founder-card">
          <div className="founder-grid">
            <div className="founder-image-col">
              <img 
                src={founder.photo} 
                alt={`${founder.name} - Managing Director`} 
                className="founder-portrait"
              />
              <div className="founder-image-badge">
                <ShieldCheck size={24} color="var(--gold-primary)" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.85rem' }}>
                    {companyInfo.name}
                  </div>
                  <div style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', fontWeight: 600 }}>
                    {companyInfo.rcNumber}
                  </div>
                </div>
              </div>
            </div>

            <div className="founder-details-col">
              <div className="founder-title-eyebrow">
                <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
                Executive Leadership
              </div>
              <h2 className="founder-name">{founder.name}</h2>
              <div className="founder-designation">{founder.title}</div>

              <div className="founder-quote-box">
                "{founder.quote}"
              </div>

              <div className="founder-message-p">
                <p style={{ marginBottom: '14px' }}>
                  We believe in building strong relationships with our clients, delivering excellence consistently and contributing to the development of our communities and the nation at large.
                </p>
                <p style={{ marginBottom: '14px' }}>
                  With over 15 years of industry experience, our commitment to integrity, innovation, and professionalism has been the driving force behind our growth and the trust we enjoy from our clients and partners.
                </p>
                <p>
                  Thank you for being part of our journey. We look forward to delivering greater value and building a lasting partnership with you.
                </p>
              </div>

              <div style={{ margin: '20px 0 24px 0', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--gold-light)', letterSpacing: '0.04em' }}>
                    Olorunaye Oke
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {founder.name} • {founder.title}
                  </div>
                </div>
              </div>

              <div className="founder-stats-pills">
                <div className="founder-pill">
                  <Award size={14} color="var(--gold-primary)" />
                  <span>15+ Years Industry Leadership</span>
                </div>
                <div className="founder-pill">
                  <Check size={14} color="var(--gold-primary)" />
                  <span>Unwavering Ethical Standards</span>
                </div>
                <div className="founder-pill">
                  <ShieldCheck size={14} color="var(--gold-primary)" />
                  <span>Certified Corporate Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
