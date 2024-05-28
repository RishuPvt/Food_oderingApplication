import React from "react";
import "../App.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CardImage from "./CardImage";
import { MdOutlineStarRate } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Cards({ title }) {
  const [Slide, Setslide] = useState(0);
  const nextSlide = () => {
    Setslide(Slide + 2);
  };

  const PrvSlide = () => {
    Setslide(Slide - 2);
  };

  return (
    <>
      <section className="categoery-box w-full h-[520px] flex justify-around mt-12">
        <div className="categoery-innerbox h-full w-4/5 shadow-lg ">
          <div className="categoery-title">
            <h2>{title}</h2>
            <span className="flex gap-5">
              <FaRegArrowAltCircleLeft
                onClick={PrvSlide}
                className="cursor-pointer icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500"
              />{" "}
              <FaRegArrowAltCircleRight
                onClick={nextSlide}
                className="cursor-pointer icon hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500"
              />
            </span>
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="categoery-items2  h-[307]  inline-flex "
              style={{ transform: `translatex(-${Slide * 10}%)` }}
            >
              <div className=" hover w-[260px] ">
             <NavLink to="/Barbeque">   <CardImage apiKey="r9vj1kuismiimtqb2nhl" /></NavLink>
                <h1 className="discount font-bold">₹600 for two</h1>
                <h2 className="name font-normal">Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Mughlai</h3>
                <h3 className="area font-light">Beta 2</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="eb282mtpbn1f2fnamwgs" />
                <h1 className="discount font-bold">₹300 for two</h1>
                <h2 className="name font-normal">UBQ by Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Biryani</h3>
                <h3 className="area font-light">Beta 2 Sector</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="96aaf72372ad1b0297b7cc304ced7e33" />
                <h1 className="discount font-bold">₹250 for two</h1>
                <h2 className="name font-normal">BOOM Sandwich</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Snacks</h3>
                <h3 className="area font-light">Sector Pi</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="2b4f62d606d1b2bfba9ba9e5386fabb7" />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_584332.JPG" />
                <h1 className="discount font-bold">₹350 for two</h1>
                <h2 className="name font-normal">KFC</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Snacks</h3>
                <h3 className="area font-light">Sector Pi</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="f3712f78feb56ca2f11ba6dcacd54521" />
                <h1 className="discount font-bold">₹400 for two</h1>
                <h2 className="name font-normal">
                  Daily Kitchen - Homely Meals
                </h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Home Food</h3>
                <h3 className="area font-light">Surajpur Site 4</h3>
              </div>{" "}
              <div className=" hover w-[260px]">
                <CardImage apiKey="94654fdf308764cd0faf83dba35bcdc3 " />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="fcdc89cb181db991b3db418c53d3e585" />
                <h1 className="discount font-bold">₹500 for two</h1>
                <h2 className="name font-normal">Chinese Daily</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 30-35 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Gautam Buddha Nagar</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="727ee82703c6fa71d1c954ead91dc20d" />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="59b64f9bb67234987652437f21d379c2" />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" hover w-[260px]">
                <CardImage apiKey="8194c8fed09497bce3714d2586653545" />
                <h1 className="discount font-bold">₹150 for two</h1>
                <h2 className="name font-normal">Natural Ice Cream</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 35-45 mins
                </h3>
                <h3 className=" nickname font-light">Ice Cream</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
