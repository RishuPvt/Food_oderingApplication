import "../App.css";
import React from "react";
import { MdWork } from "react-icons/md";
import swiggylogo from "./images/logo.png";
import { SlArrowDown } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
  const [toggle, settoggle] = useState(false);
  const showmenubar = () => {
    settoggle(true);
    console.log("toogle done");
  };
  return (
    <>
      <div
        className="box w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        {" "}
      </div>
      <header className="section shadow-xl">
        <div className="nav">
          <div className="logo">
            <img src={swiggylogo} alt="logo" />
            <div className="drop-bar  hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              Swiggy <SlArrowDown onClick={showmenubar} />
            </div>
          </div>
          <ul className="list-items">
            <li className=" hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              <MdWork />
              HOME
            </li>
            <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              <FaSearch />
              HOME{" "}
            </li>
            <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              {" "}
              <BiSolidOffer />
              HOME
            </li>
            <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              <IoHelpBuoyOutline /> HOME
            </li>
            <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              <FaUserPlus /> HOME
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
