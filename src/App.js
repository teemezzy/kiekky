import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  TermsConditions,
  Privacy,
  NotFound,
  Login,
  Register,
  About,
  Contact,
  Faqs,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
