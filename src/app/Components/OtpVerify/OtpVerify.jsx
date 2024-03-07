import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const initialValues = {
  email: "",
  otp: "",
};

const OtpVerify = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const resetEmail = searchParams.get("email");

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        setloading(true);
        try {
          const responce = await fetch(
            "https://busbooking.bestdevelopmentteam.com/Api/submitotp.php",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: resetEmail,
                otp: values.otpCode,
              }),
            }
          );
          console.log(responce);
          let res = await responce.json();
          if (res.STATUS === true) {
            console.log(res);
              toast.success("Valid OTP")
            navigate(`/resetpass?email=${resetEmail}`);
          } else {
            toast.error("invalid OTP")
            console.log(res);
          }
          setloading(false);

        } catch (e) {
          console.log(e);
        }
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container borderop">
        <h1>OTP Code Verification</h1>
        <form onSubmit={handleSubmit}>
          <label>Enter the OTP code sent to your mail:</label>
          <input
            type="text"
            value={values.otpCode}
            onBlur={handleBlur}
            onChange={handleChange}
            name="otpCode"
            maxLength={4}
            placeholder="Enter OTP"
          />
          <button type="submit">Verify OTP Code</button>
        </form>
      </div>
    </>
  );
};

export default OtpVerify;
