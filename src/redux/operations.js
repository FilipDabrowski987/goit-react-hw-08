import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67419103e4647499008e1340.mockapi.io";

export const logIn = createAsyncThunk("auth/login",
    async (credentials, thunkAPI) => {
        try {
            ;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const fetchContacts = createAsyncThunk(
//     "contacts/fetchAll",
//     async (_, thunkAPI) => {
//         try {
//             return (await axios.get("/contacts")).data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const addContacts = createAsyncThunk(
//     "contacts/addContacts",
//     async (contact, thunkAPI) => {
//         try {
//             return (await axios.post("/contacts", contact)).data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const deleteContacts = createAsyncThunk(
//     "contacts/deleteContacts",
//     async (contactId, thunkAPI) => {
//         try {
//             await axios.delete(`/contacts/${contactId}`);
//             return contactId;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );