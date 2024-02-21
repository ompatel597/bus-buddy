import React from "react";
import user_icon from "../../../../src/app/assets/person.png";
import email_icon from "../../../app/assets/email.png";

const ContactUs = () => {
  return (
    <div>
      <form className="form-cu">
        <p className="form-title-cu">Get in touch</p>
        <div className="input-container-cu">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Enter your name" />
          <div>
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="input-container-cu">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="what can we help with ?"
          ></textarea>
        </div>
        <button type="submit" className="submit-cu">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
