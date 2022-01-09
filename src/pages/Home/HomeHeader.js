import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeImg from "../../images/landing.svg";

const opacityVariant = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 2
        }
    }
}
export const childVariant = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,

    }
}
const HomeHeader = () => {
    const [step, setStep] = useState(1)
    const word = [
        'food', 'event', 'ceremony', 'services', 'wedding', 'party'
    ]
    useEffect(() => {
        const changeTxt = setInterval(() => {
            setStep(step => step + 1)
        }, 3000);
        return () => clearInterval(changeTxt)
    }, [step])

    return (
        <motion.div
            variants={opacityVariant}
            initial="initial"
            animate="visible"
            className='md:flex flex-row-reverse md:w-9/10 md:mx-auto my-8'>
            <div className='flex justify-center md:justify-items-start md:w-1/2'>
                <img className='rounded-full landing-img' alt="landing" src={homeImg} />
            </div>
            <div className='md:w-1/2'>
                <div className='w-9/10 mx-auto'>
                    <h1 className='font-bold text-2xl text-center mb-3 pt-24 md:text-5xl md:text-left'>
                        <span className='text-orange'>Focus on</span> making memories and let us handle the {' '}
                        <motion.span
                            variants={childVariant}
                            exit={{ opacity: 0 }}
                            className='text-orange transform duration-300'>{word[step % word.length]}</motion.span>
                    </h1>
                    <p className='text-lg text-center md:text-left text-gray-700'>
                        Let us take care of your events, weddings, birthday parties, funeral, thanksgiving dinner etc.
                        We make different types of food in bulk, freshly prepared and ready to eat.
                    </p>
                    <div className='flex mt-12'>
                        <button className='buttons mr-6'>SEE OUR SERVICES</button>
                        <button className='buttons-invert'>
                            <a href="#contact">CONTACT US</a>
                        </button>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default HomeHeader
