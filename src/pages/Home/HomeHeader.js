import React from 'react';
import homeImg from "../../images/landing.png";

const HomeHeader = () => {
    return (
        <div className='md:flex '>
            <div className='md:w-1/2 flex items-center justify-center'>
                <div className='w-3/4'>
                    <h1 className='font-bold mb-3 text-3xl'>Order <span className='text-yellow-400'>Delicious</span> and Fresh meals anytime</h1>
                    <p className='text-base mb-5'>
                        Let us take care of your events, weddings, birthday parties, funeral, thanksgiving dinner etc.
                        We make different types of food in bulk, freshly prepared and ready to eat.
                    </p>
                    <div className='flex'>
                        <button className='buttons text-xs mr-3'>SEE OUR SERVICES</button>
                        <button className='buttons-invert text-xs'>CONTACT US</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img className='rounded-full landing-img' alt="landing" src={homeImg}/>
            </div>
        </div>
    )
}

export default HomeHeader
