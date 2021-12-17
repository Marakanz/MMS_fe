import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getBlogStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getBlogSuccess: (state, action) => {
            state.isFetching = false;
            state.blogs = action.payload;
            state.error = false;
        },
        getBlogFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        createBlogStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        createBlogSuccess: (state, action) => {
            state.isFetching = false;
            state.blogs.push(action.payload)
            state.error = false;
        },
        createBlogFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        }

    }
}) 

export const { getBlogStart, 
                getBlogFailure, 
                getBlogSuccess, 
                createBlogStart, 
                createBlogSuccess,
                createBlogFailure } = blogSlice.actions;
export default blogSlice.reducer;