import React from 'react'
import './product_list.css'
import Item_Card from '../Item_Card/Item_Card'

const Product_List = (props) => {
   
    
  return (
    <>
    <h4 className='product-list-heading'>{props.heading}</h4>
    <div className='product-list'>
     
       
            {
            props.products.map(product=>{
               return(<Item_Card key={product.id} product={product}
           
             />)
            })
}
    </div>
    </>
  )
    
}

export default Product_List
