import React from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import profilePic from "../../images/profile-pic.png"
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Sidenav = ({open}) => {
    const user = useSelector((state) => state.user.user);
    const history = useHistory().location.pathname.toLowerCase();
    const path = useRouteMatch().path;
    console.log(path);

    return (
        <div className={ open ? 'sidenav w-full border-r border-gray-300' :
            'sidenav w-full border-r border-gray-300 '}>
            {user ? (
                <>
                    <div className='md:flex items-center mb-8'>
                        <img src={profilePic} className='h-12 w-12' />
                        <div className='ml-3 profile-info'>
                            <p className='font-base mb-1'>{user.username}</p>
                            <p className='text-xs text-gray-400'>{user.email}</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='flex items-center mb-8'>
                        <img src={profilePic} className='h-12 w-12' />
                        <div className='ml-3 profile-info'>
                            <p className='font-base mb-1'>Jane douglas</p>
                            <p className='text-xs text-gray-400'>janedouglas@gmail.com</p>
                        </div>
                    </div>
                </>
            )}

            <div className='block'>
                <ul>
                    {
                        history.includes("/blogs") ? (
                            <>
                                <div className='w-full mb-2 bg-orange py-2 px-3 rounded-r-full text-white'>
                                    <Link to={`/admin/home/blogs`} >
                                        <li className='w-full text-black'>Blogs</li>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='w-full mb-2 py-2 px-3 rounded-r-full text-white'>
                                    <Link to={`/admin/home/blogs`} >
                                        <li className='w-full text-black'>Blogs</li>
                                    </Link>
                                </div>
                            </>
                        )
                    }

                    {
                        history.includes("/menu") ? (
                            <>
                                <div className='w-full bg-orange mb-2 py-2 px-3 rounded-r-full text-white'>
                                    <Link to="/admin/home/menu">
                                        <li className='w-full text-black'>Food Menu</li>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='w-full mb-2 py-2 px-3 rounded-r-full text-white'>
                                    <Link to="/admin/home/menu">
                                        <li className='w-full text-black'>Food Menu</li>
                                    </Link>
                                </div>
                            </>
                        )
                    }

                    <div className='w-full active:bg-yellow-400 mb-2 py-2 px-3 rounded-r-full text-white'>
                        <Link>
                            <li className='w-full text-black'>Direct messages</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav

