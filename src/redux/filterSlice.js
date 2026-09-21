import { createSlice } from "@reduxjs/toolkit";

const initialFilter = { filter: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    changeFilter: (state,action) => {
      state.filter = action.payload
    }
  }
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer