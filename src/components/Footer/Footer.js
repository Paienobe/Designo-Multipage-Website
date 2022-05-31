import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/shared/desktop/logo-light.png'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'

const Footer = () => {
  const socialIcons = [facebook, youtube, twitter, pinterest, instagram]
  return (
    <footer>
      <img src={footerLogo} alt='logo' className='footer_logo' />
      <hr />

      <div className='footer_links'>
        <p>OUR COMPANY</p>
        <p>LOCATIONS</p>
        <p>CONTACT</p>
      </div>

      <address>
        <p className='title'>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </address>

      <div className='contact_information'>
        <p className='title'>Contact Us (Central Office)</p>
        <p>P: +1 253-863-8967</p>
        <p>M: contact@designo.co</p>
      </div>

      <div className='socials'>
        {socialIcons.map((icon, index) => {
          return (
            <a href='#' key={index}>
              <img src={icon} alt='social_icon' />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
