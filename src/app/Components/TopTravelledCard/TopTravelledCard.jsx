import React from 'react'

const TopTravelledCard = (card) => {
  return (
    <div className='ttc'>
      <img src={card.img} alt="" />
      <span>{card.route}</span>
    </div>
  )
}

export default TopTravelledCard
