import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../images/facebook.svg";
import arrow from "../images/arrow.svg"
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import { FaUser } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-orange text-white'>
            <div className='footer-top border-b p-5  border-white grid md:grid-cols-2'>
                <div className='flex items-center mt-8 justify-center'>
                    <article className='mb-12 md:w-4/5'>
                        <p className='text-base'>
                            At MM'S Catering, we offer delicious african dishes, home delivery services,
                            parties, events and many more. Send us a message to get started.
                        </p>
                        <Link to="/admin">
                            <div className='flex items-center mt-8 hover:text-red-600'>
                                <p className='text-base mr-3'> Admin:</p>
                                <FaUser className='h-4 w-4'/>
                            </div>
                        </Link>
                    </article>
                </div>
                <div className='flex items-center justify-around'>
                    <div className='flex justify-center'>
                        <article>
                            <h3 className='text-sm mb-5 font-semibold capitalize'>FOLLOW US ON SOCIAL MEDIA</h3>
                            <div className='flex justify-center'>
                                <a href='https://instagram.com/mms.catering?utm_medium=copy_link'>
                                    <img src={instagram} alt="footer-img" className='h-6 w-6 mr-10' />
                                </a>
                                {/* <img src={twitter} alt="footer-img" className='h-6 w-6 mr-10' />
                                <img src={facebook} alt="footer-img" className='h-6 w-6 mr-10' /> */}
                            </div>
                        </article>
                    </div>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <img src={arrow} alt="arrow-img" className="h-32 w-32" />
                    </div>
                </div>
            </div>
            <div className='footer-b grid grid-cols-4'>
                <div className='flex items-center justify-center'>
                    <Link to="/">
                        <p className='text-sm font-semibold'>HOME</p>
                    </Link>
                </div>
                <div className='flex items-center justify-center'>
                    <Link to="/posts">
                        <p className='text-sm font-semibold'>BLOG</p>
                    </Link>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-sm font-semibold'>SERVICES</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button>
                        <a href='#contact' className='text-sm font-semibold'>CONTACT</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;
