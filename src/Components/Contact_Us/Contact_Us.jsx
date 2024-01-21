import React from 'react'
import './contact_us.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Contact_Us = () => {
  return (
    <div className='contact-us'>
      <h2 className='heading'>Contact Us</h2>
<div className='contact-container'>
     <div className="contact-details">

        <div className="contact-detail">
           
      <FontAwesomeIcon icon={faLocationDot} style={{height:'50'}} />
     
      <p>Plot No. 238, Pkt. No. BD, Sector-3, DSIIDC, Bawana Industrial Area, DELHI - 110039 (INDIA)</p>
      </div>

      <div className="contact-detail">
      <a href='mailto:skfp2022@gmail.com'><FontAwesomeIcon icon={faEnvelope} style={{height:'50'}} /></a>
      <p>skfp2022@gmail.com</p>
      
      </div>

      <div className="contact-detail">
      <FontAwesomeIcon icon={faPhone} style={{height:'50'}} />
      <p>+91 - 7027278532</p>
      </div>
      </div>

      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111889.20875115918!2d76.96368749872552!3d28.793044028478956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d075418e88e33%3A0x318403266394a293!2sSHRI%20KRISHNA%20FOOD%20PRODUCTS!5e0!3m2!1sen!2sin!4v1705683653808!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111889.20875115918!2d76.96368749872552!3d28.793044028478956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d075418e88e33%3A0x318403266394a293!2sSHRI%20KRISHNA%20FOOD%20PRODUCTS!5e0!3m2!1sen!2sin!4v1705683653808!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      </div>


      </div>
     
  )
}

export default Contact_Us
