import React from 'react'
import './item_card.css'
import test1 from '../../../assets/test1.webp'
import Button from '../Button/Button'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Item_Card = (props) => {
  const options=['500g', '1000g','100g']
  
  return (
    <>
    {/* <h1>This is card</h1> */}
    <div className='item-card'>
      <div className="card-image" style={{backgroundImage:`url(${props.product.image})`}}>

      </div>
      <div className="card-text">
       
        <div className="card-heading">
        <h2>{props.product.name}</h2>
        </div>
        <div className="card-sub-text">
          
         {props.product.price?<span className="price"> ₹{props.product.price}.00</span>:''}
         <Dropdown options={props.product.quantity_options?props.product.quantity_options:options} placeholder="Quantity" />
         {/* <span className="quantity">Quantity: {`${props.product.quantity}`}</span> */}
          
        </div>
        <div className="card-bottom">
       {/* <Dropdown options={options} /> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Item_Card
