import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ onOpenEstimator }) {
  return (
    <section className="mm-hero-section" aria-label="Hero Introduction">
      {/* Background with Builder & Cranes */}
      <div className="mm-hero-bg-container">
        <img 
          src="/images/hero_builder.jpg" 
          alt="Building Strong Foundations for the Future" 
          className="mm-hero-bg-image"
        />
        <div className="mm-hero-overlay"></div>
      </div>

      <div className="container mm-hero-container">
        <div className="mm-hero-content">
          {/* Main Headline */}
          <motion.h1 
            className="mm-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Building Strong<br />
            Foundations for the Future
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="mm-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Trusted residential &amp; commercial construction experts delivering quality, safety, and on-time results
          </motion.p>

          {/* Dual CTAs */}
          <motion.div 
            className="mm-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button 
              type="button" 
              className="mm-hero-btn-primary"
              onClick={onOpenEstimator}
            >
              Get a Free Quote
            </button>

            <a href="#projects" className="mm-hero-btn-secondary">
              View Our Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
