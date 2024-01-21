import React from 'react'
import './safety.css';
import test from '../../../assets/test1.webp'
import Button from '../../Common/Button/Button'

const Safety = () => {
  return (
    <div className='safety'>
        <div className="top">
      <h3 className='heading'>Subscribe To Safety</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus asperiores itaque obcaecati molestias quibusdam eos aliquid. Quia officia consectetur enim!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quidem velit nostrum ad dolorem laboriosam dolorum consequatur, et fugit suscipit, minus laudantium ut nemo perspiciatis exercitationem placeat veniam quos molestiae.
      </p>
    </div>
    <div className="safety-bottom">
      <div className="left">
        <h3>Our Safety checklist</h3>
        <ul className='safety-list'>
          <li><div className="safety-item">
            <img src={test} alt="" />
            <p className='safety-item-text'>Hello</p>
            </div>
            </li>
          <li><div className="safety-item">
            <img src={test} alt="" />
            <p className='safety-item-text'>Hello</p>
            </div>
            </li>
          <li><div className="safety-item">
            <img src={test} alt="" />
            <p className='safety-item-text'>Hello</p>
            </div>
            </li>
          <li><div className="safety-item">
            <img src={test} alt="" />
            <p className='safety-item-text'>Hello</p>
            </div>
            </li>
          <li><div className="safety-item">
            <img src={test} alt="" />
            <p className='safety-item-text'>Hello</p>
            </div>
            </li>
         
          
        </ul>
      </div>
      <div className="right">
{/* <img src={test} alt="safety-image" /> */}
      </div>
      
    </div>
    
    </div>
   
  )
}

export default Safety
