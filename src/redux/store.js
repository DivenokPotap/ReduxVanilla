import { combineReducers, createStore } from "redux";
import accountReducer from "./accountReducer";
import localeReducer from "./localeReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import countReducer from "./countReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  locale: localeReducer,
  count: countReducer,
  filter: filterReducer,
});

const devtoolsRedux = devToolsEnhancer();

export const store = createStore(rootReducer, devtoolsRedux);
