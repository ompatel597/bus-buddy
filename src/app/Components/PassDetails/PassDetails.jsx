import React, { useState } from "react";
import nextIcon from "../../../app/assets/next_cinfo_icon.png";
import passengerIcon from "../../../app/assets/pass_user.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";

const PassDetails = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();

  const sheets = JSON.parse(searchParams.get("seatid"));

  const busid = searchParams.get("busid");
  const date = searchParams.get("date");
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const price = searchParams.get("price");

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        name: "",
        gender: "",
        age: "",
        date: date,
        passenger_data: sheets.map((e) => ({
          seatNo: e.seatNo,
          name: "",
          gender: "",
          age: "",
        })),
        busid: busid,
        price: price,
        start: start,
        end: end,
      },

      onSubmit: async (values) => {
        try {

          localStorage.setItem("order_details" , JSON.stringify(values))
          navigate("/payment")
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            {sheets?.map((e, index, t) => (
              <div key={t} className="passenger-info-block"> 
                <div className="passenger-subtitle">
                  <span>Passenger : {index + 1}</span>

                  <div className="passenger-seat">
                    <div className="passenger-seat-number">
                      <b>Seat : {e.seatNo}</b>
                    </div>
                  </div>
                </div>

                {/* Passenger card < name / gender / age >  */}

                <div className="passenger-contact-container">
                  <div className="passenger-name">
                    <label htmlFor="name">
                      Name : <br />
                      <input
                        type="text"
                        name={`passenger_data.${index}.name`}
                        placeholder="Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="passenger-gender">
                    <span>Gender : </span>
                    <div className="gender-radio">
                      <input
                        type="radio"
                        name={`passenger_data.${index}.gender`}
                        value="male"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        id="female"
                        name={`passenger_data.${index}.gender`}
                        value="female"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                  <div className="passenger-age">
                    <label htmlFor="age">
                      Age : <br />
                      <input
                        className="age-input"
                        type="text"
                        name={`passenger_data.${index}.age`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button type="submit" className="proceed-to-pay-btn">
            Proceed to pay
          </button>
        </div>
      </form>
    </>
  );
};

export default PassDetails;
