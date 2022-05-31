import React from 'react'
import './Works.css'

const Works = ({ projects }) => {
  return (
    <div className='works_container'>
      {projects.map((project, index) => {
        return (
          <div className='project_item' key={index}>
            <div className='project_item_image_container'>
              <img src={project.image} alt='thumb' />
            </div>

            <div className='project_text'>
              <h2>{project.name.toUpperCase()}</h2>
              <p>{project.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Works
