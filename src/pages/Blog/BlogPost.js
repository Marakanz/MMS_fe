import React, { useState } from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Singleblog from '../../components/Singleblog';
import PostImg from "../../images/post.png"
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from "../../redux/action"
import { publicRequest } from '../../utils';

const BlogPost = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const location = useLocation();
    const blogId = location.pathname.split("/")[2];
    const singleBlog = useSelector((state) => state.blogs.blogs.find(blog=> blog._id === blogId));
    console.log(singleBlog);

    useEffect(() => {
        getBlogs(dispatch)
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <div className='p-12'>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <h1 className='subtitle font-2xl text-center'>{singleBlog.title}</h1>
                    <p className='text-sm text-gray-500 text-center'>{singleBlog.createdAt}</p>
                </div>
                <img src={singleBlog.img} alt='post' className='w-full h-64 mb-12 object-cover' />
                <div className='flex mb-16'>
                    <div className='w-1/6 flex pt-8 flex-col'>
                        <p className='text-base'>Share post</p>

                    </div>
                    <div className='p-8'>
                        <p className='text-base text-gray-400'>
                            {singleBlog.body}
                        </p>
                    </div>
                </div>
                <h1 className='subtitle mb-8'>More Posts Like this</h1>
                <div className='grid md:grid-cols-3 gap-5'>
                    {blogs?.map((blog) => (
                        <>
                            <Singleblog blog={blog} />
                        </>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPost;
