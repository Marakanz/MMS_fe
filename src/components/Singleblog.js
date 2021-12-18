import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Dish from "../images/dishes2.png"

const Singleblog = ({ blog }) => {
    return (
        <div>
            <div className='single-post hover:shadow-md'>
                <img src={blog.img} alt={blog.title} className='w-full h-2/3' />
                <div className=' grid items-center h-1/3 w-4/5 mx-auto p-4'>
                    <p className='text-base text-center text-gray-500 mb-1'>HEALTHY EATING</p>
                    <Link to={`/posts/${blog._id}`}>
                        <h1 className='text-2xl text-center font-semibold hover:text-orange'>{blog.title}</h1>
                    </Link>
                    <p className='text-sm text-right text-gray-500'>{moment(blog.created_at).format('MMMM Do YYYY')}</p>
                </div>
            </div>
        </div>
    )
}

export default Singleblog
