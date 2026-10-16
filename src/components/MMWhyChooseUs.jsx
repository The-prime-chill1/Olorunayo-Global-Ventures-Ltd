import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  HardHat, 
  PackageCheck, 
  Clock 
} from 'lucide-react';
import './MMWhyChooseUs.css';

export default function MMWhyChooseUs() {
  const features = [
    {
      id: "exp",
      title: "10+ Years of Experience",
      icon: Award,
      iconColor: "#f59e0b",
      iconBg: "#fef3c7"
    },
    {
      id: "insured",
      title: "Licensed & Insured",
      icon: ShieldCheck,
      iconColor: "#1d4ed8",
      iconBg: "#dbeafe"
    },
    {
      id: "team",
      title: "Skilled Team of Experts",
      icon: HardHat,
      iconColor: "#d97706",
      iconBg: "#ffedd5"
    },
    {
      id: "materials",
      title: "High-Quality Materials",
      icon: PackageCheck,
      iconColor: "#c2410c",
      iconBg: "#ffedd5"
    },
    {
      id: "ontime",
      title: "On-Time Delivery",
      icon: Clock,
      iconColor: "#0f172a",
      iconBg: "#e2e8f0"
    }
  ];

  return (
    <section className="mm-why-section" id="why-choose-us">
      <div className="container">
        <h2 className="mm-why-heading">Why Choose Olorunayo Global Ventures Ltd</h2>

        <div className="mm-why-grid">
          {/* Left Engineer Image */}
          <div className="mm-why-image-col">
            <div className="mm-why-image-card">
              <img 
                src="/images/engineer_portrait.jpg" 
                alt="Olorunayo Global Ventures Ltd Civil Engineer" 
                className="mm-why-image"
              />
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="mm-why-features-col">
            <div className="mm-features-grid">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="mm-feature-card">
                    <div 
                      className="mm-feature-icon-wrap" 
                      style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="mm-feature-text">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
