import React from "react";
import { useState } from "react";

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = ['all', 'active', 'completed'];

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
