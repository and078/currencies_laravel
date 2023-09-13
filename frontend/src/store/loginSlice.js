import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserLogin = createAsyncThunk(
    'login/fetchUserLogin',
    async (bodyToFetch) => {
        const response = await fetch(   
            'http://127.0.0.1:8876/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
            },
            body: JSON.stringify(bodyToFetch)
        });
        const data = await response.json();
        return data;
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        status: null,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            // localStorage.removeItem('user'); 
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserLogin.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUserLogin.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.user = action.payload;
                localStorage.setItem('user', action.payload);
                state.error = null;
            })
            .addCase(fetchUserLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.user = null;
                state.error = action.error.message;
            })
    }
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;