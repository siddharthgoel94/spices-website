import React from 'react'
import './banner.css'

const Banner = (props) => {
  return (
    <div className='banner' style={{backgroundImage:`url(${props.image})`}}>
      
    </div>
  )
}

export default Banner
