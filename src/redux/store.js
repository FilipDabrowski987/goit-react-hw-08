import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlices";
import filtersReducer from "./filtersSlices";
import authReducer from "./authSlices";
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer, persistStore } from "redux-persist";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token' ],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);