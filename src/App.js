import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Footer } from "./components";
import ProtectedRoutes from "./container/ProtectedRoutes";
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
  Notifications,
  PersonalProfile,
  UserProfile,
  UserSubscribe,
  RequestDates,
  EditProfile,
  ViewAll
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
// import { createBrowserHistory } from "history";

function App(children) {
  // let params = useParams("");

  // const history = createBrowserHistory();
  const { user } = useSelector((state) => state.auth);
  const { usersetup } = useSelector((state) => state.accountsetup);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <KiekkyHome />} />
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
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="user_setup" element={<AccountSetup />} />
          <Route path="otp" element={<OTPVerification />} />
          <Route path="feeds" element={<Home /> } />
          <Route path="community" element={<Community />} />
          <Route path="messages" element={<Messages />} />
          <Route path="dates" element={<Dates />} />
          <Route path="settings" element={<Settings />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="logout" element={<Logout />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="user_profile" element={<UserProfile />} />
          <Route path="request_dates" element={<RequestDates />} />
          <Route path="edit_profile" element={<EditProfile />} />
          <Route path='view_all' element={<ViewAll />}/>
          <Route path="subscribe" element={<UserSubscribe />} />
          <Route path="personal_profile" element={<PersonalProfile />} />
          <Route path="user/:userid" element={<Profile />} />
        </Route>
      </Routes>
      {/* <Footer /> */}

      <ToastContainer />
    </div>
  );
}

export default App;
