import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostInputWithId, PostOutput, postState } from "../../interfaces/post";
import axios from "axios";
import { api_link } from "../../../../assets/env";
import Cookies from "js-cookie";

const initialState: postState = {
  loading: false,
  error: false,
  data: {
    status: 0,
    result: "",
  },
};

export const updatePost = createAsyncThunk<PostOutput, PostInputWithId>(
  "post/update",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${api_link}/posts/${payload.id}`, payload.formData, {
        headers: {
          authorization: Cookies.get("authorization"),
        },
      });
      return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
  }
);


export const updatePost_slice = createSlice({
    name: "posts/update",
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
      .addCase(updatePost.pending, state => {
          state.data = {
              status: 0,
              result: '',
          }
          state.loading = true;
          state.error = false
      })
      .addCase(updatePost.fulfilled, (state, {payload}) => {
          state.data = {
              status: payload.status,
              result: payload.result,
          }
          state.loading = false;
          state.error = false
      })
      .addCase(updatePost.rejected, (state, action) => {
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
  
  export default updatePost_slice.reducer;
