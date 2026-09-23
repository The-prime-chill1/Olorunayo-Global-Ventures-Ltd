import React from 'react';
import { 
  Home, 
  Building, 
  Factory, 
  KeyRound, 
  Waypoints, 
  Landmark, 
  Check 
} from 'lucide-react';
import './IndustryCard.css';

const iconMap = {
  Home,
  Building,
  Factory,
  KeyRound,
  Waypoints,
  Landmark
};

export default function IndustryCard({ industry }) {
  const IconComp = iconMap[industry.iconName] || Building;

  return (
    <div className="industry-card">
      <div className="industry-card-media">
        <img 
          src={industry.image} 
          alt={industry.title} 
          className="industry-card-img"
          loading="lazy" 
        />
        <div className="industry-card-badge">
          <IconComp size={14} />
          <span>Sector Focus</span>
        </div>
      </div>

      <div className="industry-card-body">
        <div className="industry-card-subtitle">{industry.subtitle}</div>
        <h3 className="industry-card-title">{industry.title}</h3>
        <p className="industry-card-desc">{industry.desc}</p>

        {industry.solutions && (
          <div className="industry-solutions-list">
            {industry.solutions.slice(0, 3).map((sol, idx) => (
              <span key={idx} className="industry-solution-item">
                <Check size={13} color="var(--primary)" />
                <span>{sol}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
