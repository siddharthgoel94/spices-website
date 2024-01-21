import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './carousel.css'
// import logo from '../../../assets/logo.svg'
import carouselImage1 from '../../../assets/carousel-image.png';
import carouselImage2 from '../../../assets/carousel-image2.png';
import carouselImage3 from '../../../assets/carousel-image.png';
import carouselImage4 from '../../../assets/carousel-image2.png';
const images=[carouselImage1,carouselImage2,carouselImage3,carouselImage4,carouselImage1,carouselImage2,carouselImage3,carouselImage4];


function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className='carousel'>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        dotsNav={{
            show:true,
            itemBtnProps:{
                style:{
                width:10,
                height:10,
                margin:10,
                borderRadius:10,
                border:'none',
                }
                
               
            },
            
        }
        }
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
        // responsiveProps={[
        //   {
        //     itemsToShow: 2,
        //     itemsToScroll: 2,
        //     minWidth: 768,
        //   },
        // ]}
        speed={200}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {
           
            images.map(image=>{
                // console.log(imgUrl);
                return (<div className="carousel-slide" style={{backgroundImage:`url(${image})`}}>
                  <div className="overlay"> </div>
                  {/* <img src={image} alt="carousel image" /> */}
                  <div className="overlay"> </div>
                 
                  </div>);
            })
        }
        
        
        
        
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;