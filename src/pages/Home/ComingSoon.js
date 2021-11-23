import React from 'react';
import Soon from "../../images/soon.png";

const ComingSoon = () => {
    return (
        <div className='md:flex mt-5 py-5 items-center justify-center coming-soon bg-red-100'>
            <div className='md:flex justify-center'>
                <img src={Soon} className='soon mx-5'/>
                <div className='px-5 flex items-center'>
                    <div >
                        <h1 className='mb-3 text-lg font-bold'>Lunch Packs coming soon</h1>
                        <p>Right now, we only take bulk orders on pre-order. but very soon
                           lunch packs will be available to purchase everyday! Stay tuned so you don’t miss out on this.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
