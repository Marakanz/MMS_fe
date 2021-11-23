import React from 'react'

const Form = () => {
    return (
        <div>
            <form className="flex flex-col w-full">
                <h1 className='font-lg mb-3'>Title:</h1>
                <input className="w-full rounded-xl px-4 mb-4 border border-gray-300 py-1 font-lg"
                 type="text" 
                 placeholder=""/>
                 <h1 className='font-lg mb-3'>Upload cover photo (this photo will be visible only in the general blog page):</h1>
                 <input className="w-full rounded-xl border mb-4 border-gray-300 h-28" type="file"/>
                 <h1 className='font-lg mb-3'>Body (Max of 450 words):</h1>
                 <textarea className="w-full rounded-xl border mb-4 border-gray-300 h-36 font-base px-2"/>
                 <h1 className='font-lg mb-3'>Upload other photos/videos:</h1>
                 <input className="w-full rounded-xl border mb-4 border-gray-300 h-28" type="file"/> 
            </form>
        </div>
    )
}

export default Form
