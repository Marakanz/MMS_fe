import React from 'react';
import Dish from "../images/dishes2.png"
import Singleblog from './Singleblog';

const Articles = () => {
    return (
        <div className='px-3 md:px-8 md:mx-5'>
            <div className='flex h-28 items-center justify-center '>
                <p className='subtitle text-center'>If you love food, you shouldn't miss out on our articles</p>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                <Singleblog/>
                <Singleblog/>
                <Singleblog/>
            </div>
        </div>
    )
}

export default Articles
