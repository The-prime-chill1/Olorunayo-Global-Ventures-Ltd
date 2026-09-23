import React from 'react';
import './Projects.css';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="project-filter-bar" role="tablist" aria-label="Project categories">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat}
          className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
