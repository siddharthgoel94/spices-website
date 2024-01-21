import React from 'react'
import './different_better.css'
import img from '../../../assets/test1.webp'

const Different_Better = () => {
  return (
    <div className='different-better'>
        <div className="left">
        <h2 className='different-better-heading'>What Makes Us different<br/>
      Makes us better
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores cumque voluptatum consequatur quo! Consequatur consequuntur quaerat eius adipisci quia omnis consectetur. A!
      </p>
      <button>Call to Action</button>

        </div>
      
      <div className="right">
        <img src={img} alt="This is CTA image" />

      </div>
    </div>
  )
}

export default Different_Better
