import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Navbar from './components/Navbar';
import Admin from "./pages/Admin/Index";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Home from "./pages/Home/Home";
import MenuPage from "./pages/Menu/Menu";


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
          <Route path="/menu" component={MenuPage}/>
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
