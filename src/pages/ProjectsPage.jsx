import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { projectsList, projectCategories } from '../data/projects';
import { companyInfo } from '../data/company';
import { Briefcase, Award, CheckCircle2 } from 'lucide-react';

export default function ProjectsPage({ onOpenEstimator }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="projects-page" style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      {/* Header Hero */}
      <section className="section-padding-sm bg-mesh" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <Briefcase size={14} />
            <span>DELIVERED EXCELLENCE • OVER 100 LANDMARK EXECUTIONS</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
            Our Project Gallery
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto', fontSize: '1.15rem' }}>
            A curated showcase of residential mansions, commercial complexes, industrial warehouses, 
            and civic infrastructure delivered with architectural brilliance across Nigeria.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-mesh-secondary">
        <div className="container">
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

          {/* Stats Summary Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '80px',
            background: 'linear-gradient(135deg, #1340b8 0%, #1e3a8a 100%)',
            borderRadius: 'var(--radius-md)',
            padding: '40px 32px',
            boxShadow: '0 16px 36px rgba(19, 64, 184, 0.25)',
            color: '#ffffff'
          }}>
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                  {stat.value}{stat.suffix}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#bfdbfe', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '8px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#e0e7ff', marginTop: '6px' }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenEstimator={onOpenEstimator} />
    </div>
  );
}
