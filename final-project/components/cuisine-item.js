// cuisine-item.js
import React from 'react';
import './cuisine-item.css';

const CuisineItem = ({ title, imageSrc }) => {
  return (
    <div className="cuisine-item">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default CuisineItem;
