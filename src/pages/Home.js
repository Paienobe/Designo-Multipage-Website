import React from 'react'
import ContactCard from '../components/Contact Card/ContactCard'
import HeroSection from '../components/HeroSection/HeroSection'
import Illustrations from '../components/Illustrations/Illustrations'
import DesktopPortfolioView from '../components/Portfolio/DesktopPortfolioView'
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      {window.innerWidth < 850 ? <Portfolio /> : <DesktopPortfolioView />}
      <Illustrations />
      <ContactCard />
    </div>
  )
}

export default Home
