import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserLogout = createAsyncThunk(
    'logout/fetchUserLogout',
    async (user) => {
        
        const response = await fetch(
            'http://127.0.0.1:8000/api/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                'Authorization': `Bearer ${user.token}`,
            },
            body: null,
        });
        const data = await response.json();
        return data;
    }
);

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        user: null,
        status: null,
        error: null,
    },
    reducers: {},
});

export default logoutSlice.reducer;