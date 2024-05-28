import React from "react";
import { useState, useEffect } from "react";
function CardImage({ apiKey }) {
  const [CardUrl, setcardUrl] = useState("");

  useEffect(() => {
    const fetchcard = async () => {
      const response = await fetch(
        `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${apiKey}`
      );

      const CardData = await response.blob();
      const CardUrl = URL.createObjectURL(CardData);
      setcardUrl(CardUrl);
    };
    fetchcard();
  }, [apiKey]);

  return (
    <>
      <div>{CardUrl && <img  className="rounded-xl"src={CardUrl} alt={apiKey} />}</div>
    </>
  );
}

export default CardImage;
