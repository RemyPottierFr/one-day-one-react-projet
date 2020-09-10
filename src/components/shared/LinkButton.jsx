import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ to, className, children }) {
  return (
      <Link to={to}>
          <button className={`button ${className}`}>
              {children}
          </button>
      </Link>
  );
}
