import React, { useState } from "react";
import user_icon from "../../../../app/assets/person.png";
import pass_icon from "../../../../app/assets/password.png";
import email_icon from "../../../../app/assets/email.png";
import bus_img from "../../../../app/assets/signupImg.png";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  pass: "",
};

const Login = () => {
  const navigate = useNavigate()
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      try {
        const responce = await fetch("https://busbooking.bestdevelopmentteam.com/Api/user_login.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: values.email,
              password: values.pass,
            }),
          }
        );
        let res = await responce.json();
        console.log(res);
        if(res.STATUS === true){
          navigate("/banner")
        }
      } catch (error) {
        console.log(error);
      }
      action.resetForm();
    },
  });

  return (
    <div className="main-container">
      <div className="part-1">
        <img src={bus_img} alt="" />
      </div>
      <div className="part-2">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="header">
              <div className="text">Login</div>
            </div>
            <div className="inputs">
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <img src={pass_icon} alt="" />
                <input
                  type="password"
                  value={values.pass}
                  onBlur={handleBlur}
                  autoComplete="off"
                  name="pass"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="forget-pass">
                Forget password? <span>Click Here!</span>
              </div>
              <div className="submit-container">
                <button className="submit-btn" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
