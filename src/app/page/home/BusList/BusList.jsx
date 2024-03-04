import React from "react";
import Header from "../../../Components/Header/Header";
import banner_svg from "../../../assets/banner.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import seat_icon from "../../../assets/icon_seat.svg";

const initialValues = {
  start: "",
  end: "",
  date: "",
};

const BusList = () => {
  const [user, setUser] = useState();
  const [bus, setBus] = useState();

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      try {
        const responce = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/bussrch.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              start: values.start,
              end: values.end,
              date: values.date,
            }),
          }
        );
        let ress = await responce.json();
        setBus(ress);
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Dropdown API
  useEffect(() => {
    async function getData() {
      try {
        const ress = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/stopsapi.php"
        );
        const responces = await ress.json();
        setUser(responces);
      } catch {
        console.log("errr");
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="main-buslist">
        <Header />
        <div className="banner_div">
          <div className="search_form">
            <form onSubmit={handleSubmit}>
              <div className="source-starting">
                <label htmlFor="">ORIGIN</label>
                <select
                  name="start"
                  value={values.start}
                  onChange={handleChange}
                >
                  {user?.map((e, j) => (
                    <option key={j}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div className="source-ending">
                <label htmlFor="destination">DESTINATION</label>
                <select name="end" value={values.end} onChange={handleChange}>
                  {user?.map((e, i) => (
                    <option key={i}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div className="date-bus">
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  name="date"
                  id="datepicker"
                />
              </div>
              <div className="search-bus">
                <button type="submit">
                  <i className="ri-search-2-line" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {bus?.data?.map((e, r) => (
        <div className="showBusDetail" key={r}>
          <div className="showBusHeader">
            <div className="showBusName">
              <h2>{e.busname}</h2>
              <span>A/c,Sleeper,Deluxe</span>
            </div>
            <div className="showBusReview">
              <div className="showRating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  fill="none"
                >
                  <g clip-path="url(#star_svg__a)">
                    <path
                      fill="#fff"
                      d="M6.5 8.636 8.573 9.89c.38.23.845-.11.745-.54l-.55-2.36 1.835-1.59a.499.499 0 0 0-.285-.875L7.904 4.32 6.96 2.09a.5.5 0 0 0-.92 0l-.945 2.225-2.415.205a.499.499 0 0 0-.285.875l1.835 1.59-.55 2.36c-.1.43.365.77.745.54z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="star_svg__a">
                      <path fill="#fff" d="M.5 0h12v12H.5z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p>4.8</p>
              </div>
              <div className="countReview">21</div>
            </div>
          </div>
          <div className="showBusMiddle">
            <div className="showBusTiming">
              <span>{e.ArrivalTime}</span>
              <span>5h 30m</span>
              <span>{e.DeptTime}</span>
            </div>
            <div className="showBusPrice">
              <p>
                <span>from</span> ₹{e.price}
              </p>
              <div className="selectSeatBtn">
                <button>Select seat</button>
                <span>{e.AvSeats} seats available</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="showBusLower"></div>

          {/* Bus seats */}
          <div className="bus-seats">
            <table>
              <tbody>
                {/* Seat */}
                <tr className="first-seats-row hiddentBtn">
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="second-seats-row hiddentBtn">
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Hiddent lines */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>&nbsp;</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>&nbsp;</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>&nbsp;</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="third-seats-row hiddentBtn">
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="seat-wrapper">
                      <button className="seat">
                        <img src={seat_icon} alt="" />
                        <span></span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default BusList;
