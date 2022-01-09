import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Food from "./Food";
import ClipLoader from "react-spinners/ClipLoader";

axios.defaults.baseURL = "https://mmskitchen.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const Allmenu = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(menu);
  useEffect(() => {
    const fetchMenu = async () => {
      const res = await (await axios.get("/menus")).data;
      console.log(res);
      setLoading(true);
      setMenu(res.slice(0,4));
    };

    fetchMenu();
  }, []);
  if (!menu) {
    return <div className='flex flex-col md:flex-row items-center justify-center'>
    <ClipLoader
        color='#F8650A'
        loading={loading}
        size={200} />
</div>
  }
  return (
    <div className="py-8 w-9/10 mx-auto">
      <div>
        <div className='md:w-2/3 my-12 mx-auto'>
          <h1 className="subtitle text-center my-5">See all foods on our Menu</h1>
          <p className='text-gray-700 text-center text-xl my-2'>
            MM Catering offers the best catering services.
            we make our meals from carefully selected ingredients with rich taste. You can proceed to make bulk orders.
          </p>
        </div>

        <section className="grid md:grid-cols-4 gap-6 my-5">
          {menu.map((item) => (
            <Food key={item._id} item={item} />
          ))}
        </section>
        <div className="flex items-center justify-center my-5">
          <Link to="/menu">
            <button className="buttons hover:shadow-md font-semibold">SEE ALL</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Allmenu;
