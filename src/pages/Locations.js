import React from 'react'
import ContactCard from '../components/Contact Card/ContactCard'
import LocationDetails from '../components/Location Details/LocationDetails'

const Locations = () => {
  return (
    <div className='locations'>
      <LocationDetails />
      <ContactCard />
    </div>
  )
}

export default Locations
