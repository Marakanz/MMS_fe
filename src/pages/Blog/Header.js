import React from 'react';
import HeaderImg from "../../images/header.svg";

const Header = () => {
    return (
        <div className='grid p-3 md:flex flex-row-reverse justify-around bg-red-200'>
            <div className='flex'>
                <img src={HeaderImg} className='w-full h-full'/>
            </div>
            <div className='flex items-center justify-center pl-4 mx-2'>
                <div>
                    <h1 className='subtitle text-yellow-900 mb-3'>Read and Enjoy our Articles</h1>
                    <p className='text-sm'>Read & Enjoy Our Articles Learn how to make your favorite dishes, 
                       food that is good and bad for your health and also try out new delicacies!</p>
                    <button className='buttons text-xs mt-5'>SEE ALL BLOGS</button>
                </div>
            </div>
        </div>
    )
}

export default Header
