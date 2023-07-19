import { configureStore } from '@reduxjs/toolkit';
import getPostsSlice from './Slices/getPosts.slice';
import getCategoriesSlice from './Slices/getCategoriesSlice';

export const store = configureStore({
    reducer: {
        categories_get: getCategoriesSlice,
        posts_get: getPostsSlice
    }
})

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
