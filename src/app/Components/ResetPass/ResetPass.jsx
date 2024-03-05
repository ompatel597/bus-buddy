import { useFormik } from "formik";
import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const initialValues = {
  email:"",
  password: "",
};

const ResetPass = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const resetEmail = searchParams.get("email");

  const { values, errors, handleBlur, handleChange, touched, handleSubmit  } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        try {
          const responce = await fetch(
            "https://busbooking.bestdevelopmentteam.com/Api/newpwd.php",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: resetEmail,
                password: values.pass,
              })
            }
          )
      
          let res = await responce.json();
          if (res.STATUS === true) {
          
            
            navigate("/");
          } else {
            alert("error")
          }
        } catch (e) {
          
          alert("error")
        }
        action.resetForm();
      },
    });

   

  return (
    <>
      <div className="container">
        <h1>OTP Code Verification</h1>
        <form onSubmit={handleSubmit}>
        <label >Enter the OTP code sent to your mail:</label>

        <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
            /> <br />
          <input
                  type="password"
                  value={values.pass}
                  onBlur={handleBlur}
                  autoComplete="off"
                  name="pass"
                  placeholder="Create Password"
                  onChange={handleChange}
                />
          <button type="submit" >Create pass</button>
        </form>
      </div>
    </>
  );
};

export default ResetPass;
