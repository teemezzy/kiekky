import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import "./App.css";
import { Footer } from "./components";
import RequireAuth from "./features/auth/RequireAuth";
import { Sidebar } from "./components";
import {
  KiekkyHome,
  Home,
  TermsConditions,
  Privacy,
  NotFound,
  Profile,
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
  Dashboard
} from "./pages";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<KiekkyHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/user_setup" element={<AccountSetup />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="community" element={<Community />} /> */}


        {/* <Route path="/home" element={<Home />}> */}
          <Route element={<RequireAuth />}>
            <Route path="user/:userid" element={<Profile />} />
          </Route>
        {/* </Route> */}
      </Routes>

      <Dashboard>    
<Routes>   
  
      <Route path="/dashboard" element={<Navigate to='/home'  />} />
    <Route path="/home" element={<Home />} />
<Route path="/messages" element={<Messages />} />
<Route path="/dates" element={<Dates />} />
<Route path="/settings" element={<Settings />} />
<Route path="/wallet" element={<Wallet />} />   
        </Routes>
        </Dashboard> 


 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
