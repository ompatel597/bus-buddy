import React from "react";
import Banner from "./app/page/home/Banner/Banner.jsx";
import Signup from "./app/page/home/Signup/Signup.jsx";
import Login from "./app/page/home/Login/Login.jsx";
import TopTravelled from "./app/page/home/Banner/TopTravelled.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./app/Components/ContactUs/ContactUs.jsx";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/banner" element={<Banner />}/> 
      <Route path="/login" element={<Login />}/> 
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  </BrowserRouter>  
  

  
  );
};

export default App;
