import React from 'react';
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

const Footer = () => {
    return (
        <div className='bg-yellow-400 text-white'>
            <div className='footer-top border-b p-5  border-white grid grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <article className='w-4/5'>
                        <p className='text-sm'>
                            At MM Catering, we egestas Quam aliquam orci,
                            amet feugiat aliquam pharetra. Neque, nibh accumsan ut nunc eget lectus
                            condimentum rhoncus ac. Urna, nisl gravida sit in ipsum elit etiam. Et pulvinar
                            euismod aliquam consequat.
                        </p>
                    </article>

                </div>
                <div className='flex items-center justify-center'>
                    <article>
                        <h3 className='text-sm mb-5 capitalize'>FOLLOW US ON SOCIAL MEDIA</h3>
                        <div className='flex'>
                            <img src={facebook} className='h-6 w-6 mr-5' />
                            <img src={instagram} className='h-6 w-6 mr-5' />
                            <img src={twitter} className='h-6 w-6 mr-5' />
                        </div>
                    </article>
                </div>
            </div>
            <div className='footer-b grid grid-cols-4'>
                <div className='flex items-center'>
                    <p className='text-sm'>HOME</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-sm'>BLOG</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-sm'>SERVICES</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-sm'>CONTACT</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
