import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
 
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const grant_type = process.env.REACT_APP_GRANT_TYPE;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider
      store={store}
      grant_type={grant_type}
      client_id={client_id}
      client_secret={client_secret}
      // redirectUri = {window.location.origin}
    >
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
