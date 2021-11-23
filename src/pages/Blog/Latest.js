import React from 'react';
import Singleblog from '../../components/Singleblog';

const Latest = () => {
    return (
        <div className='my-8'>
            <h1 className='subtitle mb-7'>Latest Posts</h1>
            <div className='grid md:grid-cols-3 gap-5'>
                <Singleblog/>
                <Singleblog/>
                <Singleblog/>
                <Singleblog/>
                <Singleblog/>
                <Singleblog/>
            </div>
        </div>
    )
}

export default Latest
