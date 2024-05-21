import "../App.css";
import React from "react";
import { NavLink } from "react-router-dom";
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
  const [toggle2, settoggle2] = useState(false);

  const showmenubar = () => {
    settoggle(true);
    console.log("toogle done");
  };
  const hidemenubar = () => {
    settoggle(false);
    console.log("toogle done");
  };

  const showmLogin = () => {
    settoggle2(true);
    console.log("toogle done");
  };
  const hideLogin = () => {
    settoggle2(false);
    console.log("toogle done");
  };

  const list = [
    {
      icon: <MdWork />,
      name: " Home",
      path: "/",
    },
    {
      icon: <FaSearch />,
      name: " Search ",
      path: "search",
    },
    {
      icon: <BiSolidOffer />,
      name: " Offer ",
      sup: "New",
      path: "offer",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: " Help ",
      path: "help",
    },
    {
      icon: <FaUserPlus />,
      Signin: "  Sign IN ",
    },
  ];

  return (
    <>
      <div
        className="box w-full h-full fixed duration-500 "
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="inner-box duration-500"
          style={{ visibility: toggle ? "visible" : "hidden" }}
        >
          <div className="exiticon">
            <RxCross1
              onClick={hidemenubar}
              className="icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer "
            />
          </div>
          <div className="locationBox ">
            <form className="flex items-center justify-center ">
              <input
                className=""
                type="Text"
                placeholder="Search for Area , Street name.."
              ></input>
            </form>
          </div>
        </div>
      </div>

      <div
        className="box w-full h-full fixed duration-500 flex justify-end "
        style={{
          opacity: toggle2 ? 1 : 0,
          visibility: toggle2 ? "visible" : "hidden",
        }}
      >
        <div
          className="inner-box duration-500"
          style={{ visibility: toggle2 ? "visible" : "hidden" }}
        >
          <div className="exiticon">
            <RxCross1
              className="icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer"
              onClick={hideLogin}
            />
          </div>
          <div className="conatiner">
            <form className="form2">
              <input type="text" placeholder="Phone Number"></input>
              <input type="Password" placeholder="Password"></input>
              <button className="btn5">Log In</button>
            </form>
            <div className="conatiner2">
              <h3>Or create Account</h3>
            </div>
          </div>
        </div>
      </div>

      <header className="section shadow-xl hidden sm:block">
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
                <li>
                  <NavLink
                    to={link.path}
                    key={index}
                    className="li hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer"
                  >
                    {link.icon}
                    {link.name}
                    <div className="SignIN" onClick={showmLogin}>
                      {link.Signin}
                    </div>
                    <sup className="new"> {link.sup}</sup>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
