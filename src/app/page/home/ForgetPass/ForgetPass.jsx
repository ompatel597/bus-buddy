import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
};

const ForgetPass = () => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
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
          console.log(res);
          if (res.STATUS === true) {
            navigate("/otpverify");
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
    <div>
      <div className="form-container-fp">
        <div className="logo-container-fp">Forgot Password</div>
        <form className="form-fp" onSubmit={handleSubmit}>
          <div className="form-group-fp">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button className="form-submit-btn-fp" type="submit">
            Send Email
          </button>
        </form>
        {/* <p className="signup-link-fp">
          Don't have an account? 
          <a>
            <Link to="/signup" className="Routes-link">
               Signup now
            </Link>
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default ForgetPass;
