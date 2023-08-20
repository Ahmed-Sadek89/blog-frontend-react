import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRegister } from "../../../Types/types";
import axios from "axios";
import { api_link } from "../../../assets/env";

interface registerState {
    loading: boolean,
    error: boolean,
    data: userRegister
}

type registerPayload = FormData

const initialState: registerState = {
    loading: false,
    error: false,
    data: {
        status: 0,
        result: ""
    }
}

export const user_register = createAsyncThunk<userRegister, registerPayload>(
    'user/register',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.post<userRegister>(`${api_link}/users/rejester`, payload)
            return response.data
        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const user_register_slice = createSlice({
    name: 'users/register',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(user_register.pending, state => {
                state.data = {
                    status: 0,
                    result: ""
                },
                    state.loading = true,
                    state.error = false
            })
            .addCase(user_register.fulfilled, (state, { payload }) => {
                state.data = {
                    status: payload.status,
                    result: payload.result
                }
                state.loading = false;
                state.error = false;
            })
            .addCase(user_register.rejected, (state, action) => {
                const payload = action?.payload as userRegister
                state.data = {
                    status: payload.status || 0,
                    result: payload.result || ''
                }
                state.loading = false,
                    state.error = true
            })
    }
})


export default user_register_slice.reducer