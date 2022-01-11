import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import blogReducer from "./slices/blogSlice";
import menuReducer from "./slices/menuSlice"


export default configureStore({
    reducer: {
        user: userReducer,
        blogs: blogReducer,
        menus: menuReducer
    },
})

// export let persistor = persistStore(store);
