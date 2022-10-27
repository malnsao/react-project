import { createSlice } from "@reduxjs/toolkit";

import configLocal from "@/locales";
import Flag_en from "@/assets/header/Flag_en.png";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    locale: "en",
    messages: configLocal["en"],
    imgSrc: Flag_en,
    textName: "EN",
  },
  reducers: {
    onChoose(state, { payload }) {
      state.locale = payload.locale;
      state.messages = configLocal[payload.locale];
      state.imgSrc = payload.imgSrc;
      state.textName = payload.textName;
    },
  },
});

export const { onChoose } = languageSlice.actions;

export default languageSlice.reducer;
