import React from "react";
import "../App.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CardImage from "./CardImage";
import { MdOutlineStarRate } from "react-icons/md";
import { useState } from "react";
function Card2({title}) {
  const [Slide, Setslide] = useState(0);
  const nextSlide = () => {
    Setslide(Slide + 2);
  };

  const PrvSlide = () => {
    Setslide(Slide - 2);
  };

  return (
    <>
      <section className="categoery-box w-full h-[550px] flex justify-around mt-12">
        <div className="categoery-innerbox h-full w-4/5 shadow-lg ">
          <div className="categoery-title">
            <h2>{title}</h2>
            <span className="flex gap-5">
              <FaRegArrowAltCircleLeft
                onClick={PrvSlide}
                className="cursor-pointer"
              />{" "}
              <FaRegArrowAltCircleRight
                onClick={nextSlide}
                className="cursor-pointer"
              />
            </span>
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="categoery-items2  h-[307]  inline-flex "
              style={{ transform: `translatex(-${Slide * 10}%)` }}
            >
              <div className=" w-[260px] ">
                <CardImage apiKey="64fd45fd9f44c1737bc446e470bed666" />
                <h1 className="discount font-bold">₹600 for two</h1>
                <h2 className="name font-normal">Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Mughlai</h3>
                <h3 className="area font-light">Beta 2</h3>
              </div>
              <div className=" w-[260px]">
                <CardImage apiKey="727ee82703c6fa71d1c954ead91dc20d" />
                <h1 className="discount font-bold">₹300 for two</h1>
                <h2 className="name font-normal">UBQ by Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Biryani</h3>
                <h3 className="area font-light">Beta 2 Sector</h3>
              </div>
              <div className=" w-[260px]">
                <CardImage apiKey="3b07757650e9c4c993d4d11b95b0c1e8" />
                <h1 className="discount font-bold">₹250 for two</h1>
                <h2 className="name font-normal">BOOM Sandwich</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Snacks</h3>
                <h3 className="area font-light">Sector Pi</h3>
              </div>
              <div className=" w-[260px]">
                <CardImage apiKey="0d959f87516479195952893fa26b11c9" />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" w-[260px]">
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
              <div className=" w-[260px]">
                <CardImage apiKey="29f0c4dbc0dffa9a2248cd75f251dc74" />
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
              <div className=" w-[260px]">
                <CardImage apiKey="b1b35780a9b1dfeb26d680506d494eaa " />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" w-[260px]">
                <CardImage apiKey="RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/ad1693f9-cf80-497c-93ef-591f53937ce1_569189.JPG" />
                <h1 className="discount font-bold">₹500 for two</h1>
                <h2 className="name font-normal">Chinese Daily</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 30-35 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Gautam Buddha Nagar</h3>
              </div>
              <div className=" w-[260px]">
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
              <div className=" w-[260px]">
                <CardImage apiKey="qcujvqfty08cdh18oatv" />
                <h1 className="discount font-bold">50% OFF UPTO 100</h1>
                <h2 className="name font-normal">Pizza Hut</h2>
                <h3 className="rating font-light">
                  <MdOutlineStarRate />
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">pizzas</h3>
                <h3 className="area font-light">Noida</h3>
              </div>
              <div className=" w-[260px]">
                <CardImage apiKey="pthjfmibo8qfci1wptyp" />
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

export default Card2;
