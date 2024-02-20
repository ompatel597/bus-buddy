import React, { useState } from "react";
import user_icon from "../../../../app/assets/person.png";
import pass_icon from "../../../../app/assets/password.png";
import email_icon from "../../../../app/assets/email.png";
import bus_img from "../../../../app/assets/signupImg.png";

const Signup = () => {
  const [name, setName] = useState();
  const [num, setNum] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [conpass, setConPass] = useState();
  const Submit = async (event) => {
    event.preventDefault();

    try {
      const responce = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          mobile_no: num,
          email: email,
          gender: "female",
          password: pass,
        }),
      });

      let res = await responce.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container">
      <div className="part-1">
        <img src={bus_img} alt="" />
      </div>
      <div className="part-2">
        <div className="container">
          <div className="header">
            <div className="text">Signup</div>
          </div>
          <form action="" onSubmit={Submit}>
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="tel"
                  placeholder="Phone"
                  onChange={(event) => {
                    setNum(event.target.value);
                  }}
                />
              </div>
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="input">
                <img src={pass_icon} alt="" />
                <input
                  type="password"
                  placeholder="Create Password"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                />
              </div>
              <div className="input">
                <img src={pass_icon} alt="" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(event) => {
                    setConPass(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="forget-pass">
              Already have an account? <span>Login now</span>
            </div>
            <div className="submit-container">
              <button className="submit-btn" type="submit">
                Sign up
              </button>
              <div className="login-btn">Log in</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
