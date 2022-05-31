import React from 'react'
import AboutIntro from '../components/About Intro/AboutIntro'
import ContactCard from '../components/Contact Card/ContactCard'
import LocationIllustration from '../components/Location Illustrations/LocationIllustration'
import RealDeal from '../components/Real Deal/RealDeal'

const About = () => {
  return (
    <div className='about-page'>
      <AboutIntro />
      <LocationIllustration />
      <RealDeal />
      <ContactCard />
    </div>
  )
}

export default About
