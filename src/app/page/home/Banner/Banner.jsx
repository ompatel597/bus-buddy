import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import WhyCard from "../../../Components/WhyCard/WhyCard";
import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";
import TopTravelled from "./TopTravelled";
import axios from "axios";
import { toast } from 'react-toastify';
import moment from "moment";
import { date } from "yup";
import { Await, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";

import { useSearchParams } from "react-router-dom";
import SecureLS from "secure-ls";

const initialValues = {
  start: "",
  end: "",
  date: "",
};

const   Banner = () => {

  

  let [searchParams, setSearchParams] = useSearchParams();

  const cid = searchParams.get("cid");
 

  const [user, setUser] = useState();
  const navigate = useNavigate()


  
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      if (values.start != values.end) {
        navigate(`/buslist?start=${values.start}&end=${values.end}&date=${values.date}&cid=${cid}`)
      } else {
        toast.warning("Please select different stops")
      }
     
    },
  });

  // Dropdown API
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/stopsapi.php"
        );
        const responce = await res.json();
        setUser(responce);
      } catch {
        toast.error("Stops error !");
      }
    }
    getData();
  }, []);

   const disablePreDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm < 10 ? "0" + mm : mm}-${dd < 10 ? "0" + dd : dd}`;
};

  return (
    <>
      <div className="main_banner">
        <Header />
        <div className="banner_div">
          <div className="banner_text">
            <h1>Find cheap bus tickets <br />for your next trip</h1>
            <p>Easily compare and book your next trip with Busbud</p>
          </div>

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
                    min={disablePreDate()}
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

      <div className="whycard_container">
        <div className="whycard_div">
          <WhyCard
            img={icon1}
            heading="Your pick of rides at low prices"
            text="No matter where you’re going,find the perfect ride from our wide range of destinations and routes at low prices."
          />
          <WhyCard
            img={icon2}
            heading="Trust who you travel with"
            text="We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform."
          />
          <WhyCard
            img={icon3}
            heading="Scroll, click, tap and go!"
            text="Booking a ride has never been easier!  you can book a ride close to you in just minutes."
          />
        </div>
      </div>

      <TopTravelled />
    </>
  );
};

export default Banner;
