import React from 'react'
import './RealDeal.css'
import realDealImage from '../../assets/about/mobile/image-real-deal.jpg'

const RealDeal = () => {
  return (
    <div className='real-deal'>
      <img src={realDealImage} alt='real-deal' />
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
