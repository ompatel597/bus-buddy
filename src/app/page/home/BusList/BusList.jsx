import React from "react";
import Header from "../../../Components/Header/Header";
import banner_svg from "../../../assets/banner.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import seat_icon from "../../../assets/icon_seat.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import BusDetails from "./BusDetails";

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

 

  //Bus Seats API

  // useEffect(() => {
  //   async function getSeatData(busId, date) {
  //     try {
  //       const res = await fetch(
  //         "https://busbooking.bestdevelopmentteam.com/Api/setas.php",
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             bus_id: 24,
  //             date: datepara,
  //           }),
  //         }
  //       );
  //       const setrep = await res.json();
  //       setSeats(setrep);
  //       console.log(setrep);
  //     } catch {
  //       console.log("seat error");
  //     }
  //   }
  //   getSeatData();
  // }, []);

  /// bus id and date
  const sendDataToBackend = async (busId, date) => {
    try {
      const response = await fetch(
        "https://busbooking.bestdevelopmentteam.com/Api/setas.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bus_id: 24,
            date: "2024/03/18",
          }),
        },
        // alert(busId),
        // alert(date),

      );
      const setrep = await response.json();
        setSeats(setrep);
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
        <BusDetails e={e} r={r} seats={seats} datepara={datepara} sendDataToBackend={sendDataToBackend}/>
      ))}
    </>
  );
};

export default BusList;
