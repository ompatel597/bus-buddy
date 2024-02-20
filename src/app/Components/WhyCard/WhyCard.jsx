import React from 'react'

const WhyCard = (card) => {
  return (
   <>
    <div className="whycard">
        <img src={card.img} alt="" />
        <h4>{card.heading}</h4>
        <p>{card.text}</p>
    </div>
   </>
  )
}

export default WhyCard
