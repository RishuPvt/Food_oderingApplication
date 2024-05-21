import React from "react";
import Card2 from "./Card2";
import Header2 from "./Header2";
import "../App.css";

function Offers() {
  return (
    <>
      <div className="offerCard">
        <div className="OfferTitle">
          <h1 className="text-orange-500">Home/Offers</h1>
        </div>
      </div>
      <Header2 />
      <Card2 title="Restaurants With Great Offers Near Me" />
    </>
  );
}

export default Offers;
