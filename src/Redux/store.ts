import { configureStore } from '@reduxjs/toolkit';
import getPostsSlice from './Slices/async_slices/posts/getPosts.slice';
import categories_getAll_slice from './Slices/async_slices/categories/getAllCategories.slice';
import user_login_slice from './Slices/async_slices/users/login.slice';
import posts_getByCategory_slice from './Slices/async_slices/posts/posts_getByCategory.slice';
import post_getById_slice from './Slices/async_slices/posts/post_getById.slice';
import delete_post_by_id_slice from './Slices/async_slices/posts/delete_post_by_id.slice';
import addPost_slice from './Slices/async_slices/posts/addPost.slice';
import updatePost_slice from './Slices/async_slices/posts/updatePost.slice';
import user_register_slice from './Slices/async_slices/users/register.slice';

export const store = configureStore({
    reducer: {
        user_register: user_register_slice,
        user_login_state: user_login_slice,
        categories_getAll: categories_getAll_slice,
        posts_get: getPostsSlice,
        post_getById_state: post_getById_slice,
        posts_getByCategory_state: posts_getByCategory_slice,
        delete_post_by_id_state: delete_post_by_id_slice,
        addNewPostState: addPost_slice,
        updatePostState: updatePost_slice,
    }
})

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

