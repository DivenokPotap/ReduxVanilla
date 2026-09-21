import { createSlice } from "@reduxjs/toolkit";


const initialLang = { lang: "Uk" };

const localeSlice = createSlice({
  name: "locale",
  initialState: initialLang,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload
    }
  }
})

export const { changeLang } = localeSlice.actions

export default localeSlice.reducer