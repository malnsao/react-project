import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./reducer/languageSlice";
import authSlice from "./reducer/authSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
    auth: authSlice,
  },
});

export default store;
