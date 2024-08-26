import React from 'react';
import './CarCard.css'; 

const CarCard = ({ image, title, price, button }) => {
    return (
        <div className="car-card">
            <div className="car-card-image">
                <img src={image} alt={title} />
            </div>
            <h3 className="car-card-title">{title}</h3>
            <p style={{color:"white"}}>Now Starting at</p>
            <p className="car-card-price">{price}</p>
            <button className="btn">{button}</button>
        </div>
    );
};

export default CarCard;
