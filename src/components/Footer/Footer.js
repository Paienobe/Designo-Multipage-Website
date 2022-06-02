import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/shared/desktop/logo-light.png'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialIcons = [facebook, youtube, twitter, pinterest, instagram]
  return (
    <footer>
      <div className='logo_links'>
        <Link to='/'>
          <img src={footerLogo} alt='logo' className='footer_logo' />
        </Link>

        <hr />

        <div className='footer_links'>
          <Link to='/about'>
            <p>OUR COMPANY</p>
          </Link>
          <Link to='/locations'>
            <p>LOCATIONS</p>
          </Link>
          <Link to='/contact'>
            <p>CONTACT</p>
          </Link>
        </div>
      </div>

      <div className='sub_footer'>
        <div className='address_details_container'>
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
      </div>
    </footer>
  )
}

export default Footer
