import React from 'react'
import { TbFilterPlus } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import "../App.css";
import BurgerCards from './BurgerCards';
function BurgerSubCard() {


  return (
    <>
    <div className=''>
      <div className=''>
      <div className="offerCard h-[45px]">
          <div className="OfferTitle">
            <h1 className="text-orange-500">Home/Burger</h1>
          </div>
          </div>
      <div className='h-[180px] w-full flex justify-center items-center '>
      <div className='w-4/5 '>
        <h1 className='text-6xl font-medium'>Burger</h1>
        <h4 className='text-2xl'>Satisfy your cravings with these fresh and flavoursome burgers</h4>
      </div>
      
      </div>
      <div className='flex justify-center items-center shadow-lg'>
        <ul className='burger-list flex'>
          <li className='hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer'>Filter 
      <TbFilterPlus />

          </li>
          <li className='icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer'>Shot By
       <IoIosArrowDown />,
          </li>
          <li className='icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer'>Pure Veg </li>
          <li className='icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer'>Fast Delivery</li>
          <li className='icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer'>Rs300-Rs600</li>

        </ul>
      </div>
      </div>
      <div className=' flex justify-center'>
<BurgerCards/>

      </div>
      <div className=' flex justify-center'>
<BurgerCards/>
      </div>
      <h1 className='show-more hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer'>Show More </h1>
   
      </div>
    
    </>
  )
}

export default BurgerSubCard