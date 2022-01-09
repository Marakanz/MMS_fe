import React from 'react'
import Sidenav from './Sidenav';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMenu } from '../../redux/action';

const CreateMenu = () => {
    const [ title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [ cat, setCat ] = useState("");
    const [img, setImg ] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMenu = new FormData();
        newMenu.append("name", title);
        newMenu.append("desc", desc);
        newMenu.append("category", cat);
        newMenu.append("image", img);
        createMenu(dispatch, newMenu);
    }
    return (
        <div className="flex">
            {/* <Sidenav/> */}
           <div className='w-full px-8 pt-20 pb-16'>
           <form className="flex flex-col w-full">
                <h1 className='font-lg mb-3'>Food name:</h1>
                <input className="w-full rounded-xl px-4 mb-4 border border-gray-300 py-1 font-lg"
                 type="text" 
                 onChange={(e) => setTitle(e.target.value)}
                 placeholder="Write something..."/>
                 <h1 className='font-lg mb-3'>Category:</h1>
                <input className="w-full rounded-xl px-4 mb-4 border border-gray-300 py-1 font-lg"
                 type="text" 
                 onChange={(e) => setCat(e.target.value)}
                 placeholder="category"/>
                 <h1 className='font-lg mb-3'>Description( max of 30 words):</h1>
                 <textarea 
                 className="w-full rounded-xl border mb-4 border-gray-300 h-36 font-base px-2"
                 onChange={(e) => setDesc(e.target.value)}
                 />
                 <h1 className='font-lg mb-3'>Upload photo:</h1>
                 <input 
                 className="w-full rounded-xl border mb-4 border-gray-300 h-28" 
                 type="file"
                 onChange={(e) => setImg(e.target.files[0])}/> 
                 <button 
                 type="submit" 
                 className="buttons"
                 onClick={(e) => handleSubmit(e)}> Create Menu</button>
            </form>
           </div>
        </div>
    )
}

export default CreateMenu;
