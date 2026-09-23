import React from 'react';
import { MapPin, Calendar, CheckSquare } from 'lucide-react';
import './Projects.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-image-wrap">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card-img"
          loading="lazy" 
        />
        <div className="project-card-cat-badge">{project.category}</div>
        <div className="project-card-year">
          <Calendar size={11} style={{ display: 'inline', marginRight: '4px' }} />
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-card-location">
          <MapPin size={13} />
          <span>{project.location}</span>
        </div>

        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        <div className="project-card-meta">
          <span className="project-scope-tag">
            <CheckSquare size={13} color="var(--gold-primary)" style={{ display: 'inline', marginRight: '5px' }} />
            {project.scope}
          </span>
        </div>
      </div>
    </div>
  );
}
