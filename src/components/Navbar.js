import { Link } from 'react-router-dom';
import React from 'react';
import { useState,useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen ] = useState(false);
    return (
        <div>
            <nav className='navbar shadow lg:flex items-center
            bg-white text-black'>
                <div className='flex items-center px-5 justify-between'>
                        <a href="link">Navbar</a>
                        <button onClick={ () => setIsOpen(!isOpen)} className='p-2 border border-gray-400 shadow rounded-md lg:hidden focus:ring focus:ring-gray-400'>
                            <FaBars></FaBars>
                        </button>
                </div>
                <div className='nav-center block text-xl py-2 px-4 lg:flex lg:justify-end items-center'>
                    <div className={`${isOpen ? 'mx-4 text-lg  lg:w-2/5 lg:flex lg:items-center lg:justify-around' : 'px mx-4 hidden text-lg lg:w-2/5 lg:flex lg:items-center lg:justify-around'}`}>
                        <ul className='px-2 lg:flex lg:items-center'>
                            <li className='mx-4 py-1 hover:bg-gray-100'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='mx-4 py-1 hover:bg-gray-100'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li active className='mx-4 py-1 hover:bg-gray-100'>
                                <Link to='/posts'>Blog</Link>
                            </li>
                        </ul>
                        <button className='text-white text-xs font-semibold buttons'>CONTACT US</button>
                    </div>
            
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
