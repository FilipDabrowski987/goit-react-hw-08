import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlices";
import filtersReducer from "./filtersSlices";
import authReducer from "./authSlices";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});