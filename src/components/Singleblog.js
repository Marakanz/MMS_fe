import React from 'react'
import Dish from "../images/dishes2.png"

const Singleblog = () => {
    return (
        <div>
            <div className='single-post'>
                <img src={Dish} className='w-full h-2/3'/>
                <div className='flex items-center justify-center h-1/3'>
                    <div className='w-4/5'>
                        <p className='text-xs text-center text-gray-300 mb-1'>HEALTHY EATING</p>
                        <h1 className='text-center font-bold'>How to eat healthy without breaking the bank.</h1>
                        <p className='text-xs text-right text-gray-300'>August 2021. 2 mins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleblog
