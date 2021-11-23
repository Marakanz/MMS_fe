import React from 'react'

const Suggestion = () => {
    return (
        <div className='my-5 grid md:grid-cols-2 gap-4 px-5 mx-4'>
            <div className='p-5'>
                <h1 className='subtitle mb-5 w-4/5'>See what our customers recommend for you.</h1>
            </div>
            <div className='mx-3 rounded-lg p-4 flex items-end suggestion'>
                <div className='w-full'>
                    <h1 className='subtitle mb-3'>Special Rice</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm w-4/6'>Perboiled rice sauted in shrimps, shredded beef, chicken, veggies..</p>
                        <button className='buttons text-xs'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
