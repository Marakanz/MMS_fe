import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Admin from "./pages/Admin/Index";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="body">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/posts">
            <Blog/>
          </Route>
          <Route path="/posts/:postId">
            <BlogPost/>
          </Route>
          <Route path="/admin/:userId">
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
