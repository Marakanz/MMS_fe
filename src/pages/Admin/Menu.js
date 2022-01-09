import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Food from '../../components/Food'
import Sidenav from './Sidenav'
import { publicRequest } from '../../utils'
import ClipLoader from "react-spinners/ClipLoader";

const Menu = () => {
    const [menu, setMenu] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMenu = async () => {
            const res = await publicRequest.get('/menus');
            setLoading(false);
            setMenu(res.data);
        }

        fetchMenu();
    }, [])
    if (!menu) {
        return <div className='h-screen w-full flex flex-col md:flex-row items-center justify-center'>
            <ClipLoader
                color='#F8650A'
                loading={loading}
                size={200} />
        </div>
    }
    return (
        <div>
            <div className=' flex'>
                <div className='mx-auto w-full'>
                    <section className='p-4 grid md:grid-cols-3 gap-4'>
                        {menu?.map((item) => (
                            <Food key={item._id} item={item} />
                        ))}
                    </section>
                    <div className='flex justify-center my-6'>
                        <Link to="/admin/home/newmenu">
                            <button className='buttons text-sm'>ADD NEW MENU</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
