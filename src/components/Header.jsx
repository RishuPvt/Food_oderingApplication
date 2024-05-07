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
import { RxCross1 } from "react-icons/rx";
export default function Header() {
  const [toggle, settoggle] = useState(false);

  const showmenubar = () => {
    settoggle(true);
    console.log("toogle done");
  };
  const hidemenubar = () => {
    settoggle(false);
    console.log("toogle done");
  };

  const list = [
    {
      icon: <MdWork />,
      name: " Swiggy Corporate",
    },
    {
      icon: <FaSearch />,
      name: " Search ",
    },
    {
      icon: <BiSolidOffer />,
      name: " Offer ",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: " Help ",
    },
    {
      icon: <FaUserPlus />,
      name: "  Sign IN ",
    },
  ];

  return (
    <>
      <div
        className="box w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="inner-box duration-500"
          style={{ visibility: toggle ? "visible" : "hidden" }}
          onClick={hidemenubar}
        >
          <div className="exiticon">
            <RxCross1 className="icon" />
          </div>
        </div>
      </div>
      <header className="section shadow-xl">
        <div className="nav">
          <div className="logo">
            <img src={swiggylogo} alt="logo" />
            <div className="drop-bar  hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 ">
              RISHU <SlArrowDown className="icon" onClick={showmenubar} />
            </div>
          </div>
          <ul className="list-items">
            {list.map((link, index) => {
              return (
                <li
                  key={index}
                  className=" hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                  <sup className="new"> {link.sup}</sup>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

    </>
  );
}
