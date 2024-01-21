import React from 'react'
import './recipe.css'
import test from '../../../assets/carousel-image.webp'
import Banner from '../../Landing_Page/Banner/Banner'
import Recipe_Card from './Recipe_Card/Recipe_Card'
import {recipeListSpices} from '../../../utils/recipes'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';

const items=recipeListSpices;

function Items({ currentItems }) {
  return (
    <>
    <div className='recipe-holder'>
      {currentItems &&
        currentItems.map((item) => (
          <div className='recipe-card-wrapper'>
           <Recipe_Card name={item.name} recipeText={item.text}/>
            {/* <hr></hr> */}
          </div>
        ))}
        </div>
    </>
  );
}

const Recipe = ({itemsPerPage}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
    <div className='recipe'>
     <Banner image={test}/>
     <h3 className='recipe-heading'>Explore Recipes to our exotic masale</h3>
     <Items currentItems={currentItems} />
     <div style={{display:'flex', alignItems:'center', justifyContent:'center', listStyle:'none'}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName='pagination-item'
        previousClassName='pagination-previous'
        nextClassName='pagination-next'
        containerClassName='pagination-container'
      />
</div>
     </div>
    
  )
}

export default Recipe
