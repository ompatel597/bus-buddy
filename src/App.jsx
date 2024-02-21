import React from "react";
import Banner from "./app/page/home/Banner/Banner.jsx";
import Signup from "./app/page/home/Signup/Signup.jsx";
import Login from "./app/page/home/Login/Login.jsx";
import TopTravelled from "./app/page/home/Banner/TopTravelled.jsx";

const App = () => {
  return (
    <>
    <Banner/>
    <Signup/>
      <Banner />
      <TopTravelled/>
    </>
  );
};

export default App;
