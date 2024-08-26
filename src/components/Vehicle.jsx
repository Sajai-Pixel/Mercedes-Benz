import React from 'react';
import CarCard from './CarCard'; 
import carA from '../assets/A-Class Limousine.png'
import carB from '../assets/carB.png'
import carC from '../assets/carC.png'
function Vehicle() {
    const data = [
        {
            image: carA, // Replace with actual image paths
            title: 'Mercedes-Benz A-Class',
            price: '₹ 46.05 Lakh',
            button: 'Know More'
        },
        {
            image: carB, // Replace with actual image paths
            title: 'Mercedes-Benz G-Class',
            price: '₹ 2.55 Crore',
            button: 'Know More'
        },
        {
            image: carC, // Replace with actual image paths
            title: 'Mercedes-Benz GLS',
            price: '₹ 1.37 Crore',
            button: 'Know More'
        }
    ];

    return (
        <div className='vehicle' id='collections'>
            <h1 className='vehicle-title'>Mercedes <span>Collections</span></h1>
            <div className="vehicleCard">
                {data.map((card, index) => (
                    <CarCard 
                        key={index} 
                        image={card.image} 
                        title={card.title} 
                        price={card.price} 
                        button={card.button} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Vehicle;
