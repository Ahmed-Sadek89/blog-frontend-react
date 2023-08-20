import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../../Types/types";
import axios from 'axios';
import { api_link } from "../../../assets/env";


interface loginState {
    loading: boolean,
    error: boolean,
    data: userLogin
}

type loginPayload = {
    email: string,
    password: string
}
const initialState: loginState = {
    loading: false,
    error: false,
    data: {
        status: 0,
        result: '',
        token: ''
    }
}



export const user_login = createAsyncThunk<userLogin, loginPayload>(
    'user/login',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${api_link}/users/login`, payload)
            return res.data;
        } catch( error: any ) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const user_login_slice = createSlice({
    name: 'users/login',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(user_login.pending, state => {
            state.data = {
                status: 0,
                result: '',
            }
            state.loading = true;
            state.error = false
        })
        .addCase(user_login.fulfilled, (state, {payload}) => {
            state.data = {
                status: payload.status,
                result: payload.result,
                token: payload.token
            }
            state.loading = false;
            state.error = false
        })
        .addCase(user_login.rejected, (state, action) => {
            const payload = action.payload as userLogin;
            state.data = {
                status: payload.status,
                result: payload.result,
            }
            state.loading = false;
            state.error = true
        })
    }
})

export default user_login_slice.reducer