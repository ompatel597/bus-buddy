import React from "react";
import Banner from "./app/page/home/Banner/Banner.jsx";
import Signup from "./app/page/home/Signup/Signup.jsx";
import Login from "./app/page/home/Login/Login.jsx";
import TopTravelled from "./app/page/home/Banner/TopTravelled.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./app/Components/ContactUs/ContactUs.jsx";
import EmailVerification from "./app/page/home/EmailVerification/EmailVerification.jsx";
import ForgetPass from "./app/page/home/ForgetPass/ForgetPass.jsx";
import OtpVerify from "./app/Components/OtpVerify/OtpVerify.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/emailverify" element={<EmailVerification />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/otpverify" element={<OtpVerify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
