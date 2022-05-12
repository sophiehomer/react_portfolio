import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <>
    <div className="contactForm">
          <form className="contactForm">
            {/* <label for="contact-name">Name</label> */}
            <input type="text" className="contactName" id="contact-name" placeholder="YOUR NAME"/>
            
            {/* <label for="contact-email">Email</label> */}
            <input type="text" className="contactEmail" id="contact-Email" placeholder="EMAIL ADDRESS"/>
        
            {/* <label for="contact-message">Message</label> */}
            <textarea id="contact-message" className="contactMessage" placeholder="MESSAGE"></textarea>
        
            <button className="submitButton" type="submit">SUBMIT</button>
          </form>
        </div>
    </>
  )
}

export default Contact