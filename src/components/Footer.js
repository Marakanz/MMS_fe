import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../images/facebook.svg";
import arrow from "../images/arrow.svg"
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

const Footer = () => {
    return (
        <div className='bg-orange text-white'>
            <div className='footer-top border-b p-5  border-white grid md:grid-cols-2'>
                <div className='flex items-center mt-8 justify-center'>
                    <article className='mb-12 md:w-4/5'>
                        <p className='text-base'>
                            At MM Catering, we egestas Quam aliquam orci,
                            amet feugiat aliquam pharetra. Neque, nibh accumsan ut nunc eget lectus
                            condimentum rhoncus ac. Urna, nisl gravida sit in ipsum elit etiam. Et pulvinar
                            euismod aliquam consequat.
                        </p>
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
                    <div>
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
