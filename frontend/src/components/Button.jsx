import React from 'react';

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

