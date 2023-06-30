import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./UserSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
const pConfig={
  key:"root",
  version:1,
  storage
}
export const store = configureStore({
  reducer: {
    usersReducer:persistReducer(pConfig,usersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
