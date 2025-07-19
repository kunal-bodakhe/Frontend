import React from "react";

function FilterButtons() {
  return (
    <>
      <div class="filter-container">
        <div class="filter-group">
          <button class="filter-btn active" data-filter="all">
            All
          </button>
          <button class="filter-btn" data-filter="active">
            Active
          </button>
          <button class="filter-btn" data-filter="completed">
            Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterButtons;
