import React from 'react'
import TopTravelledCard from '../../../Components/TopTravelledCard/TopTravelledCard'

import tt1 from "../../../assets/tt1.jpg"

const TopTravelled = () => {
  return (
    <div className='TopTravelledCardDiv'>
      <TopTravelledCard img={tt1} route="mumbai to delhi"/>
      <TopTravelledCard img={tt1} route="mumbai to delhi"/>
      <TopTravelledCard img={tt1} route="mumbai to delhi"/>
      <TopTravelledCard img={tt1} route="mumbai to delhi"/>
      <TopTravelledCard img={tt1} route="mumbai to delhi"/>
    </div>
  )
}

export default TopTravelled
