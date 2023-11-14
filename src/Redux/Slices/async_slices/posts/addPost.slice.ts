import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { api_link } from "../../../../assets/env";
import Cookies from "js-cookie";
import { PostInput, PostOutput, postState } from "../../interfaces/post";

const initialState: postState = {
  loading: false,
  error: false,
  data: {
    status: 0,
    result: "",
  },
};
export const addPost = createAsyncThunk<PostOutput, PostInput>(
  "posts/addNewPost",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${api_link}/posts/addNewPost`, payload, {
        headers: {
          authorization: Cookies.get("authorization")
        }
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addPost_slice = createSlice({
  name: "posts/add",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(addPost.pending, state => {
        state.data = {
            status: 0,
            result: '',
        }
        state.loading = true;
        state.error = false
    })
    .addCase(addPost.fulfilled, (state, {payload}) => {
        state.data = {
            status: payload.status,
            result: payload.result,
        }
        state.loading = false;
        state.error = false
    })
    .addCase(addPost.rejected, (state, action) => {
        const payload = action.payload as PostOutput;
        state.data = {
            status: payload.status,
            result: payload.result,
        }
        state.loading = false;
        state.error = true
    })
  }
});

export default addPost_slice.reducer;
