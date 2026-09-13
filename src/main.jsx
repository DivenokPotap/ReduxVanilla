import React from "react";
import { BrowserRouter } from "react-router";
import App from "./App";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/redux">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
