import React from 'react'
import siteLogo from '../../assets/shared/desktop/logo-dark.png'
import menuButton from '../../assets/shared/mobile/icon-hamburger.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <img src={siteLogo} alt='logo' className='site-logo' />
        <img src={menuButton} alt='menu_btn' />
      </nav>
    </header>
  )
}

export default Header
