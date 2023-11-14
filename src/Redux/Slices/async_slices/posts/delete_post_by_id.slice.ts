import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api_link } from '../../../../assets/env';
import axios from 'axios';
import Cookies from 'js-cookie';
import { PostOutput, postId, postState } from '../../interfaces/post';



const initialState: postState = {
    data: {
        status: 0,
        result: ''
    },
    loading: false,
    error: false
}

export const delete_post_by_id = createAsyncThunk<PostOutput, postId>(
    'post/deleteById',
    async (paylaod, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`${api_link}/posts/${paylaod.id}`, {
                headers: {
                    authorization: Cookies.get('authorization')
                }
            })
            return res.data;
        } catch( error: any ) {
            return rejectWithValue(error.response.data)
        }
    }
)

const delete_post_by_id_slice = createSlice({
    name: 'post/deleteById',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(delete_post_by_id.pending, (state) => {
                state.loading = true;
                state.data = {
                    status: 0,
                    result: ''
                },
                state.error = false;
            })
            .addCase(delete_post_by_id.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.data = {
                    status: payload.status,
                    result: payload.result
                };
                state.error = false;
            })
            .addCase(delete_post_by_id.rejected, (state, action) => {
                let payload = action.payload as PostOutput
                state.loading = false;
                state.data = {
                    status: payload.status,
                    result: payload.result
                }
                state.error = true;
            })
    }
})

export default delete_post_by_id_slice.reducer