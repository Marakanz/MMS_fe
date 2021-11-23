import React from "react";
import MenuItem from "../images/dishes2.png";

const Food = ({ items }) => {
  return (
    <div className="w-full bg-gradient-to-b px-3 py-3 rounded-lg from-yellow-300 menu-item">
      <div className="flex items-center justify-center">
        <img className=" menu-img rounded-full" alt="" src={items.img} />
      </div>
      <h1 className="font-bold text-center mb-3 text-xl">{items.name}</h1>
      <p className="text-sm mb-3 text-center">{items.description}</p>
    </div>
  );
};

export default Food;
