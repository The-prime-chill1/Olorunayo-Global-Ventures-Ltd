import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { faqsList, faqCategories } from '../data/faqs';
import { companyInfo } from '../data/company';
import './FaqSection.css';

export default function FaqSection({ limit = null, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState(1); // First open by default

  const filteredFaqs = activeCategory === 'All'
    ? faqsList
    : faqsList.filter(f => f.category === activeCategory);

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleAccordion = (id) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section className="faq-section section-padding bg-mesh" id="faq">
      <div className="container">
        <SectionHeader 
          eyebrow="Frequently Asked Questions"
          title="Clear Answers to Your Construction Inquiries"
          desc="Everything you need to know about our project engagement protocols, certified building materials, pricing transparency, and site execution."
          centered={true}
        />

        {showFilter && (
          <div className="faq-filter-bar">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`faq-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="faq-accordion-container">
          {displayFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-text-wrap">
                    <span className="faq-item-cat">{faq.category}</span>
                    <h3 className="faq-question-title">{faq.question}</h3>
                  </div>
                  <div className={`faq-chevron-box ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Callout */}
        <div className="faq-bottom-callout">
          <div className="faq-callout-icon">
            <HelpCircle size={28} />
          </div>
          <div className="faq-callout-text">
            <h4>Have a Specific Site or Procurement Question?</h4>
            <p>Our quantity surveyors and lead engineers are available to review your architectural plans and site specifications directly.</p>
          </div>
          <div className="faq-callout-actions">
            <a 
              href={`https://wa.me/${companyInfo.rawWhatsapp || '2348024271467'}?text=${encodeURIComponent("Hello Olorunaye Oke / Olorunayo Global Ventures Ltd, I have a specific project question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '12px 20px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem'
              }}
            >
              <MessageSquare size={16} />
              <span>Ask via WhatsApp</span>
            </a>
            <a 
              href={`tel:${companyInfo.phones[0]}`}
              className="btn-secondary"
            >
              <PhoneCall size={16} />
              <span>Call Direct Line</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
