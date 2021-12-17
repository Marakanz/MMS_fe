import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../redux/action';


const Form = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost  =  new FormData();
        newPost.append("title", title);
        newPost.append("body", body)
        newPost.append('image', file);
        console.log(newPost);
        createBlog(dispatch, newPost);
    }
    return (
        <div>
            <form encType="multipart/form-data" className="flex flex-col w-full">
                <h1 className='font-lg mb-3'>Title:</h1>
                <input className="w-full rounded-xl px-4 mb-4 border border-gray-300 py-1 font-lg"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Write something..." />
                <h1 className='font-lg mb-3'>Upload cover photo (this photo will be visible only in the general blog page):</h1>
                <input
                    className="w-full rounded-xl border mb-4 border-gray-300 h-28"
                    type="file"
                    name="blog-image"
                    onChange={(e) => setFile(e.target.files[0])} />
                <h1 className='font-lg mb-3'>Body (Max of 450 words):</h1>
                <textarea
                    className="w-full rounded-xl border mb-4 border-gray-300 h-36 font-base px-2"
                    onChange={(e) => setBody(e.target.value)}
                />
                <h1 className='font-lg mb-3'>Upload other photos/videos:</h1>
                <input
                    className="w-full rounded-xl border mb-4 border-gray-300 h-28"
                    type="file"
                />
                <button type="submit" className="buttons" onClick={(e) => handleSubmit(e)}> Create post</button>
            </form>
        </div>
    )
}

export default Form
