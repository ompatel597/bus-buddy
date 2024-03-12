import { useFormik } from "formik";
import { toast } from 'react-toastify';
import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { ResetPassSchema } from "../../Schemas";

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
      validationSchema: ResetPassSchema,
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
          toast.success(res.message)
            
            navigate("/login");
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
      <div className="container borderop">
        <h1>Enter your new password below</h1>
        <form onSubmit={handleSubmit}>
        <label >Enter the OTP code sent to your mail:</label>

        
          <input
                  type="password"
                  value={values.pass}
                  onBlur={handleBlur}
                  autoComplete="off"
                  name="pass"
                  placeholder="Create Password"
                  onChange={handleChange}
                />
                { errors.pass && touched.pass ?( <p className="form-error"> {errors.pass} </p> ): null}

                <input type="password" name="conpass" id="" 
                autoComplete="off"
                placeholder="Confirm password"
                />

          <button type="submit" >Create password</button>
        </form>
      </div>
    </>
  );
};

export default ResetPass;
