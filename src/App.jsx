import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import ContactUs from "./app/Components/ContactUs/ContactUs.jsx";
import Footer from "./app/Components/Footer/Footer.jsx";
import OtpVerify from "./app/Components/OtpVerify/OtpVerify.jsx";
import ResetPass from "./app/Components/ResetPass/ResetPass.jsx";
import TopTravelled from "./app/page/home/Banner/TopTravelled.jsx";
import Payment from "./app/Components/Payment/Payment.jsx";

//Page-home
import Banner from "./app/page/home/Banner/Banner.jsx";
import BusList from "./app/page/home/BusList/BusList.jsx";
import EmailVerification from "./app/page/home/EmailVerification/EmailVerification.jsx";
import ForgetPass from "./app/page/home/ForgetPass/ForgetPass.jsx";
import Signup from "./app/page/home/Signup/Signup.jsx";
import Login from "./app/page/home/Login/Login.jsx";
import Error from "./app/page/home/Error.jsx";
import PassDetails from "./app/Components/PassDetails/PassDetails.jsx";
import Ticket from "./app/page/home/Ticket/Ticket.jsx";
import Profile from "./app/Components/Profile/Profile.jsx";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/emailverify" element={<EmailVerification />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/otpverify" element={<OtpVerify />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/buslist" element={<BusList />} />
        <Route path="/passDetails" element={<PassDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/profile" element={<Profile />} />
        
        


        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
