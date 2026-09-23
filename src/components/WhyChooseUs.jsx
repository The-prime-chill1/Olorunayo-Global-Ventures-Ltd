import React from 'react';
import SectionHeader from './SectionHeader';
import { companyInfo } from '../data/company';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-mesh" id="why-us">
      <div className="container">
        <SectionHeader 
          eyebrow="Proven Engineering & Delivery"
          title="Why Choose Olorunayo Global Ventures"
          desc="Built on a decade and a half of uncompromising standards, we bring reliability, precision engineering, and ethical craftsmanship to every site."
          centered={true}
        />

        <div className="why-us-grid">
          {companyInfo.whyChooseUs.map((item, idx) => (
            <div key={idx} className="why-us-card">
              <div className="why-us-number">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="why-us-title">{item.title}</h3>
              <p className="why-us-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
