import React from 'react';
import Dish from "../images/dishes2.png";
import { useEffect } from 'react';
import Singleblog from './Singleblog';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from "../redux/action";

const Articles = () => {
    const dispatch  = useDispatch();
    const blogs = useSelector((state)=> state.blogs.blogs)

    useEffect(()=>{
        getBlogs(dispatch)
    },[dispatch])
    return (
        <div className='w-9/10 mx-auto'>
            <div className='flex my-12 items-center justify-center '>
                <p className='subtitle w-2/3 text-center'>If you love food, you shouldn't miss out on our articles</p>
            </div>
            <div className='grid md:grid-cols-3 gap-8'>
                {blogs?.map((blog)=> (
                    <>
                        <Singleblog blog={blog}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Articles
