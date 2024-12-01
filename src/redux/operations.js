import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logOut",
    async (credentials, thunkAPI) => {
        try {
            await axios.post('users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/me');
      return res.data;
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