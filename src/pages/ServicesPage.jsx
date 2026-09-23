import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import { servicesList } from '../data/services';
import { productsList } from '../data/products';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServicesPage({ onOpenEstimator }) {
  return (
    <div className="services-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} />
            <span>EXPERT ARCHITECTURAL & STRUCTURAL CAPABILITIES</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            Services & Manufacturing
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem' }}>
            From high-specification civil construction and architectural glazing to mechanized 
            block production and bulk quarry supply across Nigeria.
          </p>
        </div>
      </section>

      {/* Services Grid (12 Services) */}
      <section className="section-padding bg-mesh-secondary" id="all-services">
        <div className="container">
          <SectionHeader 
            eyebrow="Specialized Divisions"
            title="Our Full Range of Services"
            desc="Explore our 12 dedicated service areas engineered to deliver precision, durability, and commercial value."
            centered={true}
          />

          <div className="grid-3">
            {servicesList.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-mesh" id="products-showcase">
        <div className="container">
          <SectionHeader 
            eyebrow="Direct Factory & Yard Supply"
            title="Manufactured Products & Materials"
            desc="Buy direct from our Lekki-Ajah batching yards and fabrication workshops. Certified quality at contractor rates."
            centered={true}
          />

          <div className="grid-3">
            {productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Interactive Calculator Callout */}
          <div style={{
            marginTop: '60px',
            background: 'linear-gradient(135deg, #1340b8 0%, #1e3a8a 100%)',
            borderRadius: 'var(--radius-md)',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 36px rgba(19, 64, 184, 0.25)',
            color: '#ffffff'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#bfdbfe', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                <Calculator size={16} />
                <span>ONLINE ESTIMATION TOOL</span>
              </div>
              <h3 style={{ fontSize: '1.7rem', color: '#ffffff', fontWeight: 800, marginBottom: '8px' }}>
                Need an Immediate Material Quantity &amp; Cost Estimate?
              </h3>
              <p style={{ maxWidth: '650px', fontSize: '0.96rem', color: '#eff6ff', lineHeight: 1.6 }}>
                Calculate preliminary costs for interlocking paving stones, 9-inch concrete blocks, aluminium windows, or quarry granite supplies instantly.
              </p>
            </div>

            <button 
              type="button" 
              className="btn-primary"
              style={{
                background: '#ffffff',
                color: 'var(--primary)',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)'
              }}
              onClick={onOpenEstimator}
            >
              <span>LAUNCH COST ESTIMATOR</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
