import React, { useState } from 'react'
import siteLogo from '../../assets/shared/desktop/logo-dark.png'
import menuButton from '../../assets/shared/mobile/icon-hamburger.svg'
import closeButton from '../../assets/shared/mobile/icon-close.svg'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={siteLogo} alt='logo' className='site-logo' />
        </Link>

        {window.innerWidth < 850 && (
          <div>
            {!showMenu ? (
              <img
                src={menuButton}
                alt='menu_btn'
                onClick={() => {
                  setShowMenu(true)
                }}
              />
            ) : (
              <img
                src={closeButton}
                alt='menu_btn'
                onClick={() => {
                  setShowMenu(false)
                }}
              />
            )}
          </div>
        )}
        <div className='menu_list' style={!showMenu ? { top: '-18rem' } : {}}>
          <Link to='/about' onClick={closeMenu}>
            <span>OUR COMPANY</span>
          </Link>

          <Link to='/locations' onClick={closeMenu}>
            <span>LOCATIONS</span>
          </Link>

          <Link to='/contact' onClick={closeMenu}>
            <span>CONTACT</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
