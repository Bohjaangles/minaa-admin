import React, { useContext } from 'react'
// import { NavLink } from 'react-router-dom';
import './sidebar.css'
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

// Components
import { UserSidebarContext } from '../../context/userContext';
import { ReportSidebarContext } from '../../context/reportContext';

export default function SideBar() {

  const { userCondition, setUserCondition } = useContext(UserSidebarContext);
  const { reportCondition, setReportCondition } = useContext(ReportSidebarContext);
  const userConstants = ["AGE_RANGE", "JOIN_DATE", "QUALIFICATION", "REPORTS_SUBMITTED"]
  const reportConstants = ["CATEGORY", "STATUS", "CREATED_DATE", "RADIUS", "LOCATION"]

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Typography variant='h5' className='sidebar_title'><AddchartRoundedIcon className='sidebar_icon' />Analytics</Typography>
      </div>
      <div className="sidebar__content">
        <List
          className='sidebar__list-1'
          component="SideBar"
          dense={true}
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'linear-gradient(#f2ddac, #957a3b)' }}
          subheader={<ListSubheader className='list_header-1' sx={{ bgcolor: '#D9E4F5' }}><ListItemIcon fontSize='large'>
            <AccountCircleRoundedIcon />
          </ListItemIcon>USER DATA</ListSubheader>}
        >
          <ListItem>
            <ListItemText id="switch-list-label-user-dob" primary="Age Range" />
            <Switch
              edge="end"
              checked={userCondition === userConstants[0]}
              onChange={() => {
                userCondition === userConstants[0] ? setUserCondition(false) : setUserCondition(userConstants[0])
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-user-joined" primary="Join Date" />
            <Switch
              edge="end"
              checked={userCondition === userConstants[1]}
              onChange={() => {
                userCondition === userConstants[1] ? setUserCondition(false) : setUserCondition(userConstants[1])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-user-quali" primary="Qualification" />
            <Switch
              edge="end"
              checked={userCondition === userConstants[2]}
              onChange={() => {
                userCondition === userConstants[2] ? setUserCondition(false) : setUserCondition(userConstants[2])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-user-reports" primary="Total Reports Submitted" />
            <Switch
              edge="end"
              checked={userCondition === userConstants[3]}
              onChange={() => {
                userCondition === userConstants[3] ? setUserCondition(false) : setUserCondition(userConstants[3])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
        </List>
        <List
          className='sidebar__list-2'
          component="SideBar"
          dense={true}
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'linear-gradient(#f2ddac, #957a3b)' }}
          subheader={<ListSubheader className='list_header-1' sx={{ bgcolor: '#D9E4F5' }}><ListItemIcon fontSize='large'>
            <AssessmentRoundedIcon />
          </ListItemIcon>REPORT DATA</ListSubheader>}
        >
          <ListItem>
            <ListItemText id="switch-list-label-r-category" primary="Category" />
            <Switch
              edge="end"
              checked={reportCondition === reportConstants[0]}
              onChange={() => {
                reportCondition === reportConstants[0] ? setReportCondition(false) : setReportCondition(reportConstants[0])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-stauts" primary="Status" />
            <Switch
              edge="end"
              checked={reportCondition === reportConstants[1]}
              onChange={() => {
                reportCondition === reportConstants[1] ? setReportCondition(false) : setReportCondition(reportConstants[1])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-created-at" primary="Date Created" />
            <Switch
              edge="end"
              checked={reportCondition === reportConstants[2]}
              onChange={() => {
                reportCondition === reportConstants[2] ? setReportCondition(false) : setReportCondition(reportConstants[2])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-radius" primary="Radius" />
            <Switch
              edge="end"
              checked={reportCondition === reportConstants[3]}
              onChange={() => {
                reportCondition === reportConstants[3] ? setReportCondition(false) : setReportCondition(reportConstants[3])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-r-coords" primary="Location" />
            <Switch
              edge="end"
              checked={reportCondition === reportConstants[4]}
              onChange={() => {
                reportCondition === reportConstants[4] ? setReportCondition(false) : setReportCondition(reportConstants[4])
              }}
            // inputProps={{
            //   'aria-labelledby': 'switch-list-label-wifi',
            // }}
            />
          </ListItem>
        </List>
      </div>
    </div>
  )
}
