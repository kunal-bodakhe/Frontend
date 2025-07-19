import React from "react";
import { useState } from "react";

function Footer({ todos }) {
  const getFooterText = () => {
    const completed = todos.filter((t) => t.completed).length;
    const total = todos.length;
    return `${completed} of ${total} tasks completed`;
  };

  if (todos.length === 0) return null;

  return <div className="footer">{getFooterText()}</div>;
};

export default Footer;
