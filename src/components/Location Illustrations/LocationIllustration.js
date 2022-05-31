import React from 'react'
import './LocationIllustration.css'
import canadaIllusration from '../../assets/shared/desktop/illustration-canada.svg'
import australiaIllusration from '../../assets/shared/desktop/illustration-australia.svg'
import unitedKingdomIllusration from '../../assets/shared/desktop/illustration-united-kingdom.svg'
import { Link } from 'react-router-dom'

const LocationIllustration = () => {
  const locations = [
    { name: 'canada', image: canadaIllusration },
    { name: 'australia', image: australiaIllusration },
    { name: 'united kingdom', image: unitedKingdomIllusration },
  ]
  return (
    <div className='location_illustrations_container'>
      {locations.map((location, index) => {
        return (
          <div key={index} className='location_item'>
            <img src={location.image} alt='location_illustration' />
            <h2>{location.name.toUpperCase()}</h2>
            <Link to='/location'>
              <button className='view_location_btn'>SEE LOCATION</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default LocationIllustration
