import React from 'react';
import { Check, Shield } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-card-img" 
          loading="lazy"
        />
        <div className="product-card-badge">
          <Shield size={12} style={{ display: 'inline', marginRight: '4px' }} />
          <span>Industrial Standard</span>
        </div>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.title}</h3>
        <div className="product-card-subtitle">{product.subtitle}</div>

        <ul className="product-specs-list">
          {product.specs.slice(0, 3).map((spec, idx) => (
            <li key={idx} className="product-spec-item">
              <Check size={14} color="var(--gold-primary)" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        {product.items && (
          <div className="product-items-tags">
            {product.items.map((item, idx) => (
              <span key={idx} className="product-tag">{item}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
