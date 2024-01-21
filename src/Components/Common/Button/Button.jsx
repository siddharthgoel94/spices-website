import React from 'react'
import './button.css';
import img from '../../../assets/cart.svg';

const Button = (props) => {
  return (
    <div className='button-class'> 
    <button style={{backgroundColor:`${props.color}`}}>{props.title}</button>
    </div>
  )
}

export default Button
