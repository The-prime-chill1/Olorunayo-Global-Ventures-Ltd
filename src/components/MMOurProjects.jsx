import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './MMOurProjects.css';

export default function MMOurProjects() {
  const projects = [
    {
      id: "home",
      title: "Modern Family Home",
      image: "/images/modern_family_home.jpg"
    },
    {
      id: "tower",
      title: "Downtown Office Tower",
      image: "/images/downtown_tower.jpg"
    },
    {
      id: "apartment",
      title: "Luxury Apartment Complex",
      image: "/images/luxury_apartment.jpg"
    },
    {
      id: "retail",
      title: "Retail Center Renovation",
      image: "/images/retail_renovation.jpg"
    }
  ];

  return (
    <section className="mm-projects-section" id="projects">
      <div className="container">
        <h2 className="mm-projects-heading">Our Projects</h2>

        <div className="mm-projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="mm-project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="mm-project-img" 
                loading="lazy"
              />
              <div className="mm-project-overlay"></div>
              <div className="mm-project-label-bar">
                <span className="mm-project-title">{project.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mm-projects-cta-row">
          <Link to="/projects" className="mm-btn-view-all">
            <span>View All Projects</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
