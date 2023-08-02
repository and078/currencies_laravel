import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserRegister = createAsyncThunk(
    'register/fetchUserRegister',
    async (bodyToRegister) => {
        const response = await fetch(
            'http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
            },
            body: JSON.stringify(bodyToRegister),
        });
        const data = await response.json();
        return data;
    }
);

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        user: null,
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserRegister.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUserRegister.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(fetchUserRegister.rejected, (state, action) => {
                state.status = 'failed';
                state.user = null;
                state.error = action.error.message;
            })
    }
});
export default registerSlice.reducer;