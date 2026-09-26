import React from 'react';
import './style.css';

function Logo({ onClick }) {
  return (
    <div className="logo" onClick={onClick}>
      <span className="logo-text">Shahrom</span>
    </div>
  );
}

export default Logo;
