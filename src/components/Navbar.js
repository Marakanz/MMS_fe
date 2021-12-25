import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory().location.pathname.toLowerCase();
    return (
        <div>
            <nav className='navbar lg:flex shadow-md md:shadow-none items-center
            bg-white text-black'>

                <div className='nav-center  block text-xl px-4 lg:flex lg:justify-between items-center'>
                    <div className='flex items-center px-5 justify-between'>
                        <Link className='p-2' to='/'>MM's</Link>
                        <span onClick={() => setIsOpen(!isOpen)} className='p-2 lg:hidden cursor-pointer'>
                            <FaBars className='w-6 h-6'></FaBars>
                        </span>
                    </div>
                    <div className={`${isOpen ? 'text-lg  lg:w-2/5 lg:flex lg:items-center lg:justify-around'
                        : 'hidden text-lg lg:w-2/5 lg:flex lg:items-center lg:justify-around'}`}>
                        <ul className='tabs px-2 lg:flex lg:items-center'>
                            {history === "/" ? (
                                <>
                                    <Link to="/">
                                        <li className='py-2.5 px-4 mx-3 hover:bg-gray-100 md:border-b-4 border-orange'>
                                            Home
                                        </li>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/">
                                        <li className='py-2.5 px-4 mx-3 hover:bg-gray-100'>
                                            Home
                                        </li>
                                    </Link>
                                </>
                            )}
                            {history.includes("/posts") ? (
                                <>
                                    <Link to="/posts">
                                        <li className='py-2.5 px-4 mx-3 hover:bg-gray-100 md:border-b-4 border-orange'>
                                            Blog
                                        </li>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/posts">
                                        <li className='py-2.5 px-4 mx-3 hover:bg-gray-100'>
                                            Blog
                                        </li>
                                    </Link>
                                </>
                            )}

                            {history.includes("/menu") ? (
                                <>
                                    <Link to="/menu">
                                        <li className='py-2.5 px-4 mx-3 hover:bg-gray-100 md:border-b-4 border-orange'>
                                            Menu
                                        </li>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/menu">
                                        <li className='py-2.5 px-4 mx-3 hover:bg-gray-100'>
                                            Menu
                                        </li>
                                    </Link>
                                </>
                            )}

                        </ul>
                        <div className='flex justify-end px-4 py-2'>
                            <button className='text-white text-base buttons'>
                                <a href="#contact">CONTACT</a>
                            </button>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
