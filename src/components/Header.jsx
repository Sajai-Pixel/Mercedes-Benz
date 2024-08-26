import React from 'react'
import '../index.css';
import car from '../assets/car2.png'
import logo from '../assets/mercedes-benz-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (

    <div className='container'>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Mercedes-Benz</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#collections">COLLECTIONS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        <button className='a'>Register Now</button>
      </header>
      <section id="home">
        <div className='content'>
          <h1 className='overlay'>Mercedes</h1>
          <h1>Mercedes-Benz</h1>
          <p>The Mercedes star is more than just a logo.<br />Mercedes-Benz stands for exciting experiences based on<br />timeless design, cutting-edge technology and attention to detail.</p>
          <button className='btn'>Know More</button>
        </div>
        <div className='image'><img src={car} alt="" /></div>

      </section>
      <div className='icons'>
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />
        <FontAwesomeIcon icon="fa-solid fa-wrench" />
      </div>
    </div>
  )
}

export default Header
