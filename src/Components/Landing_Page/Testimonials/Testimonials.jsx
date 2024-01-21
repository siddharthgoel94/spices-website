import React from 'react'
import './testimonials.css'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import test from '../../../assets/test1.webp';


const Testimonials = () => {
      const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  return (
    <>
   
    <div className='testimonials'>
    <h2>Our Testimonials</h2>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display:'none',
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display:'none',
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 900,
          },
        ]}
        dotsNav={{show:true, itemBtnProps:{
          style:{
          width:10,
          height:10,
          margin:10,
          borderRadius:10,
          border:'none',
          backgroundColor:'grey'
          }
          
         
      },
      activeItemBtnProps:{
        style:{
          width:10,
          height:10,
          margin:10,
          borderRadius:10,
          border:'none',
          backgroundColor:'black'

        }
        

      }
    }}
        speed={1000}
        easing="linear"
        // infinite={true}
        autoplayDelay={100}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        <div className="testimonial-slide">
            <img src={test} alt="testimonial-slide" />
        </div>
        
        
        
      </ReactSimplyCarousel>
     </div>
    </>
    
  )
}

export default Testimonials
