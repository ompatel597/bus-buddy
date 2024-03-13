import React, { useEffect, useState } from "react";
import bLogo from "../../../app/assets/bb-logo.png";
import RightArrow from "../../../app/assets/right-arrow-ticket.png";
import { useSearchParams } from "react-router-dom";
import SecureLS from "secure-ls";

const TicketHistory = () => {

  const [loading, setloading] = useState(false)

  var ls = new SecureLS();
  const currentUser = ls.get('busbuddy_user_info'); 


  const [first, setfirst] = useState([]);
  const [values, setvalues] = useState()

  const handleInput = (e) => {
    setvalues(e.target.value)
  }


  useEffect(() => {
    async function getHistory() {
      setloading(true)
      try {
        const ress = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/userhistory.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              cid: currentUser.cid,
              date: values,
            }),
          }
        );
        const Respo = await ress.json();
        console.log(Respo);
        setfirst(Respo);
        setloading(false)
      } catch {
        console.log("errr");
      }
    }
    getHistory();
  }, [values]);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center',alignItems:'center',gap:'10px'}} className="Ticket-history">
        <span >Enter Date :</span>
        <input style={{width: "11%", cursor: 'pointer' }} type="date" name="date" onChange={e => setvalues(e.target.value)}  value={values} />
      </div>
      
      {/* Main Header */}
      <div className="Ticket-header" style={{display: 'flex', justifyContent: 'end', width: "90%"}}>
        
        <div className="Ticket-header-right">
          <b>Need help with your trip?</b>
          <p>+91 88888 88888</p>
          <a>busbuddy@gmail.com</a>
          <br />
          <br />
        </div>
      </div>


      

      <hr
        style={{
          height: 3,
          backgroundColor: "orange",
          border: "none",
          borderRadius: 2,
          width: "98%",
          marginTop: 20,
          margin: "auto",
          opacity: 0.5,
        }}
      />
      {loading ? <div style={{display: 'flex', margin: 'auto', marginTop: '25vh'}} class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
      :
<div>
{first?.tickit?.map((g, j) => (
      <div style={{ marginTop: 30 }} className="Ticket-container" key={j}>
      
      <br />

      {/* Second Header */}
      <div className="Ticket-destination-date">
        {/* Start end */}
        <div style={{ display: "flex", gap: 50, fontSize: 22 }}>
          <div className="Ticket-start-end">
            <div className="Ticket-start">
              <b>{g.start}</b>
            </div>
            <div className="Ticket-Arrow">
              <img src={RightArrow} alt="" />
            </div>
            <div className="Ticket-end">
              <b>{g.end}</b>
            </div>
          </div>

          {/* day and date */}
          <div className="Ticket-day-date">
            {g.date}
          </div>
        </div>
        {/* Ticket no */}
        <div className="Ticket-number">
          <span>
            <b>Ticket no: </b>
          </span>
        </div>
      </div>
      <br />
      <hr
        style={{
          height: 3,
          backgroundColor: "#EBE2B0",
          border: "none",
          borderRadius: 2,
          width: "98%",
          margin: "auto",
        }}
      />
      <br />

      {/* Bus name - time - seats */}
      <div className="Ticket-name-time-seats">
        <div
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
          className="bus-name"
        >
          <b style={{ fontSize: 20 }}>{g.busname}</b>
          <span style={{ opacity: 0.7 }}>Bus name</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
          className="bus-reporting"
        >
          <b style={{ fontSize: 20 }}>{g.ReportingTime}</b>
          <span style={{ opacity: 0.7 }}>Reporting time</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
          className="bus-departure"
        >
          <b style={{ fontSize: 20 }}>{g.DepatureTime}</b>
          <span style={{ opacity: 0.7 }}>Departure time</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
          className="bus-seats"
        >
          <b style={{ fontSize: 20 }}> Total seat: </b>
          <span style={{ opacity: 0.7 }}>Seat numbers</span>
        </div>
      </div>
      <br />
      <hr
        style={{
          height: 2,
          backgroundColor: "black",
          border: "none",
          borderRadius: 2,
          width: "100%",
          margin: "auto",
          opacity: 0.1,
        }}
      />
      <br />

      {/* customer */}

      <div
        style={{ display: "flex", gap: 200 }}
        className="Ticket-customer"
      >


        {g?.passenger?.map((h) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
            className="Ticket-first-customer"
          >
            <b>
              <p style={{ fontSize: 20 }}> {h.name} </p>
            </b>
            <p> Seat No. {h.seatno} </p>
          </div>
        ))}

        
      </div>

      <br />
      <hr
        style={{
          height: 2,
          backgroundColor: "black",
          border: "none",
          borderRadius: 2,
          width: "100%",
          margin: "auto",
          opacity: 0.1,
        }}
      />
      <br />

      {/* Total Amount */}
      <div
        style={{ display: "flex", justifyContent: "end" }}
        className="Ticket-amount"
      >
        <p>
          Total amount :{" "}
          <b style={{ fontSize: 18 }}>
            Rs. <b style={{ fontSize: 23 }}>{g.amount}</b>
          </b>
        </p>
      </div>
    </div>
      ))}
</div>
      }

     
    </>
  );
};

export default TicketHistory;
