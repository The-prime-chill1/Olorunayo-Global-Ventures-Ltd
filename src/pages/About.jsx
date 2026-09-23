import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FounderSection from '../components/FounderSection';
import HseSection from '../components/HseSection';
import CsrSection from '../components/CsrSection';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/company';
import { ShieldCheck, Award, Target, Compass, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenEstimator }) {
  return (
    <div className="about-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Page Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} />
            <span>ESTABLISHED EXCELLENCE • OVER 15 YEARS IN NIGERIA</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            About Olorunayo Global Ventures Ltd
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem' }}>
            Building lasting value across Nigeria through 15+ years of engineering mastery, 
            world-class architectural fabrication, and uncompromising ethical principles.
          </p>
        </div>
      </section>

      {/* Corporate Heritage & Core Pillars */}
      <section className="section-padding bg-mesh-secondary">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">
                <span className="badge-gold-dot"></span>
                <span>Our Heritage</span>
              </div>
              <h2 className="section-title">A Legacy of Uncompromising Standards</h2>
              <p style={{ marginBottom: '18px' }}>
                Olorunayo Global Ventures Ltd was established to redefine how Nigerian building projects are executed. 
                Rooted in Lagos, we combine deep local terrain knowledge with cutting-edge global construction standards.
              </p>
              <p style={{ marginBottom: '18px' }}>
                Over the past 15 years, our operational footprint has expanded across residential, commercial, and industrial 
                sectors. Our vertically integrated facilities allow us to manufacture our own high-density vibro-compressed 
                concrete blocks, fabricate precision steel structures, produce certified interlocking pavers, and assemble 
                European-standard architectural aluminium systems in-house.
              </p>
              <p>
                This integration guarantees quality control at every phase of the project lifecycle, eliminating intermediary 
                markups and delivering unmatched durability to every client.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="/images/hero.jpg" 
                alt="Olorunayo Construction Site" 
                style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--gold-border)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: 'rgba(11, 15, 23, 0.95)',
                border: '1px solid var(--gold-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold-light)', fontFamily: 'var(--font-heading)' }}>
                  15+ Years
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Engineering Credibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-mesh">
        <div className="container">
          <div className="grid-2">
            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-sm)', background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                <Target size={26} />
              </div>
              <div style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                CORPORATE VISION
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: 700, marginBottom: '16px' }}>
                Leading in Quality &amp; Sustainable Development
              </h3>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}>
                "{companyInfo.vision}"
              </p>
            </div>

            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-sm)', background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                <Compass size={26} />
              </div>
              <div style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                CORPORATE MISSION
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: 700, marginBottom: '16px' }}>
                World-Class Solutions &amp; Empowering Communities
              </h3>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7' }}>
                "{companyInfo.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-mesh-secondary">
        <div className="container">
          <SectionHeader 
            eyebrow="The Cornerstones of Our Culture"
            title="Our Core Values"
            desc="Every brick laid, every steel beam welded, and every client contract entered into is governed by our foundational principles."
            centered={true}
          />

          <div className="grid-3">
            {companyInfo.coreValues.map((val, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '30px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 700 }}>{val.name}</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* HSE & Quality */}
      <HseSection />

      {/* CSR */}
      <CsrSection />

      {/* CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
