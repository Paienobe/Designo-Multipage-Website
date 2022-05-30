import React from 'react'
import './Illustration.css'
import passionateIllustration from '../../assets/home/desktop/illustration-passionate.svg'
import resourcefulIllustration from '../../assets/home/desktop/illustration-resourceful.svg'
import friendlyIllustration from '../../assets/home/desktop/illustration-friendly.svg'

const Illustrations = () => {
  const illustrations = [
    {
      image: passionateIllustration,
      title: 'Passionate',
      text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
      image: resourcefulIllustration,
      title: 'Resourceful',
      text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    },
    {
      image: friendlyIllustration,
      title: 'Friendly',
      text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    },
  ]
  return (
    <div className='illustration_container'>
      {illustrations.map((illustration, index) => {
        return (
          <div key={index} className='illustration'>
            <img
              src={illustration.image}
              alt={`illustration-${illustration.title}`}
            />
            <h3 className='illustration_title'>
              {illustration.title.toUpperCase()}
            </h3>
            <p>{illustration.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Illustrations
