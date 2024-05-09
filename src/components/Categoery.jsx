import React, { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ImageDisplay from "./ImageComponent";

import "../App.css";

function Categoery() {
  const [slide, setslide] = useState(0);

  const nextslide = () => {
    setslide(slide + 3);
  };

  const prevslide = () => {
    setslide(slide - 3);
  };
  return (
    <>
      <section className="categoery-box w-full h-[320px] flex justify-around ">
        <div className="categoery-innerbox h-full w-4/5 shadow-lg ">
          <div className="categoery-title">
            <h2>What's on your mind?</h2>
            <span className="flex gap-5">
              <FaRegArrowAltCircleLeft
                onClick={prevslide}
                className="cursor-pointer"
              />{" "}
              <FaRegArrowAltCircleRight
                onClick={nextslide}
                className="cursor-pointer"
              />
            </span>
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="categoery-items  h-[200px]  inline-flex "
              style={{ transform: `translatex(-${slide * 10}%)` }}
            >
              <div className="  list-div w-[160px]">
                <ImageDisplay apiKey="v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1675667625/PC_Creative%20refresh/Biryani_2.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png" />
              </div>
              <div className=" list-div w-[160px]">
                {" "}
                <ImageDisplay apiKey="v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png" />
              </div>

              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png" />
              </div>
              <div className=" list-div w-[160px]">
                <ImageDisplay apiKey="v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png" />
              </div>
              <div className=" list-div w-[160px]">
                {" "}
                <ImageDisplay apiKey="v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png" />
              </div>
              <div className=" list-div w-[160px]">
                {" "}
                <ImageDisplay apiKey="v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" />
              </div>
              <div className=" list-div w-[160px]">
                {" "}
                <ImageDisplay apiKey="v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png" />
              </div>

              <div className=" list-div w-[160px]">
                {" "}
                <ImageDisplay apiKey="v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png" />
              </div>

              <div className=" list-div w-[160px]">
                {" "}
                <ImageDisplay apiKey="v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png" />
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categoery;
