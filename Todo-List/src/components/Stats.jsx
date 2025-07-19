import React from "react";

function Stats() {
  return (
    <>
      <div class="stats">
        <div class="stat-card">
          <div class="stat-number total" id="total-count">
            3
          </div>
          <div class="stat-label">Total Tasks</div>
        </div>
        <div class="stat-card">
          <div class="stat-number completed" id="completed-count">
            1
          </div>
          <div class="stat-label">Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number active" id="active-count">
            2
          </div>
          <div class="stat-label">Active</div>
        </div>
      </div>
    </>
  );
}

export default Stats;
