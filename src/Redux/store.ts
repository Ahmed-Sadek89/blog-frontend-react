import { configureStore } from '@reduxjs/toolkit';
import getPostsSlice from './Slices/getPosts.slice';
import getCategoriesSlice from './Slices/getCategoriesSlice';
import user_register_slice from './Slices/async_slices/register.slice';
import user_login_slice from './Slices/async_slices/login.slice';

export const store = configureStore({
    reducer: {
        user_register: user_register_slice,
        user_login_state: user_login_slice,
        //
        categories_get: getCategoriesSlice,
        posts_get: getPostsSlice
    }
})

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
