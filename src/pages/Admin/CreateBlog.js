import React from 'react'
import Form from './Form'
import Sidenav from './Sidenav'

const CreateBlog = () => {
    return (
        <section className='flex pl-4'>
            <Sidenav/>
            <div className='w-3/4 px-8 pt-20 pb-16'>
                <Form />
            </div>
        </section>
    )
}

export default CreateBlog
