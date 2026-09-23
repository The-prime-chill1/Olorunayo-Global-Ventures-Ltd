import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import './CTASection.css';

export default function CTASection({ onOpenEstimator }) {
  return (
    <section className="section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="cta-banner">
          <div className="cta-mesh-bg"></div>
          <div className="cta-content">
            <div className="badge-gold" style={{ marginBottom: '20px' }}>
              <Sparkles size={14} />
              <span>PARTNER WITH INDUSTRY LEADERS</span>
            </div>

            <h2 className="cta-headline">
              LET'S BUILD SOMETHING <span>LASTING.</span>
            </h2>

            <p className="cta-text">
              Whether you are planning a private luxury duplex, a commercial retail plaza, 
              industrial warehouse trusses, or need bulk supplies of certified concrete blocks and 
              interlocking stones, our team is ready to execute with world-class precision.
            </p>

            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                <span>START YOUR PROJECT</span>
                <ArrowRight size={18} />
              </Link>

              {onOpenEstimator && (
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={onOpenEstimator}
                >
                  <PhoneCall size={18} />
                  <span>CALCULATE ESTIMATE</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
