import React from 'react'
import './Portfolio.css'
import { categories } from '../../data/categories'
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
        <div className='dynamic'>
          {alternateOptions.map((category, index) => {
            return <PortfolioBox category={category} key={index} />
          })}
        </div>
      )}
    </div>
  )
}

export default Portfolio
