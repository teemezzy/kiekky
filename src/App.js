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
  Redirect,
  Community,
  Login,
  Register,
  About,
  Contact,
  Faqs,
  ForgotPassword,
  ResetPassword,
  PasswordSuccess,
  AccountSetup,
  OTPVerification,
  Dates,
  Messages,
  Wallet,
  Settings,
  Notifications,
  PersonalProfile,
  UserProfile,
  UserSubscribe,
  RequestDates,
  EditProfile,
  ViewAll,
  SetPost,
} from "./pages";
// import PopUpModal from "./components/PPV/PopUpModal";
import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
// import { createBrowserHistory } from "history";

function App(children) {
  // let params = useParams("");

  // const history = createBrowserHistory();
  const { user } = useSelector((state) => state.auth);
  const { otp } = useSelector((state) => state.otptoken);
  // const { usersetup } = useSelector((state) => state.accountsetup);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <SkeletonTheme baseColor="#BDBDBD" highlightColor="#ffffff">
        <Routes>
          <Route exact path="/" element={user && otp ? <Home /> : <KiekkyHome />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset_password" element={<ResetPassword />} />
          <Route path="success" element={<PasswordSuccess />} />
          <Route path="redirect" element={<Redirect />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="user_setup" element={<AccountSetup />} />
            <Route path="otp" element={<OTPVerification />} />
            <Route path="feeds" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="messages" element={<Messages />} />
            <Route path="dates" element={<Dates />} />
            <Route path="settings" element={<Settings />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="user_profilegit" element={<UserProfile />} />
            <Route path="request_dates" element={<RequestDates />} />
            <Route path="edit_profile" element={<EditProfile />} />
            <Route path="view_all" element={<ViewAll />} />
            <Route path="subscribe" element={<UserSubscribe />} />
            <Route path="personal_profile" element={<PersonalProfile />} />
            <Route path="/feeds/post" element={<SetPost />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
        <ToastContainer />
      </SkeletonTheme>
    </div>
  );
}

export default App;
