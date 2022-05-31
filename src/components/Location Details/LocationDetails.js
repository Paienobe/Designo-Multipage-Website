import React from 'react'
import canadaMap from '../../assets/locations/desktop/image-map-canada.png'
import australiaMap from '../../assets/locations/desktop/image-map-australia.png'
import unitedKingdomMap from '../../assets/locations/desktop/image-map-united-kingdom.png'
import './LocationDetails.css'

const LocationDetails = () => {
  const locations = [
    {
      name: 'Canada',
      officeName: 'Designo Central Office',
      street: '3886 Wellington Street',
      officeLocation: 'Toronto, Ontario M9C 3J5',
      phone: '+1 253-863-8967',
      mail: 'contact@designo.co',
      map: canadaMap,
    },
    {
      name: 'Australia',
      officeName: 'Designo AU Office',
      street: '19 Balonne Street',
      officeLocation: 'New South Wales 2443',
      phone: '(02) 6720 9092',
      mail: 'contact@designo.au',
      map: australiaMap,
    },
    {
      name: 'United Kingdom',
      officeName: 'Designo UK Office',
      street: '13 Colorado Way',
      officeLocation: 'Rhyd-y-fro SA8 9GA',
      phone: '078 3115 1400',
      mail: 'contact@designo.uk',
      map: unitedKingdomMap,
    },
  ]
  return (
    <div>
      {locations.map((location) => {
        return (
          <div className='location_details'>
            <div className='location_text'>
              <h1 className='location_name'>{location.name}</h1>

              <div className='location_detail_section'>
                <p className='office_name'>{location.officeName}</p>
                <p>{location.street}</p>
                <p>{location.officeLocation}</p>
              </div>

              <div className='location_detail_section'>
                <p className='contact_text'>Contact</p>
                <p>P: {location.phone}</p>
                <p>M: {location.mail}</p>
              </div>
            </div>
            <div>
              <img src={location.map} alt='map' />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LocationDetails
