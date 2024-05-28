import React from "react";
import CardImage from "./CardImage";
import { FaLocationArrow } from "react-icons/fa6";
import "../App.css";
import { FaRegStar } from "react-icons/fa";
export default function RestMenu() {
  const menu = [
    {
      name: "Andhra Kodi(chicken) Pulao -750ml",
      price: "Rs360 ",
      rating: "3.9(55)",
      description:
        "[Serves with Raita]A layered, aromatic, culinary masterpiece created with slow-cooked on the bone chicken, basmati rice, saffron, warm spices and fresh mint.",
      api: "9ad7f9c216d31a6f492c5e0c9cee23d4",
    },
    {
      name: "Chicken 65 Biryani [1/2Kg] Serves 1-2",
      price: "Rs405 ",
      rating: "4.2(65)",
      description:
        "Spicy and tangy flavors of Chicken 65 marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow cooked in the handi",
      api: "24eda3eb98824abd07a9552f9cffeb8d",
    },
    {
      name: "Chicken Hyderabadi Dum Biryani -[1 Kg] Serves 2-3",
      price: "Rs560 ",
      rating: "4.0(35)",
      description:
        "Serves 1 | 1kg contains 6 pcs fresh chicken are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow cooked in the handi.",
      api: "91a1a3aa8fd2c03443bedad1f8041e20",
    },
    {
      name: "Paneer Dum Biryani [1/2 Kg] Serves 1-2",
      price: "Rs360 ",
      rating: "3.9(55)",
      description:
        "Fresh Paneer pieces marinated in freshly ground BBK spices and layered with long grain Daawat basmati rice & Dum cooked in the handi. This paneer dum biryani is one of those meals that everyone in the family can agree on.",
      api: "fjuahmkmqwqarxzt98jp",
    },
    {
      name: "Non Veg Platter",
      price: "Rs460 ",
      rating: "4.6(85)",
      description:
        "Serves 4 | [3pcs] Mutton Galouti, [4pcs] Chicken Seekh Kebab, 5pcs Tawa Fish, [4pcs] Malai Garlic Tikka. Served with BBK Spicy Dip, Mint Chutney & Onion Salad. + 2 Complimentary Imli Adraki Lemonade.",
      api: "fa35638f43b16c5599157788e12a34f0",
    },
  ];
  return (
    <>
      <div className="menu ">
        {menu.map((link, index) => {
          return (
            <div className="menu-box">
            <div className="menu-items shadow-md" key={index}>
              <h2 className="flex items-center font-thin">
                <FaLocationArrow className="text-red-500" />
                bestseller
              </h2>

              <h1 className="font-normal text-lg">{link.name}</h1>
              <h3 className="font-semibold">{link.price}</h3>
              <h3 className="flex items-center">
                <FaRegStar className="text-green-500" />
                {link.rating}
              </h3>

              <h3 className="font-thin w-[60%]">{link.description}</h3>
            </div>
            <div className="w-[150px] ">
            <CardImage apiKey={link.api} />
            <div className="menu-btn">
              <button>ADD CART</button>
            </div>
          </div>
          </div>

          );
        })}
      </div>
    </>
  );
}
