import axios from "axios";
import { publicRequest, userRequest } from "../utils";
import { getBlogFailure,
         getBlogStart,
         getBlogSuccess,
         createBlogStart,
         createBlogSuccess,
         createBlogFailure
     } from "./slices/blogSlice";
import { getMenuFailure,
        getMenuStart,
        getMenuSuccess,
        createMenuStart,
        createMenuSuccess,
        createMenuFailure
    } from "./slices/menuSlice";
import { loginStart, loginSuccess, LoginFailure } from "./slices/userSlice";

axios.defaults.baseURL = "https://mmskitchen.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// const token = localStorage.getItem("user");
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const tokenConfig = () => {
      // get token from localstorage
      const token = localStorage.getItem("user");
    
      //   if there's a token, add it to header
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    };


export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
            const res = await axios.post("/login", user);
            dispatch(loginSuccess(res.data));
            localStorage.setItem("user", res.data.token)
            console.log(res.data);
            
    } catch(err) {
        dispatch(LoginFailure());
    }
}
// BLOG ACTIONS
export const getBlogs = async(dispatch) => {
    dispatch(getBlogStart());
    try {
            const res = await publicRequest.get("/posts");
            dispatch(getBlogSuccess(res.data));
            console.log(res.data);
            
    } catch(err) {
        dispatch(getBlogFailure());
    }
}


export const createBlog = async(dispatch, newBlog) => {
    dispatch(createBlogStart());
    try {
            tokenConfig();
            const res = await axios.post("/posts", newBlog );
            dispatch(createBlogSuccess(res.data));
            console.log(res.data);
            console.log("New post created");
            
    } catch(err) {
        dispatch(createBlogFailure());
    }
}
//MENU ACTIONS
export const getMenus = async(dispatch) => {
    dispatch(getMenuStart());
    try {
            const res = await publicRequest.get("/menus");
            dispatch(getMenuSuccess(res.data));
            console.log(res.data);
            
    } catch(err) {
        dispatch(getMenuFailure());
    }
}
export const createMenu = async(dispatch, data) => {
    dispatch(createMenuStart());
    try {
            tokenConfig();
            const res = await axios.post("/menus", data );
            dispatch(createMenuSuccess(res.data));
            console.log(res.data);
            console.log("New Menu created");
            
    } catch(err) {
        dispatch(createMenuFailure());
    }
}

