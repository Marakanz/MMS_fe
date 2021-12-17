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
        }
    }
}) 

export const { loginStart, loginSuccess, LoginFailure } = userSlice.actions;
export default userSlice.reducer;