import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from '../../redux/action'
import Sidenav from './Sidenav'
import Singleblog from '../../components/Singleblog'


const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const loading = useSelector((state) => state.blogs.isFetching);

    useEffect(() => {
        getBlogs(dispatch)
    }, [dispatch])

    return (
        <div className='py-8'>
            <div className='flex flex-wrap w-full p-8 justify-center items-center'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {blogs?.map((blog) => (
                        <Singleblog key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to="/admin/home/newblog">
                    <button className='buttons text-sm'>ADD NEW BLOG POST</button>
                </Link>
            </div>
        </div>
    )
}

export default Blogs
