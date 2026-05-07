import React from 'react';

const CartLogo = ({ width = 180, className = "" }) => {
  return (
    <svg 
      width={width} 
      viewBox="0 0 300 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background/Base for exact sizing */}
      <rect width="300" height="120" fill="transparent" />

      {/* The 'C' */}
      <path 
        d="M 85 45 C 80 40 70 35 60 35 C 40 35 25 50 25 70 C 25 90 40 105 60 105 C 70 105 80 100 85 95" 
        stroke="#1e293b" 
        strokeWidth="14" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* The Handle of the Cart */}
      <line x1="25" y1="35" x2="5" y2="35" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />

      {/* The Wheels */}
      <circle cx="40" cy="115" r="7" fill="#1e293b" />
      <circle cx="75" cy="115" r="7" fill="#1e293b" />

      {/* The 'ART' Text */}
      <text 
        x="100" 
        y="100" 
        fontFamily="Inter, sans-serif" 
        fontWeight="800" 
        fontSize="76" 
        fill="#1e293b"
        letterSpacing="-2"
      >
        ART
      </text>

      {/* The Green Checkmark Swoosh */}
      <path 
        d="M 35 65 L 60 90 L 150 20" 
        stroke="#059669" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />

      {/* Sparkle Dots (Optional detail from the screenshot) */}
      <circle cx="160" cy="15" r="3" fill="#059669" />
      <circle cx="170" cy="10" r="2" fill="#059669" />
      <circle cx="178" cy="8" r="1" fill="#059669" />
    </svg>
  );
};

export default CartLogo;
