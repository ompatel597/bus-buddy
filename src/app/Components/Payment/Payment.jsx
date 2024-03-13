import React from "react";
import { toast } from "react-toastify";
import QrImg from "../../assets/qr_img.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import SecureLS from "secure-ls";

const Payment = () => {
  

  var ls = new SecureLS();
  const currentUser = ls.get('busbuddy_user_info');

  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const TotalSeats = searchParams.get("TotalSeats");

  const get_order_details = JSON.parse(localStorage.getItem("order_details"));

  // get_order_details.map( (r) => {
  //   <p> {r.date} </p>
  // } )

  const order_confirm = async () => {
    // call order confirm api call
    try {
      const response = await fetch(
        "https://busbooking.bestdevelopmentteam.com/Api/passenger.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: get_order_details.price,
            start: get_order_details.start,
            end: get_order_details.end,
            cid: currentUser.cid,
            date: get_order_details.date,
            busid: get_order_details.busid,
            passenger_data: get_order_details.passenger_data,
          }),
        }
      );
      const setrep = await response.json();
      console.log(setrep);
      if (setrep.STATUS === true) {
        toast.success(setrep.message);
        navigate(
          `/ticket?ticketno=${setrep.ticketno}&TotalSeats=${TotalSeats}`
        );
      }
    } catch (error) {
      console.log("Error sending data");
    }
  };
  return (
    <>
      <div className="Payment-qr">
        <h3 style={{ margin: "auto", display: "flex", justifyContent: 'center', marginTop: 20, fontSize: 50}}>Scan to pay</h3>
      <img
        src={QrImg}
        style={{ margin: "auto", display: "flex", marginTop: 50 }}
      />
      <button style={{margin: 'auto', marginTop: 20, cursor: 'pointer'}} onClick={order_confirm}>Pay</button>
      </div>
      
    </>
  );
};

export default Payment;
