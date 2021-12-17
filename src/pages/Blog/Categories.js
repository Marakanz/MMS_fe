import React from 'react'

const Categories = () => {
    return (
        <div className='my-12'>
            <h1 className='subtitle mb-7'>Categories</h1>
            <div className='grid md:grid-cols-2 gap-4 md:h-96'>
                <div className='flex flex-col justify-end p-4 text-white recipe1'>
                    <h1 className='subtitle mb-3'>Recipes and Meal Prep</h1>
                    <p className='font-sm'>Learn how to make your favorite dishes, both local and intercontinental 
                        delicacies and how to preserve and present food too.</p>
                </div>
                <div className='grid md:grid-rows-2 gap-4 h-full'>
                    <div className='flex flex-col justify-end p-4 text-white recipe2'>
                        <h1 className='subtitle mb-3'>Healthy Eating</h1>
                        <p className='font-sm'>See different foods you can eat to loose or gain weight. 
                            learn how to calculate yor daily calorie intake.</p>
                    </div>
                    <div className='flex flex-col justify-end p-4 text-white recipe3 '>
                        <h1 className='subtitle mb-3'>Sweet Tooth</h1>
                        <p className='font-sm'>See different foods you can eat to loose or gain weight. 
                            learn how to calculate yor daily calorie intake.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
