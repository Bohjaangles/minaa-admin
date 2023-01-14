import DataCard from '../components/dashboard/DataCard.jsx'

import React from 'react'


const card1 = {
  weekTotalNumber: 27,
  monthTotalNumber: 112,
  weekTotalNumberVerified: 12,
  monthTotalNumberVerified: 35
}


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <DataCard item={card1} />
        </div>
          {/* <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} /> */}

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Data visualization 2</h3>
            {/* <MileChart /> */}
          </div>

          <div className="stats">
            <h3 className="stats__title">Data visualization 1</h3>
            {/* <CarStatsChart /> */}
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {/* {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
            ))} */}
        </div>
      </div>
    </div>
   
  )
}

export default Dashboard
