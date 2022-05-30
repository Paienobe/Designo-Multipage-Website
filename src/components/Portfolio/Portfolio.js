import React from 'react'
import './Portfolio.css'
import appDesignThumb from '../../assets/home/mobile/image-app-design.jpg'
import webDesignThumb from '../../assets/home/mobile/image-web-design.jpg'
import graphicDesignThumb from '../../assets/home/mobile/image-graphic-design.jpg'
import arrowIcon from '../../assets/shared/desktop/icon-right-arrow.svg'

const Portfolio = () => {
  const categories = [
    { name: 'web design', image: webDesignThumb },
    { name: 'app design', image: appDesignThumb },
    { name: 'graphic design', image: graphicDesignThumb },
  ]
  return (
    <div className='portfolio-section'>
      {categories.map((category, index) => {
        return (
          <div key={index} className='category'>
            <img
              src={category.image}
              alt='category_image'
              className='category_image'
            />
            <div className='category_overlay'>
              <h2 className='category_name'>{category.name.toUpperCase()}</h2>
              <div className='category_link'>
                <p>VIEW PROJECTS</p>
                <img src={arrowIcon} alt='' />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Portfolio
