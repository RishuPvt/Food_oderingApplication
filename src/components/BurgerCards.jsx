import React from 'react'
import CardImage from './CardImage'
import "../App.css";

function BurgerCards() {
  return (
    <>
              
    <div className=" hover w-[260px] m-[20px] ">
                <CardImage apiKey="a621fa2337beff38368bb19988d27fcb" />
                <h1 className="discount font-bold">₹600 for two</h1>
                <h2 className="name font-normal">Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Mughlai</h3>
                <h3 className="area font-light">Beta 2</h3>
              </div>

              
    <div className="hover w-[260px] m-[20px] ">
                <CardImage apiKey="ce07f0e42a95138f784bbe18c5caff9d" />
                <h1 className="discount font-bold">₹600 for two</h1>
                <h2 className="name font-normal">Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Mughlai</h3>
                <h3 className="area font-light">Beta 2</h3>
              </div>

              
    <div className=" hover w-[260px] m-[20px] ">
                <CardImage apiKey="giubk46mdxi2bbhqhyox" />
                <h1 className="discount font-bold">₹600 for two</h1>
                <h2 className="name font-normal">Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Mughlai</h3>
                <h3 className="area font-light">Beta 2</h3>
              </div>

              
    <div className=" hover w-[260px] m-[20px] ">
                <CardImage apiKey="rpexjrzhh8d8yo1k6qtf" />
                <h1 className="discount font-bold">₹600 for two</h1>
                <h2 className="name font-normal">Barbeque Nation</h2>
                <h3 className="rating font-light">
                  <span className="font-bold">4.1.</span> 50-55 mins
                </h3>
                <h3 className=" nickname font-light">Mughlai</h3>
                <h3 className="area font-light">Beta 2</h3>
              </div>

    </>
  )
}

export default BurgerCards