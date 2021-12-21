import React from 'react'

const Suggestion = () => {
    return (
        <div className='my-5 grid md:grid-cols-2 gap-4 w-9/10 mx-auto'>
            <div className='p-5'>
                <h1 className='subtitle mb-5 md:w-4/5 text-center'>See what our customers recommend for you.</h1>
            </div>
            <div className='rounded-lg p-4 flex items-end suggestion'>
                <div className='w-full text-white'>
                    <h1 className='subtitle mb-3'>Special Rice</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm w-4/6'>Perboiled rice sauted in shrimps, shredded beef, chicken, veggies..</p>
                        <button className='buttons rounded-xl font-semibold'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
