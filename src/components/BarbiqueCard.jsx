import React from 'react'
import "../App.css";
import resturent from "./images/resturent.png"
import { FaRegStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import RestMenu from './RestMenu';
function BarbiqueCard() {
  return (
    <>
     <div className="offerCard h-[45px]">
          <div className="OfferTitle">
            <h1 className="text-orange-500">Home/Barbique</h1>
          </div>
          </div>

<div className='rest w-[100%] flex justify-center'>
    <img src={resturent} alt=''/>
</div>
<div className='rest-head'>
<h1 className='rest-name'>Barbique Nation</h1>
<h3 className='rest-rating'> <FaRegStar className='text-orange-500' />Rating:<sup>123</sup></h3>
</div>
<div className='rest-about'>
<h4>North Indian, Biryani, Fast Food</h4>
<h4>Sector 29, Gurgaon</h4>
<h4 className='text-orange-500'>Closed - <span>Opens at 5pm</span></h4>
</div>
<h1 className='menu-title'> <MdMenuBook/>Menu<MdOutlineRestaurantMenu/></h1>

<div className=" w-full h-[130px] flex items-center justify-center">
          <form className="searchBox justify-center w-[65%] flex items-center">
            <input
              className="w-[95%] h-[38px] outline-none"
              type="text"
              placeholder="Search for dishes"
            ></input>
            <FaSearch className="cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500" />
          </form>
        </div>
  
<RestMenu/>

    
    
    
    
    
    
    
    </>
  )
}

export default BarbiqueCard