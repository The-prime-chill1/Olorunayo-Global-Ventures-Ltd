import React from 'react';
import { ChevronRight } from 'lucide-react';
import './MMTestimonials.css';

export default function MMTestimonials({ onOpenEstimator }) {
  const testimonials = [
    {
      id: "sarah",
      name: "Sarah L.",
      category: "Custom Home Build",
      quote: "Olorunayo Global Ventures Ltd exceeded our expectations. Fantastic work.",
      avatar: "/images/avatar_sarah.jpg"
    },
    {
      id: "james",
      name: "James R.",
      category: "Office Renovation",
      quote: "Highly professional and always on schedule.",
      avatar: "/images/avatar_james.jpg"
    },
    {
      id: "linda",
      name: "Linda M.",
      category: "Apartment Development",
      quote: "Top-notch quality and great communication.",
      avatar: "/images/avatar_linda.jpg"
    }
  ];

  return (
    <section className="mm-testimonials-section" id="testimonials">
      <div className="mm-testimonials-split-container">
        {/* Left Side: Testimonials Content */}
        <div className="mm-testimonials-left-panel">
          <div className="mm-testimonials-header-row">
            <h2 className="mm-testimonials-heading">Client Testimonials</h2>
            <div className="mm-testimonials-divider-line"></div>
          </div>

          <div className="mm-testimonials-cards-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="mm-testimonial-card">
                <div className="mm-testimonial-user-row">
                  <div className="mm-testimonial-avatar-wrap">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="mm-testimonial-avatar" 
                    />
                  </div>
                  <div className="mm-testimonial-meta">
                    <h3 className="mm-testimonial-name">{item.name}</h3>
                    <span className="mm-testimonial-cat">{item.category}</span>
                  </div>
                </div>
                <p className="mm-testimonial-quote">"{item.quote}"</p>
              </div>
            ))}
          </div>

          <div className="mm-testimonials-cta-wrap">
            <button 
              type="button" 
              className="mm-btn-quote-gold"
              onClick={onOpenEstimator}
            >
              <span>Request a Free Quote</span>
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Right Side: Architectural Twilight Photo */}
        <div className="mm-testimonials-right-media">
          <img 
            src="/images/building_twilight.jpg" 
            alt="MM Builders Luxury Architecture" 
            className="mm-testimonials-architecture-img"
          />
          <div className="mm-testimonials-media-overlay"></div>
        </div>
      </div>
    </section>
  );
}
