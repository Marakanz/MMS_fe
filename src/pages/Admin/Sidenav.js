import React from 'react'
import { Link } from 'react-router-dom';
import profilePic from "../../images/profile-pic.png"

const Sidenav = () => {
    return (
        <div className='w-1/4 sidenav py-20 border-r border-gray-300'>
            <div className='flex items-center mb-8'>
                <img src={profilePic} className='h-12 w-12'/>
                <div className='ml-3 profile-info'>
                    <p className='font-base mb-1'>Jane douglas</p>
                    <p className='text-xs text-gray-400'>janedouglas@gmail.com</p>
                </div>
            </div>

            <div className='block'>
                <ul>
                    <div className='w-full mb-2 bg-yellow-400 py-2 px-3 rounded-r-full text-white'>
                        <li className='w-full text-black'>Blogs</li>
                    </div>
                    <div className='w-full active:bg-yellow-400 mb-2 py-2 px-3 rounded-r-full text-white'>
                        <li className='w-full text-black'>Blogs</li>
                    </div>
                    <div className='w-full active:bg-yellow-400 mb-2 py-2 px-3 rounded-r-full text-white'>
                        <li className='w-full text-black'>Blogs</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav

