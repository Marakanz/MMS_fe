import React from 'react'
import { Link, useRouteMatch} from 'react-router-dom';
import profilePic from "../../images/profile-pic.png"

const Sidenav = () => {
    const path = useRouteMatch();
    return (
        <div className='w-1/4 sidenav py-20 border-r border-gray-300'>
            <div className='flex items-center mb-8'>
                <img src={profilePic} className='h-12 w-12' />
                <div className='ml-3 profile-info'>
                    <p className='font-base mb-1'>Jane douglas</p>
                    <p className='text-xs text-gray-400'>janedouglas@gmail.com</p>
                </div>
            </div>

            <div className='block'>
                <ul>
                    <div className='w-full mb-2 bg-yellow-400 py-2 px-3 rounded-r-full text-white'>
                        <Link to="/admin/blogs" >
                            <li className='w-full text-black'>Blogs</li>
                        </Link>
                    </div>
                    <div className='w-full active:bg-yellow-400 mb-2 py-2 px-3 rounded-r-full text-white'>
                        <Link to="/admin/menu">
                            <li className='w-full text-black'>Food Menu</li>
                        </Link>
                    </div>
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

