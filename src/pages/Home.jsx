import React from 'react';
import Hero from '../components/Hero';
import MMOurServices from '../components/MMOurServices';
import MMWhyChooseUs from '../components/MMWhyChooseUs';
import MMOurProjects from '../components/MMOurProjects';
import MMTestimonials from '../components/MMTestimonials';
import CTASection from '../components/CTASection';

export default function Home({ onOpenEstimator }) {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero onOpenEstimator={onOpenEstimator} />

      {/* 2. Our Services - 6 Dark Glass Cards */}
      <MMOurServices />

      {/* 3. Why Choose Olorunayo Global Ventures Ltd - Engineer Portrait + 5 Features */}
      <MMWhyChooseUs />

      {/* 4. Our Projects - 4 Showcase Cards + View All CTA */}
      <MMOurProjects />

      {/* 5. Client Testimonials - 3 Testimonial Cards + Architecture Split Media */}
      <MMTestimonials onOpenEstimator={onOpenEstimator} />

      {/* 6. Planning a Construction Project? - Full-width Twilight Architecture Banner */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
