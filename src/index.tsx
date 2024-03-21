import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "apis/HttpInterceptor";
import { BrowserRouter as WebAppRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebAppRouter>
        <Toaster position="top-right" />
        <App />
      </WebAppRouter>
    </Provider>
  </React.StrictMode>
);
