import React from 'react';
import Soon from "../../images/soon.png";

const ComingSoon = () => {
    return (
        <div className='md:flex mt-5 py-16 items-center justify-center coming-soon'>
            <div className='grid md:grid-cols-2 gap-5 w-9/10 mx-auto'>
                <div>
                <img src={Soon} alt='' className='mx-5'/>
                </div>
                
                <div className='p-5'>
                    <div >
                        <h1 className='mb-3 text-4xl font-bold'>Lunch Packs coming soon</h1>
                        <p className='text-xl text-gray-700'>Right now, we only take bulk orders on pre-order. but very soon
                           lunch packs will be available to purchase everyday! Stay tuned so you don’t miss out on this.</p>
                    </div>
                    <button className='buttons-invert text-lg font-semibold mt-12'>
                    Be the first to know
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
