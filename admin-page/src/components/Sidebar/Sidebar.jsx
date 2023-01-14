import React from 'react'
import PollIcon from '@mui/icons-material/Poll';
import { NavLink } from 'react-router-dom';
import './sidebar.css'
import { Typography } from '@mui/material';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <Typography variant='h5' className='sidebar_title'><PollIcon className='sidebar_icon' />Minaa analytics</Typography>
      </div>
      <div className="sidebar_contents">
        <div className="options">
          <ul className="nav_list">
            <li className="user-first-name"> user last name </li>
            <li className="user-last-name"> user first name</li>
            <li className="user-dob"> user dob </li>
            <li className="user-CA"> user joined </li>
            <li className="user-qauli"> user qualification </li>
            <li className="user-num-reports"> number of reports by user</li>
            <li className="filter-option"> filter reports by </li>
            <li className="report-cat"> report category</li>
            <li className="report-status"> status of report</li>
            <li className="option_1"></li>
            <li className="option_1"></li>
            <li className="option_1"></li>
            <li className="option_1"></li>
            <li className="option_1"></li>
            <li className="option_1"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
