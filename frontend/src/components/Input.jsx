import React from 'react';

const Input = ({ type = "text", placeholder, className = "", onChange, value, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      onChange={(e)=>onChange(e.target.value)}
      value={value}
      {...props}
    />
  );
};

export default Input;