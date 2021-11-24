import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state)=> {
            state.isFetching =true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        },
        LoginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
}) 

export const { loginStart, loginSuccess, LoginFailure } = userSlice.actions;
export default userSlice.reducers;