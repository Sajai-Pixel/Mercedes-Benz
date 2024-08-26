import React from 'react'
import '../index.css';
import car from '../assets/car1.png'
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faToolbox, faShieldAlt, faParking } from '@fortawesome/free-solid-svg-icons';
function About() {
    const cardsData = [
        {
            icon: <FontAwesomeIcon icon={faWrench} size='2x'/>,
            heading: 'Engine Upgrades',
            text: 'Performance-boosting engine upgrades for a smoother driving experience.',
        },
        {
            icon: <FontAwesomeIcon icon={faToolbox} size='2x' />,
            heading: 'Free Support',
            text: 'Complimentary support for all your vehicle-related inquiries and needs.',
        },
        {
            icon: <FontAwesomeIcon icon={faShieldAlt} size='2x' />,
            heading: 'Security Inspection',
            text: 'Thorough security inspections to ensure your vehicle’s safety.',
        },
        {
            icon: <FontAwesomeIcon icon={faParking} size='2x' />,
            heading: 'Brake Checkup',
            text: 'Comprehensive brake checkups for optimal stopping power and safety.',
        },
    ];
    return (
        <>
        <div className='about' id="about">
            <div className="aboutRow">
                <div className="aboutContent">
                    <h2>About Us</h2>
                    <p>Mercedes-Benz Group AG is one of the world's most successful automotive companies. With Mercedes-Benz AG, the Group is one of the leading global suppliers of high-end passenger cars and premium vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.</p>
                    <button className="btn b">Know More</button>
                </div>
                <div className="aboutImg">
                    <img src={car} alt="" />
                </div>
            </div>
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <Card key={index} icon={card.icon} heading={card.heading} text={card.text} />
                ))}
            </div>
        </div>
        </> 
    )
}

export default About
