import React from 'react'
import './AboutIntro.css'
import firstImage from '../../assets/about/mobile/image-about-hero.jpg'
import secondImage from '../../assets/about/mobile/image-world-class-talent.jpg'
// tablet images
import tabImage1 from '../../assets/about/tablet/image-about-hero.jpg'
import tabImage2 from '../../assets/about/tablet/image-world-class-talent.jpg'

const AboutIntro = () => {
  return (
    <div className='about_intro'>
      <img src={window.innerWidth < 640 ? firstImage : tabImage1} alt='hero' />
      <div className='about_intro_text'>
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We've partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We're always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </div>
      <img
        src={window.innerWidth < 640 ? secondImage : tabImage2}
        alt='secondary-image'
      />
      <div className='talent_text'>
        <h1>World-class talent</h1>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myraid of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are niot merely interested in
          form - content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed woith our high-quality outcomes that
          encapsulates their brand's story and mission.
        </p>
      </div>
    </div>
  )
}

export default AboutIntro
