import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import IndustryCard from '../components/IndustryCard';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import WhyChooseUs from '../components/WhyChooseUs';
import BusinessApproach from '../components/BusinessApproach';
import HseSection from '../components/HseSection';
import FounderSection from '../components/FounderSection';
import CsrSection from '../components/CsrSection';
import FaqSection from '../components/FaqSection';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import { servicesList } from '../data/services';
import { productsList } from '../data/products';
import { industriesList } from '../data/industries';
import { projectsList, projectCategories } from '../data/projects';
import { companyInfo } from '../data/company';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home({ onOpenEstimator }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="home-page">
      {/* 1. Cinematic Hero */}
      <Hero onOpenEstimator={onOpenEstimator} />

      {/* 2. Executive Corporate Overview & Values */}
      <section className="section-padding bg-mesh" id="overview">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: '16px' }}>
                <Sparkles size={14} />
                <span>OVER 15 YEARS OF PROVEN MASTERY</span>
              </div>
              <h2 className="section-title">
                Pioneering Engineering &amp; Sustainable Value Across Nigeria
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Olorunayo Global Ventures Ltd has established an undeniable reputation for structural longevity, precision aluminum architectural joinery, robust steel fabrication, and mechanized concrete block production.
              </p>
              <p style={{ marginBottom: '28px' }}>
                We bridge the gap between bold architectural visions and grounded structural reality. Whether 
                entrusted with luxury high-end residences in Lekki, heavy-duty industrial warehouses, or community 
                arterial roads, our work speaks of excellence and uncompromising integrity.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary">
                  <span>DISCOVER OUR STORY</span>
                  <ArrowRight size={16} />
                </Link>
                <button 
                  type="button" 
                  className="btn-outline-gold"
                  onClick={onOpenEstimator}
                >
                  <span>CALCULATE MATERIAL ESTIMATE</span>
                </button>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="glass-card">
                <div style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  OUR VISION
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px' }}>
                  Leading in Quality &amp; Sustainable Development
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                  "{companyInfo.vision}"
                </p>
              </div>

              <div className="glass-card">
                <div style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  OUR MISSION
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '10px' }}>
                  World-Class Construction &amp; Community Empowerment
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                  "{companyInfo.mission}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section (12 Services) */}
      <section className="section-padding bg-mesh-secondary" id="services">
        <div className="container">
          <SectionHeader 
            eyebrow="Comprehensive Capabilities"
            title="Integrated Construction & Business Solutions"
            desc="Explore our specialized divisions delivering turnkey engineering, modern glazing, precision metalworks, and certified material manufacturing."
            centered={true}
          />

          <div className="grid-3">
            {servicesList.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/services" className="btn-secondary">
              <span>VIEW DETAILED SERVICE SPECIFICATIONS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Products Section */}
      <section className="section-padding bg-mesh" id="products">
        <div className="container">
          <SectionHeader 
            eyebrow="Certified Manufacturing"
            title="Major Building Products & Materials"
            desc="Manufactured to rigorous British and Nigerian industrial specifications with laboratory-tested load capacities and weather resilience."
            centered={true}
          />

          <div className="grid-3">
            {productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries Section (6-category impressive grid) */}
      <section className="section-padding bg-mesh-secondary" id="industries">
        <div className="container">
          <SectionHeader 
            eyebrow="Sectors We Empower"
            title="Industries We Serve Across Nigeria"
            desc="Tailored structural engineering, facility upgrades, and turnkey building solutions for diverse public and private sectors."
            centered={true}
          />

          <div className="grid-3">
            {industriesList.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (7 company-approved points) */}
      <WhyChooseUs />

      {/* 7. Projects Gallery (Filterable by Category) */}
      <section className="section-padding bg-mesh-secondary" id="projects">
        <div className="container">
          <SectionHeader 
            eyebrow="Portfolio of Excellence"
            title="Featured Projects & Landmark Executions"
            desc="Take an inside look at our delivered residential, commercial, industrial, and infrastructure developments across Lagos and surrounding states."
            centered={true}
          />

          <ProjectFilter 
            categories={projectCategories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Structured Business Approach */}
      <BusinessApproach />

      {/* 9. HSE & Quality */}
      <HseSection />

      {/* 10. Founder Spotlight: Pastor Olorunayo Oke */}
      <FounderSection />

      {/* 11. Corporate Social Responsibility (CSR) */}
      <CsrSection />

      {/* 12. Frequently Asked Questions (Top FAQs with Link to Full Portal) */}
      <div id="home-faqs">
        <FaqSection limit={5} showFilter={false} />
        <div style={{ textAlign: 'center', marginTop: '-40px', marginBottom: '80px' }}>
          <Link to="/faq" className="btn-secondary">
            <span>EXPLORE ALL FAQS &amp; TECHNICAL SPECIFICATIONS</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* 13. Contact Section */}
      <section className="section-padding bg-mesh-secondary" id="contact">
        <div className="container">
          <SectionHeader 
            eyebrow="Connect Directly"
            title="Let's Discuss Your Project"
            desc="Visit our corporate office in Lekki-Ajah or reach out directly to our engineering estimators for prompt consultations."
            centered={true}
          />

          <ContactForm />
        </div>
      </section>

      {/* 13. High-Converting CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
