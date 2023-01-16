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

const StatusCat = [
  {name: 'reviewer', value: 15},
  {name: 'uncertain', value: 28},
  {name: 'neutralized', value: 28},
  {name: 'dismissed', value: 41},
  {name: 'reported', value: 109}
]

const ReportCat = [
  {name: 'unclear', value: 122},
  {name: 'obscured', value: 56},
  {name: 'multiple', value: 15},
  {name: 'small', value: 28}
]

const Radius = [
  {name: '10', value: 63},
  {name: '5', value: 78},
  {name: '25', value: 41},
  {name: '15', value: 13}
]

const userAge = [
  {name: '18-25', value: 63},
  {name: '26-35', value: 78},
  {name: '36-45', value: 41},
  {name: '46-55', value: 13},
  {name: '56-65', value: 13},
]

const reportsByUser = [
  {name: '1', value: 63},
  {name: '2', value: 78},
  {name: '3', value: 41},
  {name: '4', value: 13},
  {name: '5', value: 2},
]

// users = 104

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
            <ReportChart data={ReportCat}/>
          </div>

          <div className="stats">
            <h3 className="stats__title">Data visualization 1</h3>
            <SecondChart data={StatusCat} />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Dashboard