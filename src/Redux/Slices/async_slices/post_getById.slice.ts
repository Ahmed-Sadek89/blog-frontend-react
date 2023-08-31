import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postType } from "../../../Types/types"
import axios from "axios"
import { api_link } from "../../../assets/env"


type postByIdState = {
    loading: boolean,
    error: boolean,
    data: {
        status: number,
        result: postType| undefined
    }
}

const initialState: postByIdState = {
    loading: false,
    error: false,
    data: {
        status: 0,
        result: undefined
    }
}

export const post_getById = createAsyncThunk<{
    status: number,
    result: postType| undefined
},
    number>(
        'posts/getById',
        async (Post_id, { rejectWithValue }) => {
            try {
                const res = await axios.get(`${api_link}/posts/${Post_id}`)
                return res.data
            } catch (error: any) {
                return rejectWithValue(error.response.data)
            }
        }
    )

export const post_getById_slice = createSlice({
    name: 'posts/getById',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(post_getById.pending, state => {
                state.loading = true;
                state.error = false,
                    state.data = {
                        status: 0,
                        result: undefined
                    }
            })
            .addCase(post_getById.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = false,
                    state.data = {
                        status: payload.status,
                        result: payload.result,
                    }
            })
            .addCase(post_getById.rejected, (state, action) => {
                const payload = action.payload as {
                    status: number,
                    result: postType| undefined
                }
                state.loading = false;
                state.error = true,
                    state.data = {
                        status: payload.status,
                        result: payload.result,
                    }
            })
    }
})

export default post_getById_slice.reducer;