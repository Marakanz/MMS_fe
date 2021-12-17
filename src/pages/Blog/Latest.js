import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Singleblog from '../../components/Singleblog';
import { getBlogs } from '../../redux/action';

const Latest = () => {
    const dispatch  = useDispatch();
    const blogs = useSelector((state)=> state.blogs.blogs)

    useEffect(()=>{
        getBlogs(dispatch)
    },[dispatch])

    return (
        <div className='my-8'>
            <h1 className='subtitle mb-7'>Latest Posts</h1>
            <div className='grid md:grid-cols-3 gap-5'>
                { blogs?.map((blog)=>(
                    <>
                        <Singleblog key={blog._id} blog={blog}/>
                    </>
                ))}
                {/* <Singleblog/>
                <Singleblog/> */}
            </div>
        </div>
    )
}

export default Latest
