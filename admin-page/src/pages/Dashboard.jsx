import DataCard1 from '../components/dashboard/DataCard1.jsx'
import DataCard2 from '../components/dashboard/DataCard2.jsx'
import DataCard3 from '../components/dashboard/DataCard3.jsx'
import ReportChart from '../components/dashboard/ReportChart.jsx'
import SecondChart from '../components/dashboard/SecondChart.js'
import { ReportSidebarContext } from '../context/reportContext.js'
import { useContext } from 'react'

import React from 'react'


const card1 = {
  weekTotalNumber: 27,
  monthTotalNumber: 112,
  weekTotalNumberVerified: 12,
  monthTotalNumberVerified: 35
}

// total users currently in db = 104

const Dashboard = () => {
  const { reportCondition } = useContext(ReportSidebarContext);
  const reportConstants = ["CATEGORY", "STATUS", "CREATED_DATE", "RADIUS", "LOCATION"]
  let data = []
  if (reportCondition === reportConstants[0]) {
    data = [
      {name: 'unclear', value: 122},
      {name: 'obscured', value: 56},
      {name: 'multiple', value: 15},
      {name: 'small', value: 28}
    ]
  }
  if (reportCondition === reportConstants[1]) {
    data = [
      {name: 'reviewer', value: 15},
      {name: 'uncertain', value: 28},
      {name: 'neutralized', value: 28},
      {name: 'dismissed', value: 41},
      {name: 'reported', value: 109}
    ]
  }
  if (reportCondition === reportConstants[2]) {
    data = [
      { name: 'this month', value: 11 },
      { name: 'last month', value: 42 },
      { name: '2 months ago', value: 74 },
      { name: '3 months ago', value: 35 },
      { name: '4 months ago', value: 23 },
    ] 
  }
  if (reportCondition === reportConstants[3]) {
    data = [
      {name: '5', value: 78},
      {name: '10', value: 63},
      {name: '15', value: 13},
      {name: '25', value: 41},
    ]
  }
  if (reportCondition === reportConstants[4]) {
    data = [
      {name: 'East Van', value: 23},
      {name: 'Gastown', value: 13},
      {name: 'ChinaTown', value: 32},
      {name: 'Richmond', value: 17},
      {name: 'East Hastings', value: 54},
    ]
  }

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
            <h3 className="stats__title">Bar Chart</h3>
            <ReportChart data={data}/>
          </div>

          <div className="stats">
            <h3 className="stats__title">Area Chart</h3>
            <SecondChart data={data} />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Dashboard