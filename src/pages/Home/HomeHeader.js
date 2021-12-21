import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from "../../images/landing.svg";

const HomeHeader = () => {
    return (
        <div className='md:flex flex-row-reverse md:w-9/10 md:mx-auto my-8'>
            <div className='flex justify-center md:justify-items-start md:w-1/2'>
                <img className='rounded-full landing-img' alt="landing" src={homeImg} />
            </div>
            <div className='md:w-1/2'>
                <div className='w-9/10 mx-auto'>
                    <h1 className='font-bold text-2xl text-center mb-3 pt-24 md:text-5xl md:text-left'>
                    <span className='text-orange'>Focus on</span> making memories and let us handle the food
                    </h1>
                    <p className='text-lg text-center md:text-left text-gray-700'>
                        Let us take care of your events, weddings, birthday parties, funeral, thanksgiving dinner etc.
                        We make different types of food in bulk, freshly prepared and ready to eat.
                    </p>
                    <div className='flex mt-12'>
                        <button className='buttons mr-6'>SEE OUR SERVICES</button>
                        <button className='buttons-invert'>
                            <a href="#contact">CONTACT US</a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeHeader
