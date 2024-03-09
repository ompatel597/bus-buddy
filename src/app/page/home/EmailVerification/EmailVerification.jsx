import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  otp: "",
};

const EmailVerification = () => {
  const vaigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const verifyEmail = searchParams.get("email");


  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        try {
          const responce = await fetch(
            "https://busbooking.bestdevelopmentteam.com/Api/user_verification.php",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: verifyEmail,
                otp: values.otpCode,
              }),
            }
          );
          let res = await responce.json();
          console.log(res);
          if (res.STATUS == true) {
            toast.success("Email verified");
            vaigate("/login");
          } else if (res.message === "timeout,ReRegister Yourself"){
            vaigate("/signup")
            toast.error("Verification failed")
          }else if (res.message === "otp not matches"){
            toast.error("Incorrect OTP")
          }
        } catch (e) {
          console.log(e);
        }
      },
    });

  return (
    <div className="container borderop">
      <h1>Email verification</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter the OTP to verify your mail :</label>
        <input
          value={values.otpCode}
          onChange={handleChange}
          name="otpCode"
          type="text"
          maxLength={4}
          placeholder="Enter OTP"
        />
        <button type="submit">Verify OTP Code</button>
      </form>
    </div>
  );
};

export default EmailVerification;
