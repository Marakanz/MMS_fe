import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory().location.pathname.toLowerCase();
    return (
        <div>
            <nav className='navbar lg:flex p-2 items-center
            bg-white text-black'>

                <div className='nav-center block text-xl px-4 lg:flex lg:justify-between items-center'>
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
                                    <li className='py-2.5 px-4 mx-3 hover:bg-gray-100 md:border-b-4 border-orange'>
                                        <button className="">
                                            <Link to='/'>Home</Link>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className='py-2.5 px-4 mx-3 hover:bg-gray-100'>
                                        <button className="active:bg-orange">
                                            <Link to='/'>Home</Link>
                                        </button>
                                    </li>
                                </>
                            )}
                            {history.includes("/posts") ? (
                                <>
                                    <li className='py-2.5 px-4 mx-3 hover:bg-gray-100 md:border-b-4 border-orange'>
                                        <button >
                                            <Link to='/posts'>Blog</Link>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className='py-2.5 px-4 mx-3 hover:bg-gray-100'>
                                        <button >
                                            <Link to='/posts'>Blog</Link>
                                        </button>
                                    </li>
                                </>
                            )}

                            {history.includes("/menu") ? (
                                <>
                                    <li className='py-2.5 px-4 mx-3 hover:bg-gray-100 md:border-b-4 border-orange'>
                                        <button >
                                            <Link to='/menu'>Menu</Link>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className='py-2.5 px-4 mx-3 hover:bg-gray-100'>
                                        <button >
                                            <Link to='/menu'>Menu</Link>
                                        </button>
                                    </li>
                                </>
                            )}

                        </ul>
                        <div className='flex justify-end px-4 py-2'>
                            <button className='text-white text-base font-semibold buttons'>
                                <a href="#contact">CONTACT US</a>
                            </button>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
