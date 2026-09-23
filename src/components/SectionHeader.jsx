import React from 'react';

export default function SectionHeader({ eyebrow, title, desc, centered = true }) {
  return (
    <div className={`section-header-wrapper ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span className="badge-gold-dot"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}
