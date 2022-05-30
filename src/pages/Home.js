import React from 'react'
import ContactCard from '../components/Contact Card/ContactCard'
import HeroSection from '../components/HeroSection/HeroSection'
import Illustrations from '../components/Illustrations/Illustrations'
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <Portfolio />
      <Illustrations />
      <ContactCard />
    </div>
  )
}

export default Home
