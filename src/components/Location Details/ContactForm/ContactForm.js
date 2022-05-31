import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='form_holder'>
      <div className='form_holder_text'>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line.
        </p>
      </div>

      <form className='contact_form'>
        <input type='text' placeholder='Name' name='name' required />
        <input type='email' placeholder='Email Address' name='email' required />
        <input type='number' placeholder='Phone' name='number' required />
        <textarea
          name='message'
          cols='30'
          rows='4'
          placeholder='Your Message'
          required
        ></textarea>
        <button className='form_submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default ContactForm
