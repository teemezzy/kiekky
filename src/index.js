import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store";

import { AuthProvider } from "./context/user";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider> 
    {/* <Provider store={store}> */}
      <Router>
        <App />
      </Router>
    {/* </Provider> */}
    </AuthProvider>
  </React.StrictMode>
);
