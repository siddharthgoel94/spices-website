import React, { useEffect, useState } from 'react'
import Banner from '../Landing_Page/Banner/Banner'
import test1 from '../../assets/carousel-image.webp'
import './product_display.css'
import Product_List from '../Common/Product_List/Product_List'

import {productsListSpices} from '../../utils/products';
import {productsListMasale} from '../../utils/products';
import {boxSpices} from '../../utils/products';
// import { Button } from '@mui/material'
import Button from '../Common/Button/Button'
import Select from 'react-select'


const Product_Display = () => {
  const spicesOptions=[
  { value: 'spice1', label: 'Spice 1' },
  { value: 'spice2', label: 'Spice 2' },
  { value: 'spice3', label: 'Spice 3' }
]
const [selectedOption,setSelectedOption]=useState(null);
const [filteredItems,setFilteredItems]=useState([]);
useEffect(()=>{
  // console.log(selectedOption);
  if(selectedOption && selectedOption.value==='spice1'){
     setFilteredItems(productsListSpices)
  }
  else if( selectedOption && selectedOption.value==='spice2'){
    setFilteredItems(productsListMasale)
  }
  else if( selectedOption && selectedOption.value==='spice3'){
    setFilteredItems(boxSpices)
  }
  else{
    setFilteredItems(productsListSpices)
  }
  },[selectedOption])
  


  return (
    <div className='product-display'>
       
      {/* <Banner image={test1}/> */}
     
      <h3 className='product-display-heading'>Our Products</h3>

<div className="apply-filters">
  <span><h3>Apply Filters</h3></span>
  <div className="filter-form">
    <form action="">
      
       <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={spicesOptions[0]}
        name="filter-options"
        options={spicesOptions}
        onChange={setSelectedOption}
      />
    </form>
  </div>
</div>

      <div className="right">
       {/* <h3 className='product-display-heading'>Our Products</h3> */}
      <div className="product-container">
      <Product_List products={filteredItems}/>
      </div>
      </div>
    </div>
    
  )
}

export default Product_Display
