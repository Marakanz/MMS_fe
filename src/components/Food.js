import React from "react";
import MenuItem from "../images/dishes2.png";

const Food = ({ item }) => {
  return (
    <div className="w-full p-3 md:p-6 rounded-lg bg-opacity-30 menu-item">
      {item ? (
        <>
          <div className="flex items-center justify-center">
            <img className=" menu-img rounded-full" alt="" src={item.img} />
          </div>
          <h1 className="font-bold text-center text-xl my-3">{item.name}</h1>
          <p className="text-base text-center text-gray-700">{item.description}</p>
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
