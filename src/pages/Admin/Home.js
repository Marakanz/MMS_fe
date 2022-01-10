import React, { useEffect, useState } from 'react';
import { useRouteMatch, Route, Link, Switch, Redirect } from "react-router-dom";
import Blogs from './Blogs';
import Menu from './Menu';
import Sidenav from './Sidenav';
import CreateBlog from './CreateBlog';
import CreateMenu from './CreateMenu';
import { FaBars } from 'react-icons/fa';

const Home = () => {
    let { path } = useRouteMatch();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex'>
            <div className={isOpen ? 'w-max z-10 transition duration-500' : 'w-0 hidden md:w-max z-10 transition duration-500'}>
                <Sidenav open={isOpen}/>
            </div>
            <div className='w-full'>
                <div className='p-4 bg-white border-b border-gray-400 sticky top-0 md:hidden'>
                    <span onClick={() => setIsOpen(!isOpen)}>
                        <FaBars className='w-8 h-8'/>
                    </span>
                </div>
                <div className='flex'>
                    <div className="w-full">
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Redirect to={`${path}/blogs`} />
                            </Route>
                            <Route path={`${path}/blogs`} component={Blogs} />
                            <Route exact path={`${path}/newblog`} component={CreateBlog} />
                            <Route path={`${path}/menu`} component={Menu} />
                            <Route path={`${path}/newmenu`} component={CreateMenu} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
