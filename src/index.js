import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/Categories_context";
import { CartProvider } from "./context/Cart_context";
import { store } from "./store/store";
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
  </Provider>
);
