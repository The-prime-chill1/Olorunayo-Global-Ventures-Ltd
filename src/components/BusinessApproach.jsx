import React from 'react';
import SectionHeader from './SectionHeader';
import { companyInfo } from '../data/company';
import './BusinessApproach.css';

export default function BusinessApproach() {
  return (
    <section className="section-padding bg-mesh-secondary">
      <div className="container">
        <SectionHeader 
          eyebrow="Methodology & Execution"
          title="Our Structured Business Approach"
          desc="From conceptual blueprinting to keys handover, our structured workflow ensures precision engineering, complete financial transparency, and timely milestone delivery."
          centered={true}
        />

        <div className="process-timeline">
          {companyInfo.businessApproach.map((step, idx) => (
            <div key={idx} className="process-card">
              <div className="process-step-badge">{step.step}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
