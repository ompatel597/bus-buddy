import React from "react";
import user_icon from "../../../../app/assets/person.png";
import pass_icon from "../../../../app/assets/password.png";
import email_icon from "../../../../app/assets/email.png";
import bus_img from "../../../../app/assets/signupImg.png";

const Login = () => {
  return (
    <div className="main-container">
      <div className="part-1">
        <img src={bus_img} alt="" />
      </div>
      <div className="part-2">
        <form action="">
          <div className="container">
            <div className="header">
              <div className="text">Login</div>
            </div>
            <form action="">
              <div className="inputs">
                <div className="input">
                  <img src={email_icon} alt="" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                  <img src={pass_icon} alt="" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="forget-pass">
                  Forget password? <span>Click Here!</span>
                </div>
                <div className="submit-container">
                  <button className="submit-btn" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
