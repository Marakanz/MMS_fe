import React from 'react'
import Footer from '../../components/Footer'
import { Link} from "react-router-dom";
import BlogPost from './BlogPost';
import Header from './Header';
import Categories from './Categories';
import Latest from './Latest';
import Navbar from '../../components/Navbar';

const Blog = () => {
    return (
        <div className=''>
            <Navbar/>
            <div className='px-4 md:px-12 mt-5 pt-5 mb-16'>
                <Header/>
                <Categories/>
                <Latest/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
