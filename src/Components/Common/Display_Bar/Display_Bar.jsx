import React from 'react'
import './display_bar.css';

import img1 from '../../../assets/haccp.webp';
// const images=[img1,img1,img1,img1,img1,img1,img1,img1,img1,img1];

const Display_Bar = (props) => {
  return (

    <div className='display-bar'>
        <h2 className='display-bar-heading'>{props.heading}</h2>
        <div className="display-bar-image-holder">
      {
        props.images.map(image=>{
            return(
                <div key={image.id}className='display-bar-image'>
                  <img src={image.url} alt="image-of-display-bar" />
                  <p>{image.text}</p>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Display_Bar
