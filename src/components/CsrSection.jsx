import React from 'react';
import { Users, GraduationCap, Sparkles, Sprout } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { companyInfo } from '../data/company';
import './CsrSection.css';

const csrIcons = [Users, Sparkles, GraduationCap, Sprout];

export default function CsrSection() {
  return (
    <section className="section-padding bg-mesh" id="csr">
      <div className="container">
        <SectionHeader 
          eyebrow="Giving Back & Creating Value"
          title="Corporate Social Responsibility"
          desc="We believe sustainable business success is intertwined with the prosperity and empowerment of the communities we build in."
          centered={true}
        />

        <div className="csr-grid">
          {companyInfo.csr.map((item, idx) => {
            const Icon = csrIcons[idx] || Users;
            return (
              <div key={idx} className="csr-card">
                <div className="csr-icon-box">
                  <Icon size={24} />
                </div>
                <h3 className="csr-title">{item.title}</h3>
                <p className="csr-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
