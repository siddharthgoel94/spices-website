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
      {/* 
<form action="/products" method='GET'>
<div className="form-input">
<input type="radio" id="spices1" name="spices_choice" value="spices1"/>
<span><label for="spices1">Spices 1 djekbnjk ebfjkewb fjkewbfejkw</label></span>
</div>

<div className="form-input">
<input type="radio" id="spices2" name="spices_choice" value="spices2"/>
<label for="spices2">Spices 2</label>
</div>

<div className="form-input">
<input type="radio" id="spices3" name="spices_choice" value="spices3"/>
<label for="spices3">Spices 3</label>
</div>

<div className="form-input">
<input type="radio" id="spices4" name="spices_choice" value="spices4"/>
<label for="spices4">Spices 4</label>
</div>

<div className="form-input">
<input type="radio" id="spices5" name="spices_choice" value="spices5"/>
<label for="spices5">Spices 5</label>
</div>

<div className="button-holder">
    <Button title="Apply" color="#324C65"></Button>
    <Button title="Reset" color="#324C65"></Button>
</div>
</form>
     */}


      <div className="right">
       <h3 className='product-display-heading'>Our Products</h3>
      <div className="product-container">
      <Product_List products={filteredItems}/>
      </div>
      </div>
    </div>
    
  )
}

export default Product_Display
