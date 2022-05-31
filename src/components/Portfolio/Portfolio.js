import React from 'react'
import './Portfolio.css'
import { categories } from '../../data/categories'
import arrowIcon from '../../assets/shared/desktop/icon-right-arrow.svg'
import { Link } from 'react-router-dom'
import PortfolioBox from '../PortfolioBox/PortfolioBox'

const Portfolio = ({ projectType }) => {
  const alternateOptions = categories.filter((category) => {
    return category.name?.toLowerCase() !== projectType?.toLowerCase()
  })
  return (
    <div className='portfolio-section'>
      {!projectType ? (
        <div>
          {categories.map((category, index) => {
            return <PortfolioBox category={category} key={index} />
          })}
        </div>
      ) : (
        <div>
          {alternateOptions.map((category, index) => {
            return <PortfolioBox category={category} key={index} />
          })}
        </div>
      )}
    </div>
  )
}

export default Portfolio
