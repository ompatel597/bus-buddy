import React, { useState } from "react";
import nextIcon from "../../../app/assets/next_cinfo_icon.png";
import passengerIcon from "../../../app/assets/pass_user.png";

const PassDetails = () => {
  return (
    <>
      <form>
        <div className="cusinfo slidein">
          {/* Header */}
          <div className="cinfo-header">
            <img className="passenger-arrow" src={nextIcon} alt="" />
            <h4 className="passenger-maintitle">Passenger Details</h4>
          </div>
          {/* Passenger card Header  */}
          <div className="cinfo-container">
            <div className="passenger-info-title">
              <img src={passengerIcon} alt="" />
              <span>Passenger Information</span>
            </div>
            {/* Passenger card - no - seat  */}
            <div className="passenger-info-block">
              <div className="passenger-subtitle">
                <span>Passenger : 1 </span>

                <div className="passenger-seat">
                  <div className="passenger-seat-number">
                    <b>Seat : 12</b>
                  </div>
                </div>
              </div>

              {/* Passenger card < name / gender / age >  */}

              <div className="passenger-contact-container">
                <div className="passenger-name">
                  <label htmlFor="name">
                    Name : <br />
                    <input type="text" id="name" />
                  </label>
                </div>
                <div className="passenger-gender">
                  <span>Gender : </span>
                  <div className="gender-radio">
                    <input type="radio" id="male" name="gender" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <div className="passenger-age">
                  <label htmlFor="age">
                    Age : <br />
                    <input className="age-input" type="text" id="age" />
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="proceed-to-pay-btn">
              Proceed to pay
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PassDetails;
