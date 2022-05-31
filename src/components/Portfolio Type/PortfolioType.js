import React from 'react'
import './PortfolioType.css'

const PortfolioType = ({ name, introText }) => {
  return (
    <div className='portfolio_intro'>
      <h1>{name}</h1>
      <p>{introText}</p>
    </div>
  )
}

export default PortfolioType
