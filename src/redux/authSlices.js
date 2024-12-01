import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlices = createSlice({
    name: 'auth',
    initialState: {
        isRefreshUser: false,
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
            })
        
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshUser = true;
            })
        
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshUser = false;
                state.isLoggedIn = true;
                state.user = action.payload;
            })
        
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshUser = false;
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