import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../../../../assets/env";
import { PostGetAllOutput, PostOutput, postGetAllState, postState } from "../../interfaces/post";

const initialState: postGetAllState = {
  data: {
    status: 0,
    result: [],
  },
  loading: false,
  error: false,
};

export const posts_getAll = createAsyncThunk<PostGetAllOutput>(
  "posts/getLatestPosts",
  async (__, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${api_link}/posts/getLatestPosts`, {});
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(posts_getAll.pending, (state) => {
        state.loading = true;
        state.data = {
          status: 0,
          result: [],
        };
        state.error = false;
      })
      .addCase(posts_getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = false;
        state.data = {
          status: action.payload.status,
          result: action.payload.result,
        };
      })
      .addCase(posts_getAll.rejected, (state, action) => {
        let payload = action.payload as PostGetAllOutput;
        state.loading = false;
        state.data = {
          status: payload.status,
          result: payload.result,
        };
        state.error = true;
      });
  },
});

export default postsSlice.reducer;
