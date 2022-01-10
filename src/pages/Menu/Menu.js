import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Food from '../../components/Food'
import Navbar from '../../components/Navbar'

const MenuPage = () => {
    axios.defaults.baseURL = "https://mmskitchen.herokuapp.com";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const [ menu, setMenu ] = useState(null);
    useEffect(() => {
        const fetchMenu = async() => {
            const res = await axios.get('/menus');
            console.log(res.data)
            setMenu(res.data)
        }
    
        fetchMenu();
    }, [])
    
    return (
        <div>
            <Navbar/>
            <h1 className='subtitle md:text-xl font-bold my-12 text-center'>Our Menu</h1>
            <div className='flex mb-4 items-center justify-end'>
                <button className='buttons'>Sort</button>
            </div>
            <div className='grid gap-3 md:grid-cols-4 md:gap-5 px-5'>
                { menu?.map((item) => (
                    <Food item={item}/>
                ))}
            </div>
        </div>
    )
}

export default MenuPage
