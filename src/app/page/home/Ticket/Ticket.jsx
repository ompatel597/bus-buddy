import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import bLogo from "../../../assets/bb-logo.png";
import RightArrow from "../../../assets/right-arrow-ticket.png";

const Ticket = () => {
  const navigater = useNavigate()
  const [Tickets, setTickets] = useState();

  const [loading, setloading] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  const Ticketno = searchParams.get("ticketno");
  const TotalSeat = searchParams.get("TotalSeats");

  useEffect(() => {
    async function getData() {
      setloading(true);
      try {
        const ress = await fetch(
          "https://busbooking.bestdevelopmentteam.com/Api/tickit.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ticketno: Ticketno,
            }),
          }
        );
        const responces = await ress.json();
        setTickets(responces);
        console.log(responces);
        setloading(false);
      } catch {
        console.log("errr");
      }
    }
    getData();
  }, []);

  const navigateHome = () => {
    navigater("/")
  }

  return (
    <>
      {loading ? (
        <div style={{ marginLeft: 650, marginTop: 50 }} class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div>
          {Tickets?.tickit?.map((g, j) => (
            <div style={{ marginTop: 30 }} className="Ticket-container" key={j}>
              {/* Main Header */}
              <div className="Ticket-header">
                <div className="Ticket-header-left">
                  <img style={{ scale: "1.2" }} src={bLogo} alt="" />
                </div>
                <div className="Ticket-header-right">
                  <b>Need help with your trip?</b>
                  <p>+91 88888 88888</p>
                  <a>busbuddy@gmail.com</a>
                </div>
              </div>

              <hr
                style={{
                  height: 2,
                  backgroundColor: "black",
                  border: "none",
                  borderRadius: 2,
                  width: "98%",
                  margin: "auto",
                  opacity: 0.1,
                }}
              />
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
                    {g.day}, {g.bookingdate}
                  </div>
                </div>
                {/* Ticket no */}
                <div className="Ticket-number">
                  <span>
                    <b>Ticket no: {Ticketno}</b>
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
                  <b style={{ fontSize: 20 }}> {TotalSeat} </b>
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
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
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
          <div className="back-to-home">
            <button onClick={navigateHome}>
              <span> Back to Home</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Ticket;
