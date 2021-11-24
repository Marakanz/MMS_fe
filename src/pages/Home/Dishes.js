import React from 'react';
import Dish1 from "../../images/dishes1.png";
import Dish2 from "../../images/dishes2.png";
import Dish3 from "../../images/dishes3.png";

const Dishes = ({dish}) => {
    return (
        <div className='w-full'>
            <img className='dish mb-4' src={dish.img}/>
            <h1 className='font-bold mb-3 text-xl'> {dish.title}</h1>
            <p className='text-sm mb-3'>{dish.desc}</p>
        </div>
    )
}

export default Dishes
