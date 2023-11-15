import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../../../../assets/env";
import {
  PostByParamOutput,
  postGetByParamState,
  postId,
} from "../../interfaces/post";

const initialState: postGetByParamState = {
  loading: false,
  error: false,
  data: {
    status: 0,
    result: {} as PostByParamOutput,
  },
};

export const post_getById = createAsyncThunk<PostByParamOutput, postId>(
  "posts/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${api_link}/posts/${payload.id}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const post_getById_slice = createSlice({
  name: "posts/getById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(post_getById.pending, (state) => {
        state.loading = true;
        (state.error = false),
          (state.data = {
            status: 0,
            result: {},
          });
      })
      .addCase(post_getById.fulfilled, (state, { payload }) => {
        state.loading = false;
        (state.error = false),
          (state.data = {
            status: payload.status,
            result: payload.result,
          });
      })
      .addCase(post_getById.rejected, (state, action) => {
        const payload = action.payload as PostByParamOutput;
        state.loading = false;
        (state.error = true),
          (state.data = {
            status: payload.status,
            result: payload.result,
          });
      });
  },
});

export default post_getById_slice.reducer;
