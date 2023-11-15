import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api_link } from "../../../../assets/env";
import axios from "axios";
import {
  categoryGetAllOutput,
  categoryGetAllState,
} from "../../interfaces/categories";

const initialState: categoryGetAllState = {
  data: {
    status: 0,
    result: [],
  },
  loading: false,
  error: false,
};

export const categories_getAll = createAsyncThunk<categoryGetAllOutput>(
  "categories/getAllCategories",
  async (__, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${api_link}/categories/getAllCategories`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categories_getAll_slice = createSlice({
  name: "categories/getAllCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categories_getAll.pending, (state) => {
        state.loading = true;
        state.data = {
          status: 0,
          result: [],
        };
        state.error = false;
      })
      .addCase(categories_getAll.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = {
          status: payload.status,
          result: payload.result,
        };
        state.error = false;
      })
      .addCase(categories_getAll.rejected, (state, action) => {
        let payload = action.payload as categoryGetAllOutput;
        state.loading = false;
        state.data = {
          status: payload.status,
          result: payload.result,
        };
        state.error = true;
      });
  },
});

export default categories_getAll_slice.reducer;
