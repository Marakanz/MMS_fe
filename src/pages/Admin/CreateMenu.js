import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { tokenConfig } from '../../redux/action';
import ClipLoader from "react-spinners/ClipLoader";
import { 
    createMenuStart,
    createMenuSuccess,
    createMenuFailure
} from "../../redux/slices/menuSlice"

const CreateMenu = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");
    const [img, setImg] = useState(null);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.menus.isFetching)
    const error = useSelector((state) => state.menus.error);
    const history = useHistory();

    const createMenu = async(dispatch, data) => {
        dispatch(createMenuStart());
        try {
                tokenConfig();
                const res = await axios.post("/menus", data );
                dispatch(createMenuSuccess(res.data));
                console.log(res.data);
                history.push("/admin/home/menu");
                console.log("New Menu created");
                
        } catch(err) {
            dispatch(createMenuFailure());
        }
    }

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
                        placeholder="Write something..." />
                    <h1 className='font-lg mb-3'>Category:</h1>
                    <input className="w-full rounded-xl px-4 mb-4 border border-gray-300 py-1 font-lg"
                        type="text"
                        onChange={(e) => setCat(e.target.value)}
                        placeholder="category" />
                    <h1 className='font-lg mb-3'>Description( max of 30 words):</h1>
                    <textarea
                        className="w-full rounded-xl border mb-4 border-gray-300 h-36 font-base px-2"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <h1 className='font-lg mb-3'>Upload photo:</h1>
                    <input
                        className="w-full rounded-xl border mb-4 border-gray-300 h-28"
                        type="file"
                        accept='image/*'
                        onChange={(e) => setImg(e.target.files[0])} />
                    <button
                        type="submit"
                        className="buttons"
                        onClick={(e) => handleSubmit(e)}> Create Menu</button>
                    {loading && (
                        <div className='flex justify-center'>
                            <ClipLoader
                                color='#F8650A'
                                loading={loading}
                                size={100}
                            />
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default CreateMenu;
