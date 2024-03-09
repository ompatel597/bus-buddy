import React, { useState } from "react";
import user_icon from "../../../../app/assets/person.png";
import pass_icon from "../../../../app/assets/password.png";
import People_waiting from "../../../../app/assets/Peoplewaiting.webp";
import { toast } from 'react-toastify';
import email_icon from "../../../../app/assets/email.png";
import bus_img from "../../../../app/assets/signupImg.png";
import { useFormik } from "formik";
import { Link, useNavigate} from "react-router-dom";
import { LoginSchema} from "../../../Schemas";

import Demo from "../../../assets/bus.json";
import { useLottie } from "lottie-react";

const initialValues = {
  email: "",
  pass: "",
};

const Login = () => {



  const navigate = useNavigate()
  const { values, errors, handleBlur, touched , handleChange, handleSubmit } = useFormik({
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
          navigate(`/?cid=${res.cid}`)
          toast.success("Successfully login ")
          action.resetForm();
        }else {
          toast.error("email and password is incorrect")
        }
      } catch (error) {
        console.log(error);
      }
      
    },
  });


  const options = {
    animationData: Demo,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div className="main-container">
      <div className="part-1">
        {/* <img src={People_waiting} alt="" /> */}
<div className="ani">
{View}
</div>
        
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
              { errors.email && touched.email ?( <p className="form-error"> {errors.email} </p> ): null}
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
              { errors.pass && touched.pass ?( <p className="form-error"> {errors.pass} </p> ): null}
              <div className="forget-pass">
                Forget password? <span> <Link to="/forgetpass" className='Routes-link'>Click Here!</Link></span>
              </div>
              
              <div className="submit-container-login">
                <button className="submit-btn-login" type="submit">
                  Login
                </button>
                <p>Don't have an account?<span> <Link to="/signup" className='Routes-link'>Register Here</Link> </span>  </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
