import React from 'react';
import { ChevronRight } from 'lucide-react';
import './CTASection.css';

export default function CTASection({ onOpenEstimator }) {
  return (
    <section className="mm-bottom-cta-section" aria-label="Call to Action">
      <div className="mm-bottom-cta-bg">
        <img 
          src="/images/building_twilight.jpg" 
          alt="Planning a Construction Project" 
          className="mm-bottom-cta-img"
        />
        <div className="mm-bottom-cta-overlay"></div>
      </div>

      <div className="container mm-bottom-cta-container">
        <h2 className="mm-bottom-cta-title">
          Planning a Construction Project?
        </h2>
        
        <p className="mm-bottom-cta-subtitle">
          Let Olorunayo Global Ventures Ltd bring your vision to life.
        </p>

        <button 
          type="button" 
          className="mm-btn-cta-gold"
          onClick={onOpenEstimator}
        >
          <span>Request a Free Quote</span>
          <ChevronRight size={17} />
        </button>
      </div>
    </section>
  );
}
