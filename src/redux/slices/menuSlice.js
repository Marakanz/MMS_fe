import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name: "menus",
    initialState: {
        menus: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getMenuStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getMenuSuccess: (state, action) => {
            state.isFetching = false;
            state.menus = action.payload;
            state.error = false;
        },
        getMenuFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        createMenuStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        createMenuSuccess: (state, action) => {
            state.isFetching = false;
            state.menus.push(action.payload)
            state.error = false;
        },
        createMenuFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        }

    }
}) 

export const { getMenuStart, 
                getMenuFailure,
                getMenuSuccess,
                createMenuStart,
                createMenuFailure,
                createMenuSuccess
                 } = menuSlice.actions;
export default menuSlice.reducer;