import { createSlice } from "@reduxjs/toolkit";

const authSlices = createSlice({
    name: 'auth',
    initialState: {
        isLogedIn: false,
        token: null,
        user: {
            name: null,
            email: null,
        },

    },
    
    extraReducers: (builder) => {}
}   
)

export default authSlices.reducer;