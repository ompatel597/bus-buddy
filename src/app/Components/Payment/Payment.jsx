import React from 'react'

const Payment = () => {
  const get_order_details =  JSON.parse( localStorage.getItem("order_details"))
  

  const order_confirm = () =>{
    console.log(get_order_details);
    // call order confirm api call
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