import React from 'react';
import './Card.css';

const Card = ({ icon, heading, text }) => { 
  return (
    <div className="card">
      <div className="card-icon">
      {typeof icon === 'string' ? <img src={icon} alt={heading} /> : icon}
      </div>
      <h3 className="card-heading">{heading}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
