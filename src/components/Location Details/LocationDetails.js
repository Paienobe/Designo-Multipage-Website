import React from 'react'
import canadaMap from '../../assets/locations/desktop/image-map-canada.png'
import australiaMap from '../../assets/locations/desktop/image-map-australia.png'
import unitedKingdomMap from '../../assets/locations/desktop/image-map-united-kingdom.png'
// tablet images
import tabMap1 from '../../assets/locations/desktop/image-map-canada.png'
import tabMap2 from '../../assets/locations/desktop/image-map-australia.png'
import tabMap3 from '../../assets/locations/desktop/image-map-united-kingdom.png'

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
      map: `${window.innerWidth < 850 ? tabMap1 : canadaMap}`,
    },
    {
      name: 'Australia',
      officeName: 'Designo AU Office',
      street: '19 Balonne Street',
      officeLocation: 'New South Wales 2443',
      phone: '(02) 6720 9092',
      mail: 'contact@designo.au',
      map: `${window.innerWidth < 850 ? tabMap2 : australiaMap}`,
    },
    {
      name: 'United Kingdom',
      officeName: 'Designo UK Office',
      street: '13 Colorado Way',
      officeLocation: 'Rhyd-y-fro SA8 9GA',
      phone: '078 3115 1400',
      mail: 'contact@designo.uk',
      map: `${window.innerWidth < 850 ? tabMap3 : unitedKingdomMap}`,
    },
  ]
  return (
    <div className='location_container'>
      {locations.map((location, index) => {
        return (
          <div
            className='location_details'
            key={index}
            style={
              index === 1
                ? { flexDirection: 'row-reverse' }
                : { flexDirection: 'row' }
            }
          >
            <div className='location_text'>
              <div>
                <h1 className='location_name'>{location.name}</h1>
                <div className='location_detail_section'>
                  <p className='office_name'>{location.officeName}</p>
                  <p>{location.street}</p>
                  <p>{location.officeLocation}</p>
                </div>
              </div>

              <div className='location_detail_section'>
                <p className='contact_text'>Contact</p>
                <p>P: {location.phone}</p>
                <p>M: {location.mail}</p>
              </div>
            </div>
            <div className='map_container'>
              <img src={location.map} alt='map' className='location_map' />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LocationDetails
