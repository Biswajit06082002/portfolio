import React from 'react'
import './styles/contact.css';
const Contact = () => {
  return (
    <div className='body'>
      <div className="Interval1">

      </div>
      <div className="contactForm">
      <div className="descHead">
          Contact Me
        </div>
      <div className="form">
        <form action="">
          <input type="text" placeholder='Name'/>
          <br />
          <input type="email" name="" id="" placeholder='Email'/>
          <br />
          <textarea name="" id="" cols="30" rows="10" placeholder='Query!!'></textarea>
          <br />
          <button className='submit'>submit</button>
        </form>
        
      </div>
      
      </div>
      <div className="Interval1">

      </div>
      <div className="footerHome">
            CopyRight 2023
        </div>
    </div>
  )
}

export default Contact
