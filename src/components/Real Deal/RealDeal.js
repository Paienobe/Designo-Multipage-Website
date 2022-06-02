import React from 'react'
import './RealDeal.css'
import realDealImage from '../../assets/about/mobile/image-real-deal.jpg'
// tablet image
import tabImage from '../../assets/about/tablet/image-real-deal.jpg'
// desktop image
import desktopImage from '../../assets/about/desktop/image-real-deal.jpg'

const RealDeal = () => {
  return (
    <div className='real-deal'>
      <div className='real_image_container'>
        <img
          src={
            window.innerWidth < 640
              ? realDealImage
              : window.innerWidth > 640 && window.innerWidth < 850
              ? tabImage
              : desktopImage
          }
          alt='real-deal'
        />
      </div>

      <div className='real_deal_text'>
        <h1>The real deal</h1>
        <p>
          As strategic partners in our clients' businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </div>
  )
}

export default RealDeal
