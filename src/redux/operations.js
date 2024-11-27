import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const logIn = createAsyncThunk("auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('users/login', credentials);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk("auth/logOut",
    async (credentials, thunkAPI) => {
        try {
            await axios.post('users/logout');
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);









export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            return (await axios.get("/contacts")).data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (contact, thunkAPI) => {
        try {
            return (await axios.post("/contacts", contact)).data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);