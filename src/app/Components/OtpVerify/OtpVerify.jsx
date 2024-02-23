import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  otpCode: "",
};

const OtpVerify = () => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        try {
          const responce = await fetch(
            "https://busbooking.bestdevelopmentteam.com/Api/submitotp.php",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                otpCode: values.otpCode,
              })
            }
          )
       console.log(responce);
          let res = await responce.json();
          console.log(res);
          if (res.STATUS === true) {
            
            navigate("/banner");
          } else {
            console.log(res);
          }
        } catch (e) {
          console.log(e);
        }
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <h1>OTP Code Verification</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="otpCode">Enter the OTP code sent to your mail:</label>
          <input
            type="text"
            id="otpCode"
            value={values.otpCode}
            onBlur={handleBlur}
            onChange={handleChange}
            name="otpCode"
            maxLength={4}
          />
          <button type="submit">Verify OTP Code</button>
        </form>
      </div>
    </>
  );
};

export default OtpVerify;
