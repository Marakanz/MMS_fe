import React from 'react'
import Food from '../../components/Food'

const Menu = () => {
    return (
        <div className='p-4'>
            <section className='grid grid-cols-3 gap-4'>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
                <Food/>
            </section>
        </div>
    )
}

export default Menu
