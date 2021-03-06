import React, { useEffect, useState } from 'react';
import { useRouteMatch, Route, Link, Switch, Redirect } from "react-router-dom";
import Blogs from './Blogs';
import Menu from './Menu';
import Sidenav from './Sidenav';
import CreateBlog from './CreateBlog';
import CreateMenu from './CreateMenu';
import Login from './Login';
import { useSelector } from 'react-redux';
import Register from './Register';
import Home from './Home';

const Admin = () => {
    let { path } = useRouteMatch();
    const user = useSelector((state) => state.user.isLoggedIn);
    console.log(user);
    return (
        <div className='h-screen'>
            <Switch>
                <Route exact path={`${path}`}>
                    { user ? <Redirect to={`${path}/home`}/> : <Login/> }
                </Route>
                <Route path={`${path}/register`} component={Register} />
                <Route path={`${path}/home`}>
                    <Home/>
                </Route>
            </Switch>
        </div>
        // <div className='flex'>
        //     <div className='hidden md:block w-1/3'>
        //         <Sidenav />
        //     </div>
        //     <div className="w-full">
        //         <Switch>
        //             <Route exact path={`${path}`}>
        //                 {user ? <Redirect to={`${path}/blogs`} /> : <Login />}
        //             </Route>
        //             <Route path={`${path}/register`} component={Register} />
        //             <Route path={`${path}/blogs`} component={Blogs} />
        //             <Route exact path={`${path}/newblog`} component={CreateBlog} />
        //             <Route path={`${path}/menu`} component={Menu} />
        //             <Route path={`${path}/newmenu`} component={CreateMenu} />
        //         </Switch>
        //     </div>
        // </div>
    )
}

export default Admin;
