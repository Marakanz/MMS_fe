import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import blogReducer from "./slices/blogSlice";
import menuReducer from "./slices/menuSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: {
        user: persistedReducer,
        blogs: blogReducer,
        menus: menuReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);
