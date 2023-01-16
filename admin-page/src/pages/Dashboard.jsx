import DataCard1 from '../components/dashboard/DataCard1.jsx'
import DataCard2 from '../components/dashboard/DataCard2.jsx'
import DataCard3 from '../components/dashboard/DataCard3.jsx'
import ReportChart from '../components/dashboard/ReportChart.jsx'
import SecondChart from '../components/dashboard/SecondChart.jsx'
import { ReportSidebarContext } from '../context/reportContext.js'
import { UserSidebarContext } from '../context/userContext.js'
import { useContext, useState, useEffect } from 'react'

import React from 'react'
import { newUserData, reportsByQualificationData, reportsPerUserData, totalReportsData } from '../helpers/getUserChartData.js'
const card1 = {
  weekTotalNumber: 27,
  monthTotalNumber: 112,
  weekTotalNumberVerified: 12,
  monthTotalNumberVerified: 35
}

// total users currently in db = 104

const Dashboard = () => {
  const [barChartTitle, setBarChartTitle] = useState('None Selected');
  const [areaChartTitle, setAreaChartTitle] = useState('None Selected');
  const { reportCondition } = useContext(ReportSidebarContext);
  const {userCondition } = useContext(UserSidebarContext);
  const [reportData, setReportData] = useState([]);
  const [userData, setUserData] = useState([]);
  const reportConstants = ["CATEGORY", "STATUS", "CREATED_DATE", "RADIUS", "LOCATION"];
  const userConstants = ["NEW_USERS", "BY_USER", "BY_QUALIFICATION", "REPORTS_SUBMITTED"];

  useEffect(() => {
    if (userCondition === userConstants[0]) {
      setUserData(newUserData);
      setAreaChartTitle('New Users')
    }
    if (userCondition === userConstants[1]) {
      setUserData(reportsPerUserData);
      setAreaChartTitle('Reports Submitted Per User')
    }
    if (userCondition === userConstants[2]) {
      setUserData(reportsByQualificationData);
      setAreaChartTitle('Reports Submitted By Qualification')
    }
    if (userCondition === userConstants[3]) {
      setUserData(totalReportsData)
      setAreaChartTitle('Total Reports Submitted')
    }
    if (userCondition === null || userCondition === false) {
      setAreaChartTitle('None Selected')
      setUserData([])
    }
    console.log("User Condition: ", userCondition);
    console.log("userChartData: ", userData);

  }, [userCondition])

  useEffect(() => {
    if (reportCondition === reportConstants[0]) {
    setReportData([
      {name: 'unclear', value: 122},
      {name: 'obscured', value: 56},
      {name: 'multiple', value: 15},
      {name: 'small', value: 28}
    ])
    setBarChartTitle('count of reports by category type')
  }
  if (reportCondition === reportConstants[1]) {
    setReportData([
      {name: 'reviewer', value: 15},
      {name: 'uncertain', value: 28},
      {name: 'neutralized', value: 28},
      {name: 'dismissed', value: 41},
      {name: 'reported', value: 109}
    ])
    setBarChartTitle('count of reports by current report status')
  }
  if (reportCondition === reportConstants[2]) {
    setReportData([
      { name: 'this month', value: 11 },
      { name: 'last month', value: 42 },
      { name: '2 months ago', value: 74 },
      { name: '3 months ago', value: 35 },
      { name: '4 months ago', value: 23 },
    ]) 
    setBarChartTitle('count of reports by when they were created')
  }
  if (reportCondition === reportConstants[3]) {
    setReportData([
      {name: '5', value: 78},
      {name: '10', value: 63},
      {name: '15', value: 13},
      {name: '25', value: 41},
    ])
    setBarChartTitle('count of reports by radius of affected area in meters')
  }
  if (reportCondition === reportConstants[4]) {
    setReportData([
      {name: 'East Van', value: 23},
      {name: 'Gastown', value: 13},
      {name: 'ChinaTown', value: 32},
      {name: 'Richmond', value: 17},
      {name: 'East Hastings', value: 54},
    ])
    setBarChartTitle('count of reports by geographic area')
  }
    if (reportCondition === null || reportCondition === false) {
      setBarChartTitle('None selected')
      setReportData([])
    }
    console.log('reportCondition: ', reportCondition)
  }, [reportCondition])

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
            <h3 className="stats__title">Bar Chart: {barChartTitle}</h3>
            <ReportChart data={reportData}/>
          </div>

          <div className="stats">
            <h3 className="stats__title">{areaChartTitle}</h3>
            <SecondChart data={userData} />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Dashboard