import React from 'react'
import { Link } from 'react-router-dom'
import './ContactCard.css'

const ContactCard = () => {
  return (
    <div className='contact_card'>
      <div>
        <h1>Let's talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>

      <Link to='/contact'>
        <button className='contact_card_btn'>LEARN MORE</button>
      </Link>
    </div>
  )
}

export default ContactCard
