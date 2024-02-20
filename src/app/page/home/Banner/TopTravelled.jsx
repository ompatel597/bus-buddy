import React from 'react'
import TopTravelledCard from '../../../Components/TopTravelledCard/TopTravelledCard'

import tt1 from "../../../assets/tt1.jpg"
import tt2 from "../../../assets/tt2.jpg"
import tt3 from "../../../assets/tt3.jpg"
import tt4 from "../../../assets/tt4.jpg"
import tt5 from "../../../assets/tt5.jpg"
import tt6 from "../../../assets/tt6.jpg"

const TopTravelled = () => {
  return (
    <div className='TopTravelledCardDiv'>
      <TopTravelledCard img={tt1} route="Buses from mumbai to delhi"/>
      <TopTravelledCard img={tt2} route="Buses from mumbai to delhi"/>
      <TopTravelledCard img={tt3} route="Buses from mumbai to delhi"/>
      <TopTravelledCard img={tt4} route="Buses from mumbai to delhi"/>
      <TopTravelledCard img={tt5} route="Buses from mumbai to delhi"/>
      <TopTravelledCard img={tt6} route="Buses from mumbai to delhi"/>
    </div>
  )
}

export default TopTravelled
