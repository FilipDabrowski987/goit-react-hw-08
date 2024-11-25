import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlices";
import filtersReducer from "./filtersSlices";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});