import React from 'react';
import MenuItem from "../images/dishes2.png"

const Food = () => {
    return (
        <div className='w-full bg-gradient-to-b py-3 rounded-lg from-yellow-300 menu-item'>
            <div className='flex items-center justify-center'>
                <img className=' menu-img rounded-full' src={MenuItem} />
            </div>
            <h1 className='font-bold text-center mb-3 text-xl'> Turkey Stew</h1>
            <p className='text-sm mb-3 text-center'>Bolied turkey cooked in
        the blended mix of tomatoes and pepper spices.</p>
        </div>
    )
}

export default Food;
