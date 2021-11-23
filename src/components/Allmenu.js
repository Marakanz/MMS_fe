import axios from "axios";
import React, { useEffect, useState } from "react";
import Food from "./Food";

axios.defaults.baseURL = "https://mmskitchen.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const Allmenu = () => {
  const [menu, setMenu] = useState(null);
  console.log(menu);
  useEffect(() => {
    const fetchMenu = async () => {
      const res = await (await axios.get("/menus")).data;
      console.log(res);
      setMenu(res);
    };

    fetchMenu();
  }, []);
  if(!menu){
      return <div className='p-4 text-4xl animate-pulse'>Loading...</div>
  }
  return (
    <div className="spacing px-3 md:px-5 md:mx-4">
      <div>
        <h1 className="subtitle text-center my-5">See all foods on our Menu</h1>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
          {menu.map((item) => (
            <Food key={item._id} items={item} />
          ))}
          
        </section>
        <div className="flex items-center justify-center my-5">
          <button className="buttons text-xs">SEE ALL</button>
        </div>
      </div>
    </div>
  );
};

export default Allmenu;
