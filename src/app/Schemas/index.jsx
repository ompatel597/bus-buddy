import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  phone: Yup.string().min(10).max(10).matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().min(6).required("Please enter your password"),
  conpass: Yup.string()
    .required("enter your password again")
    .oneOf([Yup.ref("pass"), null], "Password must match"),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().required("Please enter your password"),
  
});


