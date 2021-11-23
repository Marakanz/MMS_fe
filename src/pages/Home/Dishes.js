import React from 'react';
import Dish from "../../images/dishes1.png";

const Dishes = () => {
    return (
        <div className='w-full'>
            <img className='dish mb-4' src={Dish}/>
            <h1 className='font-bold mb-3 text-xl'> Local dishes</h1>
            <p className='text-sm mb-3'>Different types of local delicacies prepared just for you</p>
        </div>
    )
}

export default Dishes
