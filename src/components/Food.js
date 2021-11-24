import React from "react";
import MenuItem from "../images/dishes2.png";

const Food = ({ item }) => {
  return (
    <div className="w-full bg-gradient-to-b px-3 py-3 rounded-lg from-yellow-300 menu-item">
      {item ? (
        <>
          <div className="flex items-center justify-center">
            <img className=" menu-img rounded-full" alt="" src={item.img} />
          </div>
          <h1 className="font-bold text-center mb-3 text-xl">{item.name}</h1>
          <p className="text-sm mb-3 text-center">{item.description}</p>
        </>
      ) : (
        <>
          {/* <div className="flex items-center justify-center">
            <img className=" menu-img rounded-full" alt="" src={MenuItem} />
          </div>
          <h1 className="font-bold text-center mb-3 text-xl">Jollof Rice</h1>
          <p className="text-sm mb-3 text-center"> Rice boiled with tomatoes, pepper, and delicious spices</p> */}
        </>
      )}
    </div>
  );
};

export default Food;
