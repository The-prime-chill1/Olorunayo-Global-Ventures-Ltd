import React from 'react';
import { 
  Home, 
  Building2, 
  Hammer, 
  ClipboardCheck, 
  Compass, 
  Palette 
} from 'lucide-react';
import './MMOurServices.css';

export default function MMOurServices() {
  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      description: "New home builds & custom",
      icon: Home
    },
    {
      id: "commercial",
      title: "Commercial Buildings",
      description: "Office, retail & industrial projects",
      icon: Building2
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      description: "Home & commercial renovations",
      icon: Hammer
    },
    {
      id: "management",
      title: "Project Management",
      description: "Planning & supervision",
      icon: ClipboardCheck
    },
    {
      id: "structural",
      title: "Structural Design",
      description: "Engineering & design solutions.",
      icon: Compass
    },
    {
      id: "interior",
      title: "Interior Finishing",
      description: "Custom interior fit-outs.",
      icon: Palette
    }
  ];

  return (
    <section className="mm-services-section" id="services">
      <div className="container">
        <h2 className="mm-services-heading">Our Services</h2>
        
        <div className="mm-services-grid">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="mm-service-card">
                <div className="mm-service-icon-wrap">
                  <Icon size={24} />
                </div>
                <div className="mm-service-card-body">
                  <h3 className="mm-service-title">{item.title}</h3>
                  <p className="mm-service-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
