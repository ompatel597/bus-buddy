import React from "react";
import Header from "../../../Components/Header/Header";
import banner_svg from "../../../assets/banner.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import seat_icon from "../../../assets/icon_seat.svg";
import { useNavigate, useSearchParams } from "react-router-dom";

const initialValues = {
  start: "",
  end: "",
  date: "",
};

const BusList = () => {
  const navigater = useNavigate();
  const [user, setUser] = useState();
  const [bus, setBus] = useState();

  const [seats, setSeats] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  const startpara = searchParams.get("start");
  const endpara = searchParams.get("end");
  const datepara = searchParams.get("date");

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
              start: startpara,
              end: endpara,
              date: datepara,
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

  useEffect(() => {
    handleSubmit();
  }, [startpara, endpara, datepara]);

  const [showSeat, setShowSeat] = useState(false);

  //Bus Seats API

  useEffect(() => {
    async function getData(values) {
      try {
        const res = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/setas.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bus_id: 24,
              date: datepara,
            }),
          }
        );
        const setrep = await res.json();
        setSeats(setrep);
      } catch {
        console.log("seat error");
      }
    }
    getData();
  }, []);

  /// bus id and date
  const sendDataToBackend = async (busId, date) => {
    try {
      const response = await fetch(
        "https://busbooking.bestdevelopmentteam.com/Api/setas.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bus_id: busId,
            date: datepara,
          }),
        }
        // alert(busId),
        // alert(date)
      );
    } catch (error) {
      console.log("Error sending data", error);
    }
  };

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
                  value={startpara}
                  onChange={(e) => {
                    const valueStart = e.target.value;
                    setSearchParams((pre) => {
                      pre.set("start", valueStart);
                      return pre;
                    });
                  }}
                >
                  {user?.map((e, j) => (
                    <option key={j}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div className="source-ending">
                <label htmlFor="destination">DESTINATION</label>
                <select
                  name="end"
                  value={endpara}
                  onChange={(e) => {
                    const valueEnd = e.target.value;
                    setSearchParams((pre) => {
                      pre.set("end", valueEnd);
                      return pre;
                    });
                  }}
                >
                  {user?.map((e, i) => (
                    <option key={i}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div className="date-bus">
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  value={datepara}
                  onChange={(e) => {
                    const valueDate = e.target.value;
                    setSearchParams((pre) => {
                      pre.set("date", valueDate);
                      return pre;
                    });
                  }}
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
                  <g clipPath="url(#star_svg__a)">
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
              <span> bus id: {e.busid}</span>
              <span>5h 30m</span>
              <span>{e.DeptTime}</span>
            </div>
            <div className="showBusPrice">
              <p>
                <span>from</span> ₹{e.price}
              </p>
              <div className="selectSeatBtn">
                <button
                  type="submit"
                  onClick={() => {
                    setShowSeat(!showSeat);

                    const busId = e.busid;
                    const date = datepara;
                    sendDataToBackend(busId, date);
                  }}
                >
                  Select seat
                </button>
                <span>{e.AvSeats} seats available</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="showBusLower"></div>

          {/* Bus seats */}
          {showSeat && (
            <div className="bus-seats">
              {seats?.seats?.map((s, k) => (
                <table key={k}>
                  <tbody>
                    {/* Seat */}
                    <tr className="first-seats-row hiddentBtn">
                      <td>
                        <div className="seat-wrapper">
                          <button className="seat">
                            <div className="seatNumber">{s.seatNo}</div>
                            <svg
                              width="64"
                              height="30"
                              viewBox="0 0 60 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="59"
                                height="29"
                                rx="3.5"
                                fill="white"
                                stroke="#BDBDBD"
                              ></rect>
                              <rect
                                x="56.5"
                                y="5.5"
                                width="3"
                                height="19"
                                rx="1.5"
                                fill="white"
                                stroke="#BDBDBD"
                              ></rect>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default BusList;
