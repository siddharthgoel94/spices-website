import React from 'react'
import './product_range.css'
import test1 from '../../../assets/test1.webp'

const Product_Range = () => {
  return (
    <div className='product-range'>
      <h2>Our Products</h2>

      <div className="image-holder"  >

       
        <div className="image-holder-image" style={{backgroundImage:`url(${test1})`}}>
         
           <div className="overlay-filter">
             </div>
           {/* <div className="overlay-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse maxime omnis dignissimos amet nulla necessitatibus, maiores sit cumque voluptates quod culpa fugiat cupiditate ipsam ea quasi provident eius dicta?
          </p>
             </div> */}
        </div>
        <div className="image-holder-image" style={{backgroundImage:`url(${test1})`}}>
         
           <div className="overlay-filter">
             </div>
           {/* <div className="overlay-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse maxime omnis dignissimos amet nulla necessitatibus, maiores sit cumque voluptates quod culpa fugiat cupiditate ipsam ea quasi provident eius dicta?
          </p>
             </div> */}
        </div>
        <div className="image-holder-image" style={{backgroundImage:`url(${test1})`}}>
         
           <div className="overlay-filter">
             </div>
           {/* <div className="overlay-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse maxime omnis dignissimos amet nulla necessitatibus, maiores sit cumque voluptates quod culpa fugiat cupiditate ipsam ea quasi provident eius dicta?
          </p>
             </div> */}
        </div>
        <div className="image-holder-image" style={{backgroundImage:`url(${test1})`}}>
         
           <div className="overlay-filter">
             </div>
           {/* <div className="overlay-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse maxime omnis dignissimos amet nulla necessitatibus, maiores sit cumque voluptates quod culpa fugiat cupiditate ipsam ea quasi provident eius dicta?
          </p>
             </div> */}
        </div>
       
        
      </div>
    </div>
  )
}

export default Product_Range
