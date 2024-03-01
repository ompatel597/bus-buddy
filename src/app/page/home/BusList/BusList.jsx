import React from "react";
import Header from "../../../Components/Header/Header";
import banner_svg from "../../../assets/banner.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

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
          <div className="bus-box">
            bus name
            <div>
              {bus?.data?.map((e) => (
                <p>
                  {e.busname} <br />
                  
                  </p>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BusList;
