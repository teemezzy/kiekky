import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components";
import {
  Home,
  HomePage,
  TermsConditions,
  Privacy,
  NotFound,
  Login,
  Register,
  About,
  Contact,
  Faqs,
  ForgotPassword,
  ResetPassword,
  AccountSetup
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="setup" element={<AccountSetup />} />

      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
