import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Singleblog from '../../components/Singleblog';
import PostImg from "../../images/post.png"

const BlogPost = () => {
    return (
        <div>
            <Navbar/>
            <div className='p-12'>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <h1 className='subtitle font-2xl text-center'>How to eat Healthy without breaking the bank</h1>
                    <p className='text-sm text-gray-500 text-center'>Published 29th September, 2021</p>
                </div>
                <img src={PostImg} alt='post' className='w-full h-64 mb-12' />
                <div className='flex mb-16'>
                    <div className='w-1/6 flex pt-8 flex-col'>
                        <p className='text-base'>Share post</p>

                    </div>
                    <div className='p-8'>
                        <p className='text-base text-gray-400'>
                            Quam aliquam orci, amet feugiat aliquam pharetra. Neque, nibh accumsan ut nunc
                            eget lectus condimentum rhoncus ac. Urna, nisl gravida sit in ipsum elit etiam.
                            Et pulvinar euismod aliquam consequat. Amet facilisi cursus feugiat consequat excte
                            inevitablu muffin etiam le ankdn. id fringill ini amu condimentum tortor at quis. Ac
                            ipsum consectetur morbi id convallis Tempor volutpat metus mauris. Cursus egestas Quam
                            aliquam orci, amet feugiat aliquam pharetra. Neque, nibh accumsan ut nunc eget lectus quis
                            condimentum rhoncus ac. Urna, nisl gravidaimentum tortor at quis. Acipsu ipsum consectetur
                            morbi id convallis tempor volutpat metus mauris. Cursus egestas Quam aliquam orci, amet
                            feugiat aliquam pharetra. Neque, nibh accumsan ut nunc eget lectus condimentum rhoncus ac.
                            Urna, nisl gravida sit in ipsum elit etiam. Et pulvinar euismod aliquam consequat.
                        </p>
                    </div>
                </div>
                <h1 className='subtitle mb-8'>More Posts Like this</h1>
                <div className='grid md:grid-cols-3 gap-5'>
                    <Singleblog/>
                    <Singleblog/>
                    <Singleblog/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPost;
