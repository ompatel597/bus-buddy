import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
};

const ForgetPass = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        setloading(true);
        try {
          const responce = await fetch(
            "https://busbooking.bestdevelopmentteam.com/Api/forgetpwd",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: values.email,
              }),
            }
          );
          let res = await responce.json();
          if (res.STATUS === true) {
            toast.success("OTP sent")
            navigate(`/otpverify?email=${values.email}`);
            action.resetForm();
          } else {
            toast.error("Invalid email")
          }
          setloading(false);
        } catch (e) {
          console.log(e);
          setloading(false);
        }
        
      },
    });

  return (
    <div>
      <div className="form-container-fp">
        <div className="logo-container-fp">Forgot Password</div>
        <form className="form-fp" onSubmit={handleSubmit}>
          <div className="form-group-fp">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              required
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button
            className="form-submit-btn-fp"
            type="submit"
            disabled={loading}
          >
            {loading ? "loading" : "Send Email"}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default ForgetPass;
