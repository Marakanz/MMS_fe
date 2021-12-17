import React from 'react'
import { Link } from 'react-router-dom'
import Dish from "../images/dishes2.png"

const Singleblog = ({ blog }) => {
    return (
        <div>
            <div className='single-post hover:shadow-md'>
                <img src={blog.img} className='w-full h-2/3' />
                <div className='flex items-center justify-center h-1/3'>
                    <div className='w-4/5'>
                        <p className='text-xs text-center text-gray-300 mb-1'>HEALTHY EATING</p>
                        <Link to={`/posts/${blog._id}`}>
                            <h1 className='text-center font-bold hover:text-yellow-300'>{blog.title}</h1>
                        </Link>
                        <p className='text-xs text-right text-gray-300'>{blog.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleblog
