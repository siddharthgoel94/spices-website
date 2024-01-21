import React from 'react'
import './footer.css'
import logo from '../../assets/logo-new.png'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-content">
          
            <div className='w-50 mx-auto'>
           
            <div className="footer-heading">Quick Links</div>
            <div className="links-holder">
                <div className="footer-icon">
                    <img src={logo} height={250} width={250} alt="the logo" />
                </div>

                <div className="link-set">
                <h3>Link set 1</h3>
            <ul className="quick-links d-flex justify-content-around">
                
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                </div>
           
                <div className="link-set">
                    <h3>Link set 1</h3>
            <ul className="quick-links d-flex justify-content-around">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                </div>
           
                <div className="link-set">
                <h3>Link set 1</h3>
            <ul className="quick-links d-flex justify-content-around">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                </div>
           
            
           
                </div>
            </div>
         
        </div>
        <h4 className="footer-copyright">&copy; SHRI KRISHNA FOOD PRODUCTS </h4>
    </div>
    </>
  )
}

export default Footer
