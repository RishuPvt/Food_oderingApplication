import React from 'react'
import { RiFilter3Line } from "react-icons/ri";
import "../App.css";
import { FaSearch } from "react-icons/fa";

function Header2() {
    const list = [
        {
          icon: <RiFilter3Line/> ,
          name: " Swiggy ",
        },
        {
          name: " Sorted by ",
        },
        {
          name: " Fast Delivery",
        },
        {
          name: " New on Swiggy ",
        },
        {
          name: "  Ratings 4.0 +",
        },
        {
            name: "  Pure Veg ",
          },
          {
            name: "  Offers ",
          },
          {
            name: "  Rs. 300-Rs. 600",
          },
          {
            name: "  Less than Rs. 300 ",
          },
      ];
    
  return (
    <>
    <div className='section2 p-[15px] shadow-xl flex items-center'>
<ul className='list-items2 '>
{list.map((link,index)=>{
    return(
        <li
        key={index}
        className=" hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer"
      >
        {link.name}
        {link.icon}

        
      </li>
    )
})}

</ul>
<form className='srch'>
    <input placeholder='Search'></input>
    <FaSearch/>
</form>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Header2