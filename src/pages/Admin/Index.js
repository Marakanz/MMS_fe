import React from 'react';
import { useRouteMatch, Route, Link, Switch } from "react-router-dom";
import Blogs from './Blogs';
import Menu from './Menu';
import Sidenav from './Sidenav';
import CreateBlog from './CreateBlog';
import CreateMenu from './CreateMenu';

const Admin = () => {
    let { path } = useRouteMatch();
    return (
        <div className='flex pl-6'>
            <Sidenav/> 
            <Switch>
                <Route path={`${path}/blogs`} component={Blogs}/>
                <Route exact path={`${path}/newpost`} component={CreateBlog}/>
                <Route path={`${path}/menu`} component={Menu}/>
                <Route path={`${path}/newmenu`} component={CreateMenu}/>
            </Switch>
        </div>
    )
}

export default Admin;
