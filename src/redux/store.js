import accountReducer from "./accountSlice";
import localeReducer from "./localeSlice";
import countReducer from "./countSlice";
import filterReducer from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
    count: countReducer,
    filter: filterReducer,
  },
});
