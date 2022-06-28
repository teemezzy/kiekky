import React from "react";
import { Routes, Route, useParams, Navigate, Outlet } from "react-router-dom";
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
  Logout,
} from "./pages";

function App() {
  let params = useParams("");

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<KiekkyHome />} />
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
        <Route path="user_setup" element={<AccountSetup />} />
        <Route path="otp" element={<OTPVerification />} />
        {/* <Route path="/wallet" element={<Wallet />} /> */}

        {/* <Route path="/home" element={<Home />}> */}
      </Routes>

      <Dashboard>
        {/* <ProtectedRoutes> */}
          <Routes>
            {/* <Route element={<Navigate to='/home'  />} /> */}
            <Route path="home" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="messages" element={<Messages />} />
            <Route path="dates" element={<Dates />} />
            <Route path="settings" element={<Settings />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="logout" element={<Logout />} />
            <Route path="user/:userid" element={<Profile />} />
          </Routes>
        {/* </ProtectedRoutes> */}
      </Dashboard>
      <Footer />
    </div>
  );
}

export default App;
