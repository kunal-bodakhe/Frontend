import React from "react";
import { useState } from "react";

function Stats({ todos }) {
  const calculateStats = () => {
    return {
      total: todos.length,
      completed: todos.filter((t) => t.completed).length,
      active: todos.filter((t) => !t.completed).length,
    };
  };

  const stats = calculateStats();

  return (
    <div className="stats">
      <div className="stat-card">
        <div className="stat-number total">{stats.total}</div>
        <div className="stat-label">Total Tasks</div>
      </div>
      <div className="stat-card">
        <div className="stat-number completed">{stats.completed}</div>
        <div className="stat-label">Completed</div>
      </div>
      <div className="stat-card">
        <div className="stat-number active">{stats.active}</div>
        <div className="stat-label">Active</div>
      </div>
    </div>
  );
}

export default Stats;
