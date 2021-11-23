import React from 'react'
import Food from '../../components/Food'

const Menu = () => {
    return (
        <div className='p-4'>
            <section className='grid md:grid-cols-4 gap-4'>
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
