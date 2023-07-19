import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface categoriesState{
    categories: string[],
    loading: boolean,
    error: boolean
}


const initialState: categoriesState = {
    categories: [],
    loading: false,
    error: false
}

export const fetchCategories = createAsyncThunk<string[]>(
    'categories/fetch',
    async ( __, { rejectWithValue } ) => {
        const response = await fetch(`http://localhost:3004/categories`)
        const data = await response.json()
        if (response.status < 200 || response.status >= 300) {
          return rejectWithValue(data)
        }
        return data
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.categories = []
                state.error = false;
            }) 
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload
                state.error = false;
            }) 
            .addCase(fetchCategories.rejected, (state) => {
                state.loading = false;
                state.categories = []
                state.error = true;
            }) 
    }
})

export default categoriesSlice.reducer