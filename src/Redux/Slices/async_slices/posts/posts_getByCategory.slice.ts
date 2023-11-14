import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postType } from "../../../../Types/types"
import axios from "axios"
import { api_link } from "../../../../assets/env"


type postByCategoryState = {
    loading: boolean,
    error: boolean,
    data: {
        status: number,
        result: postType[] | []
    }
}

const initialState: postByCategoryState = {
    loading: false,
    error: false,
    data: {
        status: 0,
        result: []
    }
}

export const posts_getByCategory = createAsyncThunk<{
    status: number,
    result: postType[] | []
},
    number>(
        'posts/getByCategory',
        async (category_id, { rejectWithValue }) => {
            try {
                const res = await axios.get(`${api_link}/posts/getlatestPosts/${category_id}`)
                return res.data
            } catch (error: any) {
                return rejectWithValue(error.response.data)
            }
        }
    )

export const posts_getByCategory_slice = createSlice({
    name: 'posts/getByCategory',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(posts_getByCategory.pending, state => {
                state.loading = true;
                state.error = false,
                    state.data = {
                        status: 0,
                        result: []
                    }
            })
            .addCase(posts_getByCategory.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = false,
                    state.data = {
                        status: payload.status,
                        result: payload.result,
                    }
            })
            .addCase(posts_getByCategory.rejected, (state, action) => {
                const payload = action.payload as {
                    status: number,
                    result: postType[] | []
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

export default posts_getByCategory_slice.reducer;