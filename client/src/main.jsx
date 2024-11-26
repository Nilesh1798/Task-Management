import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GoogleOAuthProvider clientId="203468451456-bc8121s47lnvs317sh7t9m4bv7lcvifd.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
