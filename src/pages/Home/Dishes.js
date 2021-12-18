import React from 'react';
import Dish1 from "../../images/dishes1.png";
import Dish2 from "../../images/dishes2.png";
import Dish3 from "../../images/dishes3.png";

const Dishes = ({dish}) => {
    return (
        <div className='w-full'>
            <img className='' alt='' src={dish.img}/>
            <h1 className='font-bold my-3 md:text-2xl'> {dish.title}</h1>
            <p className='my-3 text-lg text-gray-700'>{dish.desc}</p>
        </div>
    )
}

export default Dishes
