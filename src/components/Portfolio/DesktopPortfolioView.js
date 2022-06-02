import React from 'react'
import './Portfolio.css'
import { categories } from '../../data/categories'
import PortfolioBox from '../PortfolioBox/PortfolioBox'
const firstBox = categories[0]
const secondaryBoxes = [categories[1], categories[2]]

const DesktopPortfolioView = () => {
  return (
    <div className='portfolio_section'>
      <div className='big_box'>
        <PortfolioBox category={firstBox} />
      </div>
      <div className='stacked_box_container'>
        {secondaryBoxes.map((box) => {
          return <PortfolioBox category={box} />
        })}
      </div>
    </div>
  )
}

export default DesktopPortfolioView
