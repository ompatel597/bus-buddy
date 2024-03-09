import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Payment = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const cidUrl = searchParams.get("cid");

  const get_order_details =  JSON.parse(localStorage.getItem("order_details"))


// get_order_details.map( (r) => {
//   <p> {r.date} </p>
// } )

  const order_confirm =async () =>{
    // call order confirm api call
    try {
      const response = await fetch(
        "https://busbooking.bestdevelopmentteam.com/Api/passenger.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            busid: get_order_details.busid,
            date: get_order_details.date,
            start: get_order_details.start,
            end: get_order_details.end,
            price: get_order_details.price,
            passenger_data: get_order_details.passenger_data,
            cid: cidUrl
          }),
        },
      );
      const setrep = await response.json();
     console.log(setrep);
    } catch (error) {
      console.log("Error sending data");
    }
  }
  return (
    <div>Payment

      <button onClick={order_confirm} >
        Pay
      </button>
    </div>
  )
}

export default Payment