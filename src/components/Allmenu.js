import React from 'react'
import Food from './Food'

const Allmenu = () => {
    return (
        <div className='spacing px-3 md:px-5 md:mx-4'>
            <div>
                <h1 className='subtitle text-center my-5'>See all foods on our Menu</h1>
                <section className='grid grid-cols-2 md:grid-cols-4 gap-4 my-5'>
                    <Food/>
                    <Food/>
                    <Food/>
                    <Food/>
                    <Food/>
                    <Food/>
                    <Food/>
                    <Food/>
                </section>
                <div className='flex items-center justify-center my-5'>
                    <button className='buttons text-xs'>SEE ALL</button>
                </div>
            </div>
        </div>
    )
}

export default Allmenu
