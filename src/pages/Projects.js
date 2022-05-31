import React from 'react'
import { useParams } from 'react-router-dom'
import PortfolioType from '../components/Portfolio Type/PortfolioType'
import Works from '../components/Works/Works'
import { projectMaterials } from '../data/projectsData'
import Portfolio from '../components/Portfolio/Portfolio'
import ContactCard from '../components/Contact Card/ContactCard'

const Projects = () => {
  const projectType = useParams().name

  const neededMaterials = projectMaterials.find((material) => {
    return material.name.toLowerCase() === projectType.toLowerCase()
  })

  return (
    <div className='projects'>
      <PortfolioType {...neededMaterials} />
      <Works {...neededMaterials} />
      <div className='alternative_portfolios'>
        <Portfolio projectType={projectType} />
      </div>
      <ContactCard />
    </div>
  )
}

export default Projects
