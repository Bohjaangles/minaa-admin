import DataCard1 from '../components/dashboard/DataCard1.jsx'
import DataCard2 from '../components/dashboard/DataCard2.jsx'
import DataCard3 from '../components/dashboard/DataCard3.jsx'
import ReportChart from '../components/dashboard/ReportChart.jsx'
import SecondChart from '../components/dashboard/SecondChart.js'

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
          <DataCard1 item={card1} />
          <DataCard2 item={card1} />
          <DataCard3 item={card1} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Data visualization 2</h3>
            <ReportChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Data visualization 1</h3>
            <SecondChart />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Dashboard
