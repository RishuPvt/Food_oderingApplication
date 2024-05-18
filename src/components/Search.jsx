import React from 'react'
import "../App.css";
import { FaSearch } from "react-icons/fa";
import Searchcategoery from './SearchCard';
function Search() {
  return (
    <>
    <div className=' w-full h-[65vh]'>
    <div className='offerCard'>
    <div className='OfferTitle'> 
      <h1 className='text-orange-500'>Home/Search</h1> 
      </div>
      </div>
      <div className=' w-full h-[130px] flex items-center justify-center'>
<form className='searchBox justify-center w-[65%] flex items-center'>
<input className='w-[95%] h-[38px] outline-none' type='text' placeholder='Search'>
</input>
<FaSearch/>
</form>
</div>
<Searchcategoery/>
    </div>
    
    </>
  )
}

export default Search