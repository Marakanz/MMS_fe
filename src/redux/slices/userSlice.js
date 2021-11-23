import { createSlice } from "@reduxjs/toolkit";

const loginStart = (state)=> {
    state.isFetching =true;
}
const loginSuccess =(state, action) => {
    state.isFetching = false;
    state.user = action.payload;
}
const LoginFailure = (state) => {
    state.isFetching = false;
    state.error = true;
}
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: loginStart(),
        loginSuccess: loginSuccess(),
        LoginFailure: LoginFailure()
    }
}) 