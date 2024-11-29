import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";

const authSlices = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        token: null,
        user: {
            name: null,
            email: null,
        },

    },
    
    extraReducers: (builder) => {
        builder
            
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            
            // .addCase(logIn.pending, (state, action) => { })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(logIn.rejected, (state) => {
                state.isLoggedIn = false;
                state.token = null;
                state.user = {
                    name: null,
                    email: null,
                };
            })
        
        // .addCase(logOut.pending, (state, action) => { })
            .addCase(logOut.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.token = null;
                state.user = {
                    name: null,
                    email: null,
                };
            })
            .addCase(logOut.rejected, (state) => {
                state.isLoggedIn = false;
                state.token = null;
                state.user = {
                    name: null,
                    email: null,
                };
            });
    },
});

export default authSlices.reducer;