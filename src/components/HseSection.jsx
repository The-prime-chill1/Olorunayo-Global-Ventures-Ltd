import React from 'react';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { companyInfo } from '../data/company';
import './HseSection.css';

export default function HseSection() {
  return (
    <section className="section-padding bg-mesh" id="hse">
      <div className="container">
        <div className="hse-wrapper">
          <div className="hse-grid">
            <div className="hse-left">
              <div className="badge-gold" style={{ marginBottom: '16px' }}>
                <ShieldCheck size={14} />
                <span>SAFETY FIRST • QUALITY GUARANTEED</span>
              </div>
              <h3>{companyInfo.hse.title}</h3>
              <p>
                At Olorunayo Global Ventures Ltd, the safety of our personnel, subcontractors, 
                and surrounding communities is foundational to our engineering excellence. We adhere to 
                strict HSE procedures across all fabrication yards and construction sites.
              </p>

              <ul className="hse-points-list">
                {companyInfo.hse.principles.map((principle, idx) => (
                  <li key={idx} className="hse-point-item">
                    <div className="hse-point-icon">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="hse-point-text">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hse-pillars-container">
              {companyInfo.hse.pillars.map((pillar, idx) => (
                <div key={idx} className="hse-pillar-card">
                  <div>
                    <div className="hse-pillar-tag">Corporate Cornerstone</div>
                    <div className="hse-pillar-name">{pillar}</div>
                  </div>
                  <Award size={32} color="var(--gold-primary)" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
