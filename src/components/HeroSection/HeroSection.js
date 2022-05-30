import React from 'react'
import './HeroSection.css'
import heroImage from '../../assets/home/desktop/image-hero-phone.png'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div>
        <h1 className='hero-heading'>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className='hero-paragraph'>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className='hero-btn'>LEARN MORE</button>
      </div>

      <div className='image-container'>
        <img src={heroImage} alt='phone' className='hero-image' />
      </div>
    </div>
  )
}

export default HeroSection
