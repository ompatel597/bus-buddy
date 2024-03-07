import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const BusDetails = ({ e, r, seats, datepara, sendDataToBackend, startpara, endpara }) => {
  const [showSeat, setShowSeat] = useState(false);
  const [selectedSheets, setSelectedSheets] = useState([])



  const selectSheet = (s) => {
    const findExisting = selectedSheets.some(f => f.seatNo === s.seatNo)
    if (findExisting ) {
      const removePreSelectedData = selectedSheets.filter(f => f.seatNo !== s.seatNo)
      setSelectedSheets(removePreSelectedData)
    } else {
      
      if(selectedSheets.length<5){
        setSelectedSheets((pre) => [...pre, s])
        console.log(s.seatNo)
      }
      else{
        toast.error("You can select upto 6 seats only");

      }
      
    }
  }
  return (
    <>

      <div className="showBusDetailSection">
       


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
          {showSeat && (<>
            <div className="bus-seats">
              {seats?.seats?.map((s, k) => (
                <table key={k}>
                  <tbody>
                    {/* Seat */}
                    <tr className="first-seats-row hiddentBtn">
                      <td>

                        <div className="seat-wrapper">

                          <button className={`seat ${s.BookedStatus === true && "disable"} ${selectedSheets.some(f => f.seatNo === s.seatNo) && "active"}`} onClick={() => selectSheet(s)}>
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


                              ></rect>
                              <rect
                                x="56.5"
                                y="5.5"
                                width="3"
                                height="19"
                                rx="1.5"

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
      
             <div className="showSelectedSeatDetails">

             <h3>Boarding & Dropping</h3>
   
             <ul className="distancePoint">
               <li>
                 <div className="time">{e.DeptTime}</div>
                 <p> {startpara}</p>
                 
                 
               </li>
               <li>
                 <div className="time">{e.ArrivalTime}</div>
                 <p>{endpara}</p>
               </li>
             </ul>
             <hr />
   
             <div className="showSeatNo">
              
               <span>Seat No. </span>
               <span>{selectedSheets.map((e)=>{
                return `( ${e.seatNo} ) `
               })}</span>
             </div>
             <hr />
             <div className="fareDetails">
               <h5>Fare Details</h5>
               <div className="amountDiv">
                 <div className="amountLeft">
                   <span>Amount</span>
                   <p>Taxes will be calculated during payment</p>
                 </div>
                 <div className="amountRight">
                   <span>INR {e.price*(selectedSheets.length)}</span>
                 </div>
               </div>
             </div>
             <button>PROCEED TO BOOK</button>
           </div>
           </>
          )}
        </div>

      </div>

    </>
  )
}

export default BusDetails