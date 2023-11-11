import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPostInput,
  addPostOutput,
  addPostState,
} from "../../interfaces/post";
import axios from "axios";
import { api_link } from "../../../../assets/env";
import Cookies from "js-cookie";

const initialState: addPostState = {
  loading: false,
  error: false,
  data: {
    status: 0,
    result: "",
  },
};
export const addPost = createAsyncThunk<addPostOutput, addPostInput>(
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
        const payload = action.payload as addPostOutput;
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
