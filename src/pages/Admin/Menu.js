import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Food from '../../components/Food'
import Sidenav from './Sidenav'
import { publicRequest } from '../../utils'

const Menu = () => {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        const fetchMenu = async () => {
            const res = await publicRequest.get('/menus');
            console.log(res.data)
            setMenu(res.data)
        }

        fetchMenu();
    }, [])
    return (
        <div>
            <div className=' flex pl-4'>
                <Sidenav />
                <div className='w-3/4'>
                    <section className='p-4 grid md:grid-cols-4 gap-4'>
                        {menu?.map((item) => (
                            <Food item={item} />
                        ))}
                    </section>
                    <div className='flex justify-center my-6'>
                        <Link to="/admin/newmenu">
                            <button className='buttons text-sm'>ADD NEW MENU</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
