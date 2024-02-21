import React, { useState } from "react";
import user_icon from "../../../../app/assets/person.png";
import pass_icon from "../../../../app/assets/password.png";
import email_icon from "../../../../app/assets/email.png";
import bus_img from "../../../../app/assets/signupImg.png";
import phone_icon from "../../../../app/assets/phone.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../../Schemas";

const initialValues = {
  name: "",
  phone:"",
  email:"",
  pass:"",
  conpass:"",
}

const Signup = () => {

  const {values, errors, handleBlur,handleChange , handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async(values) => {
      try {
        const responce = await fetch("https://busbooking.bestdevelopmentteam.com/Api/user_registration.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.name,
            mobile_no: values.phone,
            email: values.email,
            password: values.pass,
          }),
        });
  
        let res = await responce.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  })


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
          <form  onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
                { <p className="form-error"> {errors.name} </p> }
              <div className="input">
                <img src={phone_icon} alt="" />
                <input
                  type="tel"
                  value={values.phone}
                  onBlur={handleBlur}
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                />
              </div>
              { <p className="form-error"> {errors.phone} </p> }

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
              { <p className="form-error"> {errors.email} </p> }

              <div className="input">
                <img src={pass_icon} alt="" />
                <input
                  type="password"
                  value={values.pass}
                  onBlur={handleBlur}
                  autoComplete="off"
                  name="pass"
                  placeholder="Create Password"
                  onChange={handleChange}
                />
              </div>
              { <p className="form-error"> {errors.pass} </p> }

              <div className="input">
                <img src={pass_icon} alt="" />
                <input
                  type="password"
                  value={values.conpass}
                  onBlur={handleBlur}
                  autoComplete="off"
                  name="conpass"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </div>
              { <p className="form-error"> {errors.conpass} </p> }

            </div>
            <div className="forget-pass">
              Already have an account? <span>Login now</span>
            </div>
            <div className="submit-container">
              <button className="submit-btn" type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
