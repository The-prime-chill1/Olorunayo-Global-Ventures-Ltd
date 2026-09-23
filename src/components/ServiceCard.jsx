import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Maximize2, 
  Hammer, 
  Boxes, 
  Layers, 
  Truck, 
  PackageCheck, 
  ClipboardCheck, 
  FileCheck, 
  Home, 
  TrendingUp, 
  Leaf,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  Building2,
  Maximize2,
  Hammer,
  Boxes,
  Layers,
  Truck,
  PackageCheck,
  ClipboardCheck,
  FileCheck,
  Home,
  TrendingUp,
  Leaf
};

export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.iconName] || Building2;
  const displayNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="service-card">
      <div className="service-card-top">
        <div className="service-icon-box">
          <IconComponent size={28} />
        </div>
        <div className="service-card-number">{displayNumber}</div>
      </div>

      <div className="service-category-tag">{service.category}</div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>

      {service.features && (
        <ul className="service-card-features">
          {service.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="service-card-feature-item">
              <CheckCircle2 size={13} color="var(--gold-primary)" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <Link to={`/services`} className="service-card-cta">
        <span>Learn More</span>
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
