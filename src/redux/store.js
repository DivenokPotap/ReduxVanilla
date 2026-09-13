import { combineReducers, createStore } from "redux";
import accountReducer from "./accountReducer";
import localeReducer from "./localeReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  account: accountReducer,
  locale: localeReducer,
});

const devtoolsRedux = devToolsEnhancer();

export const store = createStore(rootReducer, devtoolsRedux);
