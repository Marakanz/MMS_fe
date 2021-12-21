import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isFetching: false,
        error: false,
        isLoggedIn: false
    },
    reducers: {
        loginStart: (state)=> {
            state.isFetching =true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        LoginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.isLoggedIn = false;
        },
        registerStart: (state)=> {
            state.isFetching =true;
        },
        registerSuccess: (state) => {
            state.isFetching = false;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.isLoggedIn = false;
        }
    }
}) 

export const { 
    loginStart, 
    loginSuccess, 
    LoginFailure,
    registerFailure,
    registerStart,
    registerSuccess
  } = userSlice.actions;
export default userSlice.reducer;