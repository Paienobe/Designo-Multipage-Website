import React from 'react'
import '../Portfolio/Portfolio.css'
import arrowIcon from '../../assets/shared/desktop/icon-right-arrow.svg'
import { Link } from 'react-router-dom'

const PortfolioBox = ({ category }) => {
  return (
    <div className='category'>
      <img
        src={category.image}
        alt='category_image'
        className='category_image'
      />
      <div className='category_overlay'>
        <h2 className='category_name'>{category.name.toUpperCase()}</h2>
        <Link to={`/projects/${category.name}`}>
          <div className='category_link'>
            <p>VIEW PROJECTS</p>
            <img src={arrowIcon} alt='' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioBox
