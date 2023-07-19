import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postType } from '../../Types/types';

interface postsState {
  posts: postType[];
  loading: boolean;
  error: boolean;
}

const initialState: postsState = {
  posts: [],
  loading: false,
  error: false,
};

export const fetchPosts = createAsyncThunk<postType[]>(
    'posts/fetch',
    async ( __, { rejectWithValue }) => {
      const response = await fetch(`http://localhost:3004/posts`)
      const data = await response.json()
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data)
      }
      return data
    }
  )

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.posts = []
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.posts = []
        state.error = true;
      });
  },
});

export default postsSlice.reducer;