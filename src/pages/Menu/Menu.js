import axios from 'axios'
import React, { useEffect } from 'react'
import Food from '../../components/Food'
import Navbar from '../../components/Navbar'
import { BASE_URL } from '../../utils'

const MenuPage = () => {
    const fetchMenu = async() => {
        const res = await axios.get(`${BASE_URL}/menus`); 
        console.log(res.data)
    }

    fetchMenu();
    return (
        <div>
            <Navbar/>
            <h1 className='subtitle md:text-xl font-bold my-12 text-center'>Our Menu</h1>
            <div className='flex mb-4 items-center justify-end'>
                <button className='buttons'>Sort</button>
            </div>
            <div className='grid md:grid-cols-4 gap-5 px-5'>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
            </div>
        </div>
    )
}

export default MenuPage
