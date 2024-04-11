import React from "react";
import Header from "../../../Components/Header/Header";
import banner_svg from "../../../assets/banner.svg";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import seat_icon from "../../../assets/icon_seat.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import BusDetails from "./BusDetails";
import { toast } from 'react-toastify';

const initialValues = {
  start: "",
  end: "",
  date: "",
};

const BusList = () => {

  const [loading, setloading] = useState(false);

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
      setloading(true)
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
        if (ress.status === false) {
          toast.error("Bus not found")
          
        }
        setloading(false)
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


if (startpara === endpara) {
  toast.warning("Pls select different stops")
}

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
        },
        // alert(busId),
        // alert(date),

      );
      const setrep = await response.json();
      setSeats(setrep);

    } catch (error) {
      console.log("Error sending data");
    }
  };

  const disablePreDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm < 10 ? "0" + mm : mm}-${dd < 10 ? "0" + dd : dd}`;
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
                  min={disablePreDate()}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
{loading ? <div style={{marginLeft: 670, marginBottom: -130}} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 

: 
<div>
{bus?.data?.map((e, r) => (
  <BusDetails e={e} r={r} seats={seats} datepara={datepara} sendDataToBackend={sendDataToBackend} startpara={startpara} endpara={endpara} loading={loading} setloading={setloading} useState={useState} />
))}
</div>


}
      

      
    </>
  );
};

export default BusList;
