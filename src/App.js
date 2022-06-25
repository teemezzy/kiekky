import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Footer } from "./components";
// import RequireAuth from "./features/auth/RequireAuth";
import ProtectedRoutes from "./components/ProtectedRoutes";
import {
  KiekkyHome,
  Home,
  TermsConditions,
  Privacy,
  NotFound,
  Profile,
  Dashboard,
  Community,
  Login,
  Register,
  About,
  Contact,
  Faqs,
  ForgotPassword,
  ResetPassword,
  AccountSetup,
  OTPVerification,
  Dates,
  Messages,
  Wallet,
  Settings,
} from "./pages";

function App() {
  let params = useParams("");

  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element={<KiekkyHome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset" element={<ResetPassword />} />

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="user_setup" element={<AccountSetup />} />
          <Route path="otp" element={<OTPVerification />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="community" element={<Community />} />
          <Route path="messages" element={<Messages />} />
          <Route path="dates" element={<Dates />} />
          <Route path="settings" element={<Settings />} />
          <Route path="wallet" element={<Wallet />} />
          <Route element={<Dashboard />} />
          <Route path="user" element={<Profile />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
