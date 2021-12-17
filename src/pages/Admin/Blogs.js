import React from 'react'
import { Link } from 'react-router-dom'
import Sidenav from './Sidenav'

const Blogs = () => {
    return (
        <div className='flex pl-4'>
            <Sidenav/>
            <div className='flex w-full p-8 justify-center items-center'>
                <div className=''>
                    <h1 className='font-lg mb-6 font-semibold'>There are currently no Blog Entries</h1>
                    <div className='flex justify-center'>
                        <Link to="/admin/newblog">
                            <button className='buttons text-sm'>ADD NEW BLOG POST</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
