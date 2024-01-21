import React from 'react'
import Carousel from './Carousel/Carousel';
import Product_Range from './Product_Range/Product_Range';
import Display_Bar from '../Common/Display_Bar/Display_Bar';
import Different_Better from './Different_Better/Different_Better';
import Banner from './Banner/Banner';
import Product_List from '../Common/Product_List/Product_List';
import Safety from './Safety/Safety';
import Why_Best from './Why_Best/Why_Best';
import Testimonials from './Testimonials/Testimonials';
import Why_Us from './Why_Us/Why_Us';

import {productsListSpices} from '../../utils/products';
import {productsListMasale} from '../../utils/products';
import {boxSpices} from '../../utils/products';
import {accreditionImages} from '../../utils/images';
import {safetyImages} from '../../utils/images';

import test1 from '../../assets/carousel-image.webp'



const Landing = () => {
  return (
    <div>
      <Carousel />
      <Product_Range/>
      {/* <Display_Bar heading="Our Accreditions" images={accreditionImages}/> */}
      <Display_Bar heading="Why we are Safe" images={safetyImages}/>
      <Different_Better/>
     
      {/* <Banner image={test1} /> */}
      {/* <Product_List products={boxSpices} heading="Product List 1"/> */}
      {/* <Banner image={test1} /> */}
      {/* <Product_List products={productsListSpices} heading="Product List 2" /> */}
      {/* <Banner image={test1} /> */}
      <Safety/>
      <Why_Best/>
      {/* <Testimonials/> */}
      <Why_Us/>
      
    </div>
  )
}

export default Landing
